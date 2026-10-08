import { expect, test } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const screenshotDir = resolve('screenshots')

async function loadDeferredImages(page: import('@playwright/test').Page) {
  const images = page.locator('img[loading="lazy"]')
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index)
    await image.scrollIntoViewIfNeeded()
    await image.evaluate((element: HTMLImageElement) => {
      if (element.complete) return
      return new Promise<void>((resolveImage) => {
        element.addEventListener('load', () => resolveImage(), { once: true })
        element.addEventListener('error', () => resolveImage(), { once: true })
      })
    })
  }

  const documentHeight = await page.evaluate(() => document.documentElement.scrollHeight)
  const viewportHeight = page.viewportSize()?.height ?? 800
  for (let position = 0; position < documentHeight; position += viewportHeight * 0.65) {
    await page.evaluate((top) => window.scrollTo(0, top), position)
    await page.waitForTimeout(80)
  }
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
  await expect(page.locator('[data-reveal]:not(.is-revealed)')).toHaveCount(0)

  await page.evaluate(() => window.scrollTo(0, 0))
}

test.beforeAll(async () => {
  await mkdir(screenshotDir, { recursive: true })
})

test('home comunica a marca e oferece o agendamento', async ({ page }, testInfo) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  page.on('pageerror', (error) => consoleErrors.push(error.message))
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: /o talento é 10/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /agendar pelo app/i }).first()).toHaveAttribute(
    'href',
    'https://agendamentos.bestbarbers.app/barbershop/dezebarber',
  )
  await expect(page.getByRole('link', { name: /agendar pelo whatsapp/i }).first()).toHaveAttribute(
    'href',
    /wa\.me\/5531984989858/,
  )
  await expect(page.getByRole('heading', { name: /encontre a 10/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /unidade rua do ouro/i })).toBeVisible()
  await expect(page.getByText('Segunda a sexta', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('9h às 20h', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('Platinado', { exact: true })).toBeVisible()
  await expect(page.getByText('Café à vontade', { exact: true })).toBeVisible()
  await expect(page.getByText('Bebidas geladas', { exact: true })).toBeVisible()

  const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)
  expect(hasHorizontalOverflow).toBe(false)
  expect(consoleErrors).toEqual([])

  if (testInfo.project.name === 'desktop-chrome') {
    await loadDeferredImages(page)
    await page.locator('#experiencia').scrollIntoViewIfNeeded()
    await page.locator('#experiencia').screenshot({ path: resolve(screenshotDir, 'experience-desktop.png') })
    await page.screenshot({ path: resolve(screenshotDir, 'home-desktop.png'), fullPage: true })
  }
})

test('menu móvel é acessível e a página não cria overflow', async ({ page }, testInfo) => {
  test.setTimeout(60_000)
  test.skip(testInfo.project.name !== 'mobile-chrome', 'Cenário específico para mobile')
  await page.goto('/')

  await expect(page.locator('.mobile-booking-bar')).toHaveCount(0)
  await page.locator('#servicos').scrollIntoViewIfNeeded()
  await expect(page.locator('.mobile-booking-bar')).toBeVisible()
  await loadDeferredImages(page)
  await page.locator('#experiencia').scrollIntoViewIfNeeded()
  await page.locator('#experiencia').screenshot({ path: resolve(screenshotDir, 'experience-mobile.png') })
  await page.screenshot({ path: resolve(screenshotDir, 'home-mobile-hero.png') })
  await page.screenshot({ path: resolve(screenshotDir, 'home-mobile.png'), fullPage: true })
  const menuButton = page.locator('button[aria-controls="mobile-menu"]')
  await menuButton.click()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('navigation', { name: 'Navegação móvel' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false')

  for (const width of [320, 375, 390, 430]) {
    await page.setViewportSize({ width, height: 800 })
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)
    expect(hasOverflow, `overflow horizontal em ${width}px`).toBe(false)
  }
})

test('conteúdo aparece progressivamente durante a rolagem', async ({ page }) => {
  await page.goto('/')
  const target = page.locator('#experiencia .experience-copy')

  await expect.poll(() => target.evaluate((element) => Number.parseFloat(getComputedStyle(element).opacity))).toBe(0)
  await target.scrollIntoViewIfNeeded()
  await expect.poll(() => target.evaluate((element) => Number.parseFloat(getComputedStyle(element).opacity))).toBe(1)
})

test('movimento reduzido remove animações perceptíveis', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const duration = await page.locator('.hero h1').evaluate((element) => getComputedStyle(element).animationDuration)
  const revealOpacity = await page.locator('#experiencia .experience-copy').evaluate((element) => getComputedStyle(element).opacity)
  expect(Number.parseFloat(duration)).toBeLessThan(0.001)
  expect(revealOpacity).toBe('1')
})
