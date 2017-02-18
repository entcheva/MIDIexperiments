// keyboard
document.addEventListener('keydown', keyboard, false)
function keyboard(key) {
	if (key.which === 81) {
    var audio = document.getElementById('a1')
    audio.play()
	} else if (key.which === 87) {
    var audio = document.getElementById('a1s')
    audio.play()
	} else if (key.which === 69) {
    var audio = document.getElementById('b1')
    audio.play()
	} else if (key.which === 82) {
    var audio = document.getElementById('c1')
    audio.play()
	} else if (key.which === 84) {
    var audio = document.getElementById('c1s')
    audio.play()
  } else if (key.which === 89) {
    var audio = document.getElementById('c2')
    audio.play()
  } else if (key.which === 85) {
    var audio = document.getElementById('d1')
    audio.play()
  } else if (key.which === 73) {
    var audio = document.getElementById('d1s')
    audio.play()
  } else if (key.which === 79) {
    var audio = document.getElementById('e1')
    audio.play()
  } else if (key.which === 80) {
    var audio = document.getElementById('f1')
    audio.play()
  } else if (key.which === 219) {
    var audio = document.getElementById('f1s')
    audio.play()
  } else if (key.which === 221) {
    var audio = document.getElementById('g1')
    audio.play()
  } else if (key.which === 220) {
    var audio = document.getElementById('g1s')
    audio.play()
  }
}


// begin p5
function setup() {
  createCanvas(600,600)
}


var value = 0
var c = color(255, 204, 0)

function draw() {
  fill(value)
  rect(30, 30, 50, 50)
}

function keyPressed() {
  if (value === 0) {
    value = 255
  } else {
    value = 0
  }
}
