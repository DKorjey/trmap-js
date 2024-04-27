import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Float } from "../../helpers/types";
import { IFGroundInfo } from "./IFGroundInfo";

export class IFGround extends WithCatalogs<IFGroundInfo> {
	protected isTrigger: boolean = true;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 82;
	protected readonly isConst: boolean = true;
	protected params: [Float] = [Float(1)];
	protected paramOrder: ["checkForGround"] = ["checkForGround"];

	public set checkForGround(val: number | boolean) {
		this.params[0] = Float(val);
	}

	public get checkForGround() {
		return this.params[0];
	}
}
