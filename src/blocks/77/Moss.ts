import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Moss extends BasicBlock {
	public readonly type: BlockType = 77;
	protected readonly isConst: boolean = false;
}
