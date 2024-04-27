import { BlockWithParameters } from "../../classes/abstract/BlockWithParameters";
import { BlockType, Float } from "../../helpers/types";
import { MagnetInfo } from "./MagnetInfo";

export class Magnet extends BlockWithParameters<MagnetInfo> {
	public readonly type: BlockType = 73;
	protected readonly isConst: boolean = true;
	protected params: [Float, Float] = [Float(5), Float(10)];
	protected paramOrder: ["zoneRadius", "attractionSpeed"] = ["zoneRadius", "attractionSpeed"];

	public set zoneRadius(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get zoneRadius() {
		return this.params[0];
	}

	public set attractionSpeed(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get attractionSpeed() {
		return this.params[1];
	}
}
