import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Ice extends BasicBlock {
	public readonly type: BlockType = 3;
	protected readonly isConst: boolean = false;
}

