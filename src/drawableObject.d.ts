import { Window as WindowObject, DrawableObject, FlagTexture, WindowConfiguration, Image } from "./types";

export class Window {
    static new<T>(parent: ImageLabel | ImageButton, config: WindowConfiguration | undefined): WindowObject;
    static from(editableImage: EditableImage, renderers: Image[] | undefined): WindowObject;
    static fromAssetId(assetId: number): WindowObject;
    static fromBuffer(bfr: buffer, config: WindowConfiguration): WindowObject;
}

export class Texture {
    static new<T>(width: number, height: number, bfr: buffer | undefined): DrawableObject<T>;
    static from<T>(textureData: FlagTexture | ModuleScript): DrawableObject<T>;
    static fromAssetId<T>(assetId: number): DrawableObject<T>;

    static draw<T>(object: DrawableObject<T>, texture: DrawableObject<T>, spriteX: number, spriteY: number): DrawableObject<T>;
    static drawRotated<T>(object: DrawableObject<T>, texture: DrawableObject<T>, spriteX: number, spriteY: number, rotation: number): DrawableObject<T>;
    static read<T>(texture: DrawableObject<T>, xPos: number, yPos: number, width: number, height: number): [buffer, number, number];
    static scale<T>(texture: DrawableObject<T>, scaleX: number | undefined, scaleY: number | undefined): DrawableObject<T>;
}
