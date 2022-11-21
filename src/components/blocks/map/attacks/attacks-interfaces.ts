import {ICommand} from '../../../../types/commands'
import {IObject} from '../../../../types/simplified-screeps'

export interface IAttacksProps {
  objects: IObject[]
  commands: ICommand[]
}
