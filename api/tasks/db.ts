import container from '../container'

let connectBDD = container.connectBDD

try {
  initialize()
  connectBDD.authenticate()
  console.info('Connection has been established successfully.')
  connectBDD.sync()
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

async function initialize() {
  // create db if  it doesn't already exist
  let mybdd = 'mybdd'
  await connectBDD.query(`CREATE DATABASE IF NOT EXISTS \`${mybdd}\`;`)
}