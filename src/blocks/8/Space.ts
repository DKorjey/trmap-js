import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { SpaceInfo } from "./SpaceInfo";

export class Space extends BlockWithParameters<SpaceInfo> {
	protected params: [Float] = [Float(-5)];
	protected paramOrder: ["power"] = ["power"];
	public readonly type: BlockType = 8;
	public readonly isConst: boolean = false;

	public set power(val: number) {
		this.params[0] = Float(val);
	}
	public get power() {
		return this.params[0];
	}
}
