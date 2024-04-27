import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class NonHookableSpike extends BasicBlock {
	protected readonly isConst: boolean;
	public readonly type: BlockType = 10;
}
