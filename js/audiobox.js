const box = document.getElementById('audioplayer');
const audioPlayer = document.getElementById('audioplayer');

let songs = ['A Call to Arms (152kbit_Opus).opus', 'A Totally Normal World (152kbit_Opus).opus', 'Addicted (152kbit_Opus).opus', 'Am I Really That Bad (152kbit_Opus).opus', 'Caught in the Crowd (152kbit_Opus).opus', 'Checkmate Humanity (152kbit_Opus).opus', 'Exponential Hearsay (152kbit_Opus).opus', 'Family Dinner (152kbit_Opus).opus', 'Growth Hacking (152kbit_Opus).opus', 'Hominid Brains (152kbit_Opus).opus', 'Hooked in the Classroom (152kbit_Opus).opus', 'I Put a Spell on You (152kbit_Opus).opus', 'Justin Drops the Mic (152kbit_Opus).opus', 'Kitchen Safe (128kbit_AAC).m4a', 'Late Night Snack (152kbit_Opus).opus', 'Logos (128kbit_AAC).m4a', 'Machine Learning (152kbit_Opus).opus', 'Magic Tricks (152kbit_Opus).opus', 'Manipulated (152kbit_Opus).opus', 'Myanmar (152kbit_Opus).opus', 'Perceptions of Beauty (192kbit_Opus).opus', 'Programmed at a Deeper Level (152kbit_Opus).opus', 'Rapid Degradation of Society (152kbit_Opus).opus', 'Senate Hearing (152kbit_Opus).opus', 'Server Room (152kbit_Opus).opus', 'Shut it Down (152kbit_Opus).opus', 'The AI’s Are Losing (152kbit_Opus).opus', 'The Bet (152kbit_Opus).opus', 'The Kids are Not Alright (128kbit_AAC).m4a', 'The Sliding Scale (152kbit_Opus).opus', 'Theremin Lullaby (152kbit_Opus).opus', 'Time Offline (152kbit_Opus).opus', 'Welcome to the Drum Machine (152kbit_Opus).opus']
song = 11;

let isDragging = false;
let offset = { x: 0, y: 0 };

// Event listeners
box.addEventListener('mousedown', startDrag);
box.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', drag);

// Functions
function startDrag(e) {
  isDragging = true;
  offset.x = e.clientX - box.getBoundingClientRect().left;
  offset.y = e.clientY - box.getBoundingClientRect().top;
}

function endDrag() {
  isDragging = false;
}

function drag(e) {
  if (!isDragging) return;

  box.style.left = `${e.clientX - offset.x}px`;
  box.style.top = `${e.clientY - offset.y}px`;
}

function toggleplay() {
    var player = document.getElementById('player');
    var img = document.getElementById('playpauseimg');
    if (player.paused) {
        player.play();
        img.src = "../assets/audiobuttons/pause.png";
    } else {
        player.pause();
        img.src = "../assets/audiobuttons/play.png";
    }
}

function togglemute() {
  var player = document.getElementById('player');
  var img = document.getElementById('muteimg');
  img.src = "../assets/audiobuttons/unmuted.png";
  if(!player.muted) {
    img.src = "../assets/audiobuttons/muted.png";
  }
  player.muted = !player.muted;
}

function playsong() {
  var player = document.getElementById('player');
  var songtext = document.getElementById('songtitle');
  var img = document.getElementById('playpauseimg');
  img.src = "../assets/audiobuttons/play.png";
  player.src = "https://github.com/cringemoment/meowcity/raw/main/songs/" + songs[song].replace(/ /g, '%20');
  songtext.innerText = "Now playing: " + songs[song].slice(0, -19);
}

function prevsong() {
  if(song > 0) {
    song -= 1;
  }

  playsong();
}

function nextsong() {
  if(song < 32) {
    song += 1;
  }

  playsong();
}
