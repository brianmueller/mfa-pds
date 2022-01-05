// Takes tile sheet and returns an array of tiles

function generateTiles(spriteSheet, tileWidth, tileHeight) {
    let sheetWidth = spriteSheet.width / tileWidth // ex: 64px total wide / 16px = 4 images (rows)
    let sheetHeight = spriteSheet.height / tileWidth

    let sprites = []

    for(let j = 0; j < sheetHeight; j++) {
        for(let i = 0; i < sheetWidth; i++) {
            let img = spriteSheet.get(i * tileWidth, j * tileHeight, tileWidth, tileHeight)
            sprites.push(img)
        }
    }

    return sprites
}