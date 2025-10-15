const speed = document.querySelector('.speed');
const speedBar = speed.querySelector('.speed-bar');
const video = document.querySelector('video');

const min = 0.4;
const max = 4;

function handleMove(e) {
  const y = e.pageY - speed.getBoundingClientRect().top;
  const percent = y / speed.offsetHeight;
  const playbackRate = percent * (max - min) + min;

  speedBar.style.height = `${percent * 100}%`;
  speedBar.textContent = `${playbackRate.toFixed(2)}×`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
