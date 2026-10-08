import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { existsSync } from 'node:fs'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function run(script, args) {
  const result = spawnSync(process.execPath, [resolve(projectRoot, script), ...args], {
    cwd: projectRoot,
    stdio: 'inherit',
  })

  if (result.status !== 0) process.exit(result.status ?? 1)
}

// Some environments run the build without installing dependencies first
if (!existsSync(resolve(projectRoot, 'node_modules/typescript/bin/tsc'))) {
  const npmCli = process.env.npm_execpath
  if (!npmCli) {
    console.error('Dependencies are missing. Run `npm ci` before building.')
    process.exit(1)
  }
  const shellArgs = process.platform === 'win32' ? [] : ['--script-shell=/bin/sh']
  const result = spawnSync(process.execPath, [npmCli, 'ci', '--include=dev', ...shellArgs], {
    cwd: projectRoot,
    stdio: 'inherit',
  })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run('node_modules/typescript/bin/tsc', ['-b'])
run('node_modules/vite/bin/vite.js', ['build'])
