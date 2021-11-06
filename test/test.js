import * as ws from '../ws-esm/node_modules/ws'

const server = new ws.Server({
  port: 9995
})

server.on('listening', () => {
  console.log('server listening...')
})