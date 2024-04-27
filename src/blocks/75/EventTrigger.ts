import { WithCatalogs } from "../../classes/abstract/WithCatalogs";
import { BlockType, Int, Bool } from "../../helpers/types";
import { EventTriggerInfo } from "./EventTriggerInfo";

export enum EventButtontype {
	Left = 0,
	Right,
	Jump,
	Dash,
	Hook,
	ZoomOut,
	Drawing,
	HoHo,
	Bomba,
	Cry,
	No
}

export class EventTrigger extends WithCatalogs<EventTriggerInfo> {
	protected isTrigger: boolean = true;
	protected catalogsCount: number = 1;
	public readonly type: BlockType = 75;
	protected readonly isConst: boolean = true;
	protected params: [Int, Bool, Bool] = [Int(0), Bool(1), Bool(0)];
	protected paramOrder: ["buttontype", "onPress", "onRelease"] = ["buttontype", "onPress", "onRelease"];

	public set buttontype(val: number | boolean | EventButtontype) {
		this.params[0] = Int(Math.max(0, Math.min(10, +val)));
	}

	public get buttontype() {
		return this.params[0];
	}

	public set onPress(val: number | boolean) {
		this.params[1] = Bool(val);
	}

	public get onPress() {
		return this.params[1];
	}

	public set onRelease(val: number | boolean) {
		this.params[2] = Bool(val);
	}

	public get onRelease() {
		return this.params[2];
	}
}
