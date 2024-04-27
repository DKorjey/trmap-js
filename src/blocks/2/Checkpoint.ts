import { BasicBlock } from "../../classes/abstract/BasicBlock";
import { Vector2 } from "../../classes/real/Vector2";
import { BlockType } from "../../helpers/types";

export class Checkpoint extends BasicBlock {
	public readonly type: BlockType = 2;
	protected readonly isConst: boolean = true;
	protected override _size = new Vector2(2, 2);
}
