import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Slope extends BasicBlock {
	public readonly type: BlockType = 22;
	protected readonly isConst: boolean = false;
}
