import { Color, DrawableObject } from "./types";

declare const draw: {
    pixel: <T>(
        object: DrawableObject<T>,
        x: number,
        y: number,
        color: Color,
    ) => void

    line: <T>(
        object: DrawableObject<T>,
        startX: number,
        startY: number,
        stopX: number,
        stopY: number,
        thickness: number,
        color: Color,
    ) => void

    rectangle: <T>(
        object: DrawableObject<T>,
        xPos: number,
        yPos: number,
        width: number,
        height: number,
        fill: Color | undefined,
        stroke: Color | undefined,
        strokeThickness: number | undefined,
        rotation: number | undefined,
    ) => void

    circle: <T>(
        object: DrawableObject<T>,
        centerX: number,
        centerY: number,
        radius: number,
        fill: Color | undefined,
        stroke: Color | undefined,
        strokeThickness: number | undefined,
        rotation: number | undefined
    ) => void
    triangle: <T>(
        object: DrawableObject<T>,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        fill: Color | undefined,
        stroke: Color | undefined,
        strokeThickness: number | undefined
    ) => void

    polygon: <T>(
        object: DrawableObject<T>,
        corners: number[][],
        fill: Color,
        strokeColor: Color | undefined,
        strokeWidth: number | undefined
    ) => void

    floodFill: <T>(
        object: DrawableObject<T>,
        x: number,
        y: number,
        color: Color
    ) => void
}
