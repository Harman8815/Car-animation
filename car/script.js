var audio = document.getElementById('audio');

audio.setAttribute('src', 'sound.mp3');
audio.muted=true;
audio.loop = true;
audio.play();