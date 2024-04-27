export class Vector2 {
	public x: number = 0;
	public y: number = 0;

	constructor(x?: number, y?: number)
	constructor(obj?: Vector2)
	constructor(xobj: Vector2 | number = 0, unneccsrY: number = 0) {
		if (xobj instanceof Vector2) {
			this.x = xobj.x;
			this.y = xobj.y;
		} else {
			this.x = xobj;
			this.y = unneccsrY;
		}
	}

	public set(x?: number, y?: number): this
	public set(vec?: Vector2): this
	public set(xobj: Vector2 | number = 0, y: number = 0) {
		if (xobj instanceof Vector2) {
			this.x = xobj.x;
			this.y = xobj.y;
		} else {
			this.x = xobj;
			this.y = y;
		}
		return this;
	}

	public setFromString(s: string): Vector2 {
		const divided = s.split(';');
		this.x = parseInt(divided[0], 10);
		return this;
	}

	public get angle(): number {
		return Math.atan2(this.y, this.x);
	}

	public get magnitude(): number {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	public get normalized(): Vector2 {
		return new Vector2(this).normalize();
	}

	public get clone() {
		return new Vector2(this.x, this.y);
	}

	public normalize() {
		this.x /= this.magnitude;
		this.y /= this.magnitude;
		return this;
	}

	public add(scalar: number, changeInOriginal?: boolean): Vector2
	public add(vec: Vector2, changeInOriginal?: boolean): Vector2
	public add(obj: Vector2 | number, changeInOriginal: boolean = false): Vector2 {
		const x = obj instanceof Vector2 ? obj.x : obj;
		const y = obj instanceof Vector2 ? obj.y : obj;

		if (changeInOriginal) {
			this.x += x;
			this.y += y;
			return this;
		} else return new Vector2(this.x + x, this.y + y);
	}

	public multiply(scalar: number, changeInOriginal?: boolean): Vector2
	public multiply(vec: Vector2, changeInOriginal?: boolean): Vector2
	public multiply(obj: Vector2 | number, changeInOriginal: boolean = false): Vector2 {
		const x = obj instanceof Vector2 ? obj.x : obj;
		const y = obj instanceof Vector2 ? obj.y : obj;

		if (changeInOriginal) {
			this.x *= x;
			this.y *= y;
			return this;
		} else return new Vector2(this.x * x, this.y * y);
	}

	public divide(scalar: number, changeInOriginal?: boolean): Vector2
	public divide(vec: Vector2, changeInOriginal?: boolean): Vector2
	public divide(obj: Vector2 | number, changeInOriginal: boolean = false): Vector2 {
		const x = obj instanceof Vector2 ? obj.x : obj;
		const y = obj instanceof Vector2 ? obj.y : obj;

		if (changeInOriginal) {
			this.x /= x;
			this.y /= y;
			return this;
		} else return new Vector2(this.x / x, this.y / y);
	}

	public floor(changeInOriginal?: boolean): Vector2
	public floor(changeInOriginal?: boolean): Vector2
	public floor(changeInOriginal: boolean = false): Vector2 {
		if (changeInOriginal) {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		} else return new Vector2(Math.floor(this.x), Math.floor(this.y));
	}

	public ceil(changeInOriginal?: boolean): Vector2
	public ceil(changeInOriginal?: boolean): Vector2
	public ceil(changeInOriginal: boolean = false): Vector2 {
		if (changeInOriginal) {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			return this;
		} else return new Vector2(Math.ceil(this.x), Math.ceil(this.y));
	}

	public round(changeInOriginal?: boolean): Vector2
	public round(changeInOriginal?: boolean): Vector2
	public round(changeInOriginal: boolean = false): Vector2 {
		if (changeInOriginal) {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		} else return new Vector2(Math.round(this.x), Math.round(this.y));
	}

	public trunc(changeInOriginal?: boolean): Vector2
	public trunc(changeInOriginal?: boolean): Vector2
	public trunc(changeInOriginal: boolean = false): Vector2 {
		if (changeInOriginal) {
			this.x = Math.trunc(this.x);
			this.y = Math.trunc(this.y);
			return this;
		} else return new Vector2(Math.trunc(this.x), Math.trunc(this.y));
	}

	public static get zero() {
		return new Vector2();
	}

	public static get left() {
		return new Vector2(-1, 0);
	}

	public static get right() {
		return new Vector2(1, 0);
	}

	public static get up() {
		return new Vector2(0, 1);
	}

	public static get down() {
		return new Vector2(0, -1);
	}

	public get asArray(): [number, number] {
		return [this.x, this.y];
	}
}
