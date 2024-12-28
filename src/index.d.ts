import * as types from "./types";
import { color } from "./color";
import { draw } from "./draw";
import { Window, Texture } from "./drawableObject";

declare module "OSGL" {
    export {
        Window,
        Texture,
        color,
        types,
        draw,
    }
}
