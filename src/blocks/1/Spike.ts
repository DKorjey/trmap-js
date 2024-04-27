import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Spike extends BasicBlock {
	public readonly type: BlockType = 1;
	protected readonly isConst: boolean = false;
}
