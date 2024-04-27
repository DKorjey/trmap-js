import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Bridge extends BasicBlock {
	public readonly type: BlockType = 27;
	protected readonly isConst: boolean = false;
}
