import { Color } from "./types";

export class color {
    constructor(r: number | undefined, g: number | undefined, b: number | undefined, a: number | undefined)
    static newRGB(r: number | undefined, g: number | undefined, b: number | undefined): Color

    static setR(c: Color, r: number): Color
    static setG(c: Color, g: number): Color
    static setB(c: Color, b: number): Color
    static setA(c: Color, a: number): Color

    static read(c: Color): [number, number, number, number]

    static r(c: Color): number
    static g(c: Color): number
    static b(c: Color): number
    static a(c: Color): number

    static tint(color1: Color, color2: Color, factor: number): Color

    static RED: Color;
    static GREEN: Color;
    static BLUE: Color;
    static WHITE: Color;
    static BLACK: Color;
    static YELLOW: Color;
    static MAGENTA: Color;
    static CYAN: Color;
    static TRANSPARENT: Color;
}
