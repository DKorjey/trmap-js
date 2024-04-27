import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Glass extends BasicBlock {
	public readonly type: BlockType = 31;
	protected readonly isConst: boolean = false;
}
