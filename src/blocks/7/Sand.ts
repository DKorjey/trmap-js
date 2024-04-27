import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Sand extends BasicBlock {
	public readonly type: BlockType = 7;
	protected readonly isConst: boolean = false;
}
