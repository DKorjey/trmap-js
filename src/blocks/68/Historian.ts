import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Historian extends BasicBlock {
	public readonly type: BlockType = 68;
	protected readonly isConst: boolean = false;
}
