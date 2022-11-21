import {IFeed} from '../hooks/feed/feed-interfaces'
import {w3cwebsocket as SocketClient} from 'websocket'
import {IRoomGenerationProps} from '../types/generator'

const RETRY_DELAY = 3000

let usedUrl: string | null = null
let currentResolve: (data: IFeed) => void = () => {}
let connectResolve: (_: void) => void = () => {}
let client: SocketClient

export const connectGenerator = (url = usedUrl) =>
  new Promise(resolve => {
    connectResolve = resolve
    usedUrl = url

    if (usedUrl) {
      client = new SocketClient(usedUrl, 'map-generation')
      client.onclose = retry

      client.onopen = () => {
        connectResolve()
        connectResolve = () => {}
      }

      client.onmessage = e => {
        if (typeof e.data === 'string') {
          currentResolve(JSON.parse(e.data))
        }
      }
    }
  })

const retry = () => {
  setTimeout(() => {
    connectGenerator()
  }, RETRY_DELAY)
}

export const getNewMap = (config: IRoomGenerationProps): Promise<IFeed> =>
  new Promise(resolve => {
    currentResolve = resolve
    client.send(JSON.stringify(config))
  })
