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
  frameRate(30)

  tiles = generateTiles(tileSpriteSheet, 16, 16) // array of images
  createPlatforms(gamemap)  // turn CSV into visual/functional map

  alienSprites = generateTiles(alienSpriteSheet, 16, 20)
  createAlien()
}

function createAlien() {
  idleAlien = [alienSprites[0]] // first element in png
  walkingAlien = alienSprites.slice(7,11) // last 4
  jumpingAlien = alienSprites[3] // middle guy

  alien = new AnimatedSprite(idleAlien[0], 160, 188, 'PLAYER', walkingAlien, idleAlien, jumpingAlien)
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

  // console.log(platforms)
  for(let tile of platforms) {
    tile.display()
  }

  alienUpdate()
  alien.display()

}

function keyPressed() {
  if(keyCode == LEFT_ARROW) { // p5js const
    alien.dx = -WALKING_SPEED
    alien.state = 'walking'
  } else if(keyCode == RIGHT_ARROW) {
    alien.dx = WALKING_SPEED
    alien.state = 'walking'
  // } else if(keyCode == SPACE) { // user const above
  } else if(keyCode == SPACE && isOnPlatform(alien,platforms)) {
    alien.dy = -JUMP_VELOCITY
    alien.state = 'jumping'
  } else {
    alien.state = 'idle'
  }
}

function keyReleased() {
  alien.dx = 0
  alien.state = 'idle'
}

function alienUpdate() {
  alien.x += alien.dx
  alien.y += alien.dy
}

function checkCollision(s1, s2) {
  // check for NO overlap
  
  let noXOverlap = s1.getRight() <= s2.getLeft() || s1.getLeft() >= s2.getRight()
  let noYOverlap = s1.getBottom() <= s2.getTop() || s1.getTop() >= s2.getBottom()

  if(noXOverlap || noYOverlap) {
    return false
  } else {
    return true
  }
}

function checkCollisionList(s, list) { // s: player; list: objects to check collision with
  let collisionList = [] // to be returned
  for(let sprite of list) {
    if(checkCollision(s,sprite) && sprite.collidable) {
      collisionList.push(sprite)
    }
  }
  return collisionList
}

function isOnPlatform(s, list) {
  s.y += 5
  let collisions = checkCollisionList(s, list)
  s.y -= 5
  if(collisions.length > 0) {
    return true
  } else {
    return false
  }
}





