import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float, Bool } from "../../helpers/types";
import { ImpulseInfo } from "./ImpulseInfo";

export class Impulse extends WithCatalogs<ImpulseInfo> {
	protected isTrigger: boolean = false;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 78;
	protected readonly isConst: boolean = true;
	protected params: [Float, Float, Bool, Float, Bool] = [Float(0), Float(1), Bool(undefined), Float(10), Bool(1)];
	protected paramOrder: ["x", "y", "towardsTheseCoords", "multiplier", "affectToPlayer"] = ["x", "y", "towardsTheseCoords", "multiplier", "affectToPlayer"];

	public set x(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get x() {
		return this.params[0];
	}

	public set y(val: number | boolean) {
		this.params[1] = Float(val);
	}

	public get y() {
		return this.params[1];
	}

	public set towardsTheseCoords(val: number | boolean) {
		this.params[2] = Bool(val);
	}

	public get towardsTheseCoords() {
		return this.params[2];
	}

	public set multiplier(val: number | boolean) {
		this.params[3] = Float(val);
	}

	public get multiplier() {
		return this.params[3];
	}

	public set affectToPlayer(val: number | boolean) {
		this.params[4] = Bool(val);
	}

	public get affectToPlayer() {
		return this.params[4];
	}
}
