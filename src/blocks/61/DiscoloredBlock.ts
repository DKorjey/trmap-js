import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class DiscoloredBlock extends BasicBlock {
	public readonly type: BlockType = 61;
	protected readonly isConst: boolean = false;
}
