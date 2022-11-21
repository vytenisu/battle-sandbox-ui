import {getNewMap} from '../../services/generator'
import {IFeedHook} from './feed-interfaces'
import {useEffect} from 'react'
import {registerCallback} from '../../services/controller'

const ROOM_WIDTH = 50
const ROOM_HEIGHT = 50
const TERRAIN_WALL_INITIAL_MIN = 1
const TERRAIN_WALL_INITIAL_MAX = 10
const TERRAIN_SWAMP_INITIAL_MIN = 0
const TERRAIN_SWAMP_INITIAL_MAX = 7
const TERRAIN_WALL_GROW_MIN = 1000
const TERRAIN_WALL_GROW_MAX = 1500
const TERRAIN_SWAMP_GROW_MIN = 200
const TERRAIN_SWAMP_GROW_MAX = 500
const CREEPS_MIN = 1
const CREEPS_MAX = 9

const RANDOM_FEED_INTERVAL = 5000

export const useFeed: IFeedHook = (cb, mock) => {
  useEffect(() => {
    if (mock) {
      let timeout: NodeJS.Timeout

      const feed = () => {
        timeout = setTimeout(async () => {
          const map = await getNewMap({
            room: {width: ROOM_WIDTH, height: ROOM_HEIGHT},
            terrain: {
              initialWallMinAmount: TERRAIN_WALL_INITIAL_MIN,
              initialWallMaxAmount: TERRAIN_WALL_INITIAL_MAX,
              initialSwampMinAmount: TERRAIN_SWAMP_INITIAL_MIN,
              initialSwampMaxAmount: TERRAIN_SWAMP_INITIAL_MAX,
              growWallMinAmount: TERRAIN_WALL_GROW_MIN,
              growWallMaxAmount: TERRAIN_WALL_GROW_MAX,
              growSwampMinAmount: TERRAIN_SWAMP_GROW_MIN,
              growSwampMaxAmount: TERRAIN_SWAMP_GROW_MAX,
            },
            creeps: {
              ownMinAmount: CREEPS_MIN,
              ownMaxAmount: CREEPS_MAX,
              enemyMinAmount: CREEPS_MIN,
              enemyMaxAmount: CREEPS_MAX,
            },
          })

          cb(map)
          feed()
        }, RANDOM_FEED_INTERVAL)
      }

      feed()

      return () => {
        clearTimeout(timeout)
      }
    } else {
      registerCallback(cb)
    }
  }, [cb, mock])
}
