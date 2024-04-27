import { MovementType } from "../../helpers/enums";
import { Vector2 } from "./Vector2";

export class Movement {
	constructor(public type: MovementType = MovementType.None,
		public speed: number = 5, public points: Vector2[] = []) { }

	public get clone() {
		return new Movement(this.type, this.speed, this.points.map(p => p.clone));
	}

	public get asArray(): ['M', MovementType, number, ...number[], 'M'] {
		return ['M', this.type, this.speed, ...this.points.map(v => v.asArray).flat(), 'M'];
	}
}
