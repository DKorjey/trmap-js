import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class SmallSpikes extends BasicBlock {
	public readonly type: BlockType = 32;
	protected readonly isConst: boolean = false;
}
