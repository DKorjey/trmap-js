import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class BodyWitnNoPhysics extends BasicBlock {
	public readonly type: BlockType = 51;
	protected readonly isConst: boolean = false;
}
