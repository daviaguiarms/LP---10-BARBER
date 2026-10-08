import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function run(script, args) {
  const result = spawnSync(process.execPath, [resolve(projectRoot, script), ...args], {
    cwd: projectRoot,
    stdio: 'inherit',
  })

  if (result.status !== 0) process.exit(result.status ?? 1)
}

run('node_modules/typescript/bin/tsc', ['-b'])
run('node_modules/vite/bin/vite.js', ['build'])
