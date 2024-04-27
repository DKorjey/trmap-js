import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class FlyModeBlock extends BasicBlock {
	public readonly type: BlockType = 23;
	protected readonly isConst: boolean = true;
}
