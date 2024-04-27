import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class BlockWithPhysics extends BasicBlock {
	public readonly type: BlockType = 26;
	protected readonly isConst: boolean = false;
}
