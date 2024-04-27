import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Int } from "../../helpers/types";
import { KeyInfo } from "./KeyInfo";

export class Key extends BlockWithParameters<KeyInfo> {
	public readonly type: BlockType = 18;
	protected readonly isConst: boolean = false;
	protected params: [Int] = [Int(0)];
	protected paramOrder: ["id"] = ["id"];

	public set id(val: number | boolean) {
		this.params[0] = Int(val);
	}

	public get id() {
		return this.params[0];
	}
}
