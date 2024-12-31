import { Window as WindowObject, DrawableObject, FlagTexture, WindowConfiguration, Image } from "./types";

declare const Window: {
    new: (parent: ImageLabel | ImageButton, config: WindowConfiguration | undefined) => WindowObject
    from: (editableImage: EditableImage, renderers: Image[] | undefined) => WindowObject
    fromAssetId: (assetId: number) => WindowObject
    fromBuffer: (bfr: buffer, config: WindowConfiguration) => WindowObject
}

declare const Texture: {
    new: <T>(width: number, height: number, bfr: buffer | undefined) => DrawableObject<T>
    from: <T>(textureData: FlagTexture | ModuleScript) => DrawableObject<T>
    fromAssetId: <T>(assetId: number) => DrawableObject<T>

    draw: <T>(object: DrawableObject<T>, texture: DrawableObject<T>, spriteX: number, spriteY: number) => DrawableObject<T>
    drawRotated: <T>(object: DrawableObject<T>, texture: DrawableObject<T>, spriteX: number, spriteY: number, rotation: number) => DrawableObject<T>
    read: <T>(texture: DrawableObject<T>, xPos: number, yPos: number, width: number, height: number) => [buffer, number, number]
    scale: <T>(texture: DrawableObject<T>, scaleX: number | undefined, scaleY: number | undefined) => DrawableObject<T>
}
