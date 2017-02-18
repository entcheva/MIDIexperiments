var song;

function preload() {
  song = loadSound('a1.ogg');
}

function setup() {
  createCanvas(720, 200);
  song.play();
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}
