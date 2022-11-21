import {ICommand} from './../../types/commands'
import {IObject} from '../../types/simplified-screeps'

export interface IFeed {
  room: IRoom
  objects: IObject[]
  terrain: ITerrainMap
  commands: ICommand[]
}

export interface IRoom {
  width: number
  height: number
}

export interface ITerrainMap {
  [coordinateHash: string]: ITerrain
}

export interface ITerrain {
  terrain: TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP
}

export type IFeedCallback = (feed: IFeed) => void

export type IFeedHook = (cb: IFeedCallback, mock?: boolean) => void
