import chroma from "chroma-js";

export type Int = number & { readonly __t__: unique symbol };
export const Int = (n: number | boolean | string | Int | Float | Color, action: "floor" | "ceil" | "round" | "trunc" = "floor"): Int => Math[action](+(typeof n === "boolean" ? +n : parseInt(n.toString(10), 10))) as Int;

export type Float = number & { readonly __t__: unique symbol };
export const Float = (n: number | boolean | string | Int | Float): Float => (typeof n === "boolean" ? +n : parseFloat(n.toString(10)) )as Float;

export type Bool = number & { readonly __t__: unique symbol };
export const Bool = (n: number | boolean | string | Int | Float): Bool => +(typeof n === "string" ? n === "1" : n) as Bool;

export type Color = chroma.Color & { readonly __t__: unique symbol };
export const Color = (n: string | Color): Color => chroma(n) as Color;

export const paramToString = (n: chroma.Color | number | string) => typeof n === "object" && typeof n.hex === "function" ? n.hex("rgba").replace('#', '').toUpperCase() : String(n);

export type Types = "int" | "float" | "string" | "bool" | "color";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type BlockType = IntRange<0, 84>;

export type ParamEntry = [Types, string];

export type Params<T extends ParamEntry[]> = {
    [K in keyof T]: T[K] extends [infer U, any]
        ? U extends "int" ? ReturnType<typeof Int>
        : U extends "float" ? ReturnType<typeof Float>
        : U extends "bool" ? ReturnType<typeof Bool>
        : U extends "color" ? ReturnType<typeof Color>
        : U extends "string" ? string
        : never
				: never
};

export type ParamTypes<T extends ParamEntry[]> = {
    [K in keyof T]: T[K] extends [infer U, any] ? U extends Types ? U : never : never
};

export type ParamNames<T extends ParamEntry[]> = {
    [K in keyof T]: T[K] extends [any, infer U] ? U : never
};


export type RecordFromEntries<T extends ParamEntry[]> = Partial<{
	[K in keyof T as T[K] extends [any, infer Name] ? Extract<Name, string> : never]: T[K] extends [infer Type, any]
			? Type extends "int"
					? ReturnType<typeof Int>
			: Type extends "float"
					? ReturnType<typeof Float>
			: Type extends "bool"
					? ReturnType<typeof Bool>
			: Type extends "color"
					? ReturnType<typeof Color>
			: Type extends "string"
					? string
			: never
			: never
}>;
