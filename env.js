const { readFile, writeFile } = require('fs/promises')

async function init () {
  const env = await readFile('./.env.example', 'utf-8')

  if (!process.env.HYPER) {
    throw new Error('HYPER environment variable with valid connection string required')
  }

  const newEnv = env
    .replace(/^HYPER=.*$/m, `HYPER="${process.env.HYPER}"`)

  await writeFile('./.env', newEnv)
}

init()
