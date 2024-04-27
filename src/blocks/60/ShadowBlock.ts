import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class ShadowBlock extends BasicBlock {
	public readonly type: BlockType = 60;
	protected readonly isConst: boolean = false;
}
