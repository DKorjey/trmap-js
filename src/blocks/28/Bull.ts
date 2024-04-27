import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int } from "../../helpers/types";
import { BullInfo } from "./BullInfo";

enum BullDirection {
	Both = 0,
	Horizontal,
	Vertical
};

export class Bull extends BlockWithParameters<BullInfo> {
	public readonly type: BlockType = 28;
	protected readonly isConst: boolean = false;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["bullType"] = ["bullType"];

	public set bullType(val: number | boolean | BullDirection) {
		this.params[0] = Int(Math.max(0, Math.min(2, +val)));
	}

	public get bullType() {
		return this.params[0];
	}
}
