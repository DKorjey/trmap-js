import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class CircleWithPhysics extends BasicBlock {
	public readonly type: BlockType = 40;
	protected readonly isConst: boolean = true;
}
