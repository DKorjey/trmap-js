import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Circle extends BasicBlock {
	public readonly type: BlockType = 21;
	protected readonly isConst: boolean = false;
}
