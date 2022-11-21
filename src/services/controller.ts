import {IFeedCallback} from './../hooks/feed/feed-interfaces'
import {w3cwebsocket as SocketClient} from 'websocket'

const RETRY_DELAY = 3000

let feedCb: IFeedCallback = () => {}
let usedUrl: string | null = null
let connectResolve: (_: void) => void = () => {}
let client: SocketClient

export const connect = (url = usedUrl) =>
  new Promise(resolve => {
    connectResolve = resolve
    usedUrl = url

    if (usedUrl) {
      client = new SocketClient(usedUrl, 'interface')
      client.onclose = retry

      client.onopen = function () {
        connectResolve()
        connectResolve = () => {}
      }

      client.onmessage = e => {
        if (typeof e.data === 'string') {
          feedCb(JSON.parse(e.data))
        }
      }
    }
  })

const retry = () => {
  setTimeout(() => {
    connect()
  }, RETRY_DELAY)
}

export const registerCallback = (cb: IFeedCallback) => {
  feedCb = cb
}
