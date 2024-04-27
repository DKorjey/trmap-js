import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { BlockType } from "../../helpers/types";

export class KillZone extends BasicBlock {
	public readonly type: BlockType = 76;
	protected readonly isConst: boolean = false;
}
