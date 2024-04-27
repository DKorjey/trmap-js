import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class NonHookableBlock extends BasicBlock {
	public readonly type: BlockType = 30;
	protected readonly isConst: boolean = false;
}
