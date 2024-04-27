import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Block extends BasicBlock {
	public readonly type: BlockType = 0;
	protected readonly isConst: boolean = false;
}
