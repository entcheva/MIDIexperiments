function setup() {
  createCanvas(600, 600)
  background('white')
  osc = new p5.TriOsc()
  osc.start();
  osc.amp(0);
}

function keyPressed() {
  if (keyCode == 81) {
    playNote(60)
  }

}

var note


function playNote(note, duration) {
  osc.freq(midiToFreq(note))
  // Fade it in
  osc.fade(0.5,0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}


function keyPressed() {
	if (keyCode == 81) { // q aka c
    playNote(60)
	} else if (keyCode == 87) { // w aka d
    playNote(62)
	} else if (keyCode == 69) { // e aka e
    playNote(64)
	} else if (keyCode == 82) { // r aka f
    playNote(65)
	} else if (keyCode === 84) { // t
    playNote(67)
  } else if (keyCode === 89) { // y
    playNote(69)
  } else if (keyCode === 85) { // u
    playNote(71)
  } else if (keyCode === 73) { // i
    playNote(72)
  } else if (keyCode === 79) { // o
    playNote(74)
  } else if (keyCode === 80) { // p
    playNote(76)
  } else if (keyCode === 219) { // [
    playNote(77)
  } else if (keyCode === 221) { // ]
    playNote(79)
  } else if (keyCode === 220) { // \
    playNote(81)
  }
}
