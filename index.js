window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},

		onsuccess: function() {
			var delay = 0 // play one note every quarter second
			var note = 50 // the MIDI note
			var velocity = 127 // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127)
			MIDI.noteOn(0, note, velocity, delay)
			MIDI.noteOff(0, note, delay + 0.75)
		}
	})
}

MIDI.noteOn(channel, note, velocity, delay)



document.addEventListener('keydown', keyboard, false)

function keyboard(key) {
	if (key.which === 38) { // up
		alert("up!")
	} else if (key.which === 40) { // down
		alert("down!")
	} else if (key.which === 39) { // right
		alert("right!")
	} else if (key.which === 37) { // left
		alert("left!")
	}
}
