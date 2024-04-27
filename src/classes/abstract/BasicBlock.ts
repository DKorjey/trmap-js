import { Vector2 } from "../real/Vector2";
import { BlockType, Bool, Float, Int } from "../../helpers/types";
import { Movement } from "../real/Movement";
import { MovementType } from "../../helpers/enums";
import { Appearance } from "../real/Appearance";
import { v4 } from "uuid";

export type BasicBlockInfo = {
	position?: Vector2;
	size?: Vector2;
	appearance?: Appearance;
	angle?: Int;
	active?: Bool;
	rotationSpeed?: Int;
	movement?: Movement;
	parent?: BasicBlock;
	children?: BasicBlock[];
}

export abstract class BasicBlock {
	public uuid: string;
	public abstract readonly type: BlockType;
	protected abstract readonly isConst: boolean;

	constructor(info?: BasicBlockInfo) {
		this.uuid = v4() + '-' + new Date().getTime().toString(16);
		if (!info) return;
		if (info.position) this.position = info.position;
		if (info.size) this.size = info.size;
		if (info.angle) this.angle = info.angle;
		if (typeof info.active === "number") this.active = info.active;
		if (info.rotationSpeed) this.rotationSpeed = info.rotationSpeed;
		if (info.parent) this.parent = info.parent;
		if (info.children) this.setChildren(info.children);
		if (info.movement) this.movement = info.movement;
		if (info.appearance) this.appearance = info.appearance;
	}

	public position: Vector2 = Vector2.zero;

	protected _size: Vector2 = new Vector2(1, 1);

	public get size() {
		return this._size;
	}

	public set size(val: Vector2) {
		if (this.isConst) return;
		this._size = val;
	}

	public angle: Int = Int(0);

	public active: Bool = Bool(1);

	public appearance: Appearance = new Appearance();

	public rotationSpeed: Int = Int(0);

	public movement: Movement = new Movement();

	public parent: BasicBlock | null = null;

	public setChildren(children: (BasicBlock | BasicBlock[])[] = []) {
		for (const c of children.flat(2)) if (c.type !== 2) c.parent = this;
		return this;
	}

	public get uniqueId() {
		return this.uuid;
	}

	public get asArray() {
		const info: (number | string | Int | Float | BasicBlock)[] = [this.type, this.uuid, ...this.position.asArray, ...this._size.asArray, this.parent ?? ''];
		if (this.angle !== 0) info.push(this.angle);
		if (!this.active) info.push(this.angle !== 0 ? this.angle : '', this.active);
		info.push('');
		!this.appearance.isDefault && info.push(...this.appearance.asArray);
		this.movement.type !== MovementType.None && info.push(...this.movement.asArray);
		this.rotationSpeed !== Int(0) && info.push('R', this.rotationSpeed, 'R', '');
		return info;
	}
}
