let tileSpriteSheet
let gamemap
let alienSpriteSheet
let alien
let alienSprites
let rows, cols
let tiles = []
let platforms = []
let rez = 2
let viewX = 0
let viewY = 0
let coins = 0
let lives = 3
let coinSound, hitSound, musicSound, jumpSound, deathSound


const SPACE = 32

const WALKING_SPEED = 3
const JUMP_VELOCITY = 14
const GRAVITY = 0.6

// define player
const PLAYER = '-1'

// define tiles
const TILE_BRICK = '0'
const TILE_EMPTY = '3'

// cloud blocks
const CLOUD_LEFT = '5'
const CLOUD_RIGHT = '6'

// bush blocks
const BUSH_LEFT = '1'
const BUSH_RIGHT = '2'

// mushroom tiles
const MUSHROOM_TOP = '9'
const MUSHROOM_BOTTOM = '10'

// jump block
const JUMP_BLOCK = '4'
const JUMP_BLOCK_HIT = '8'

// pole
const POLE_TOP = '7'
const POLE_MIDDLE = '11'
const POLE_BOT = '15'

const COLLIDABLES = [TILE_BRICK, JUMP_BLOCK, JUMP_BLOCK_HIT, MUSHROOM_TOP, MUSHROOM_BOTTOM, PLAYER]

// margins
const LEFT_MARGIN = 60
const VERTICAL_MARGIN = 40
const RIGHT_MARGIN = 150

function preload() {
  tileSpriteSheet = loadImage('graphics/spritesheet.png')
  alienSpriteSheet = loadImage('graphics/blue_alien.png')
  gamemap = loadTable('graphics/gamemap.csv')
}

function setup() {
  createCanvas(850, 480)

  tiles = generateTiles(tileSpriteSheet, 16, 16)
  createPlatforms(gamemap)  
}

function createPlatforms(gamemap) { // gamemap is CSV file
  platforms = []

  rows = gamemap.getRowCount() // how many in CSV file
  cols = gamemap.getColumnCount()

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      let spriteIndex = gamemap.getString(r, c) // number
      let sprite = tiles[spriteIndex] // each sprite is png
      let tile = new Sprite(sprite, sprite.width * c, sprite.height * r, spriteIndex)
      platforms.push(tile)
    }
  }
}

function draw() {
  background('#80a1f2')
  scale(rez)
  for(let tile of platforms) {
    tile.display()
  }

}
