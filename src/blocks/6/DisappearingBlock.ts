import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class DisappearingBlock extends BasicBlock {
	public readonly type: BlockType = 6;
	protected readonly isConst: boolean = false;
}
