import * as constants from './screeps'

const win = window as any

for (const [key, value] of Object.entries(constants)) {
  win[key] = value
}
