import {IFeedHook} from './feed-interfaces'
import {useEffect} from 'react'
import {generateRoom} from '../../utils/generator'

const ROOM_WIDTH = 50
const ROOM_HEIGHT = 50
const TERRAIN_INITIAL_MIN = 3
const TERRAIN_INITIAL_MAX = 20
const TERRAIN_WALL_GROW_MIN = 1000
const TERRAIN_WALL_GROW_MAX = 1500
const TERRAIN_SWAMP_GROW_MIN = 500
const TERRAIN_SWAMP_GROW_MAX = 1000
const CREEPS_MIN = 1
const CREEPS_MAX = 9

const RANDOM_FEED_INTERVAL = 5000

export const useFeed: IFeedHook = (cb, mock) => {
  useEffect(() => {
    if (mock) {
      const feed = () =>
        cb(
          generateRoom({
            room: {width: ROOM_WIDTH, height: ROOM_HEIGHT},
            terrain: {
              initialMinAmount: TERRAIN_INITIAL_MIN,
              initialMaxAmount: TERRAIN_INITIAL_MAX,
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
          }),
        )

      feed()

      const interval = setInterval(feed, RANDOM_FEED_INTERVAL)

      return () => {
        clearInterval(interval)
      }
    } else {
      // TODO: NOT FINISHED
    }
  }, [cb, mock])
}
