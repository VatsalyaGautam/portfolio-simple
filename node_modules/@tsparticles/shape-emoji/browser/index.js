import { EmojiDrawer } from "./EmojiDrawer.js";
export async function loadEmojiShape(engine, refresh = true) {
    await engine.addShape(new EmojiDrawer(), refresh);
}
