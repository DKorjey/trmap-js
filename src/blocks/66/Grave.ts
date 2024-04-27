import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class Grave extends BasicBlock {
	public readonly type: BlockType = 66;
	protected readonly isConst: boolean = false;
}
