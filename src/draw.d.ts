import { DrawableObject } from "./types";
import { color } from "./color";

interface draw {
    pixel<T>(
        object: DrawableObject<T>,
        x: number,
        y: number,
        color: color,
    ): void;

    line<T>(
        object: DrawableObject<T>,
        startX: number,
        startY: number,
        stopX: number,
        stopY: number,
        thickness: number,
        color: color,
    ): void;

    rectangle<T>(
        object: DrawableObject<T>,
        xPos: number,
        yPos: number,
        width: number,
        height: number,
        fill: color | undefined,
        stroke: color | undefined,
        strokeThickness: number | undefined,
        rotation: number | undefined,
    ): void;

    circle<T>(
        object: DrawableObject<T>,
        centerX: number,
        centerY: number,
        radius: number,
        fill: color | undefined,
        stroke: color | undefined,
        strokeThickness: number | undefined,
        rotation: number | undefined
    ): void;
    triangle<T>(
        object: DrawableObject<T>,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        fill: color | undefined,
        stroke: color | undefined,
        strokeThickness: number | undefined
    ): void;

    polygon<T>(
        object: DrawableObject<T>,
        corners: number[][],
        fill: color,
        strokeColor: color | undefined,
        strokeWidth: number | undefined
    ): void;

    floodFill<T>(
        object: DrawableObject<T>,
        x: number,
        y: number,
        color: color
    ): void;
}