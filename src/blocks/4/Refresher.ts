import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Refresher extends BasicBlock {
	public readonly type: BlockType = 4;
	protected readonly isConst: boolean = false;
}

