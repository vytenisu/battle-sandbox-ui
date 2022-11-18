export enum EObjectType {
  CREEP,
}

export type IObject = ICreep & {objectType: EObjectType}

export type ICreep = Pick<Creep, 'my' | 'pos' | 'body'> & {objectType: EObjectType.CREEP}

export type ITerrainMask = TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP
