import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class BackGroundBlock extends BasicBlock {
	public readonly type: BlockType = 33;
	protected readonly isConst: boolean = false;
}
