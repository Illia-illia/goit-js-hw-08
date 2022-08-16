import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
};

player.on('timeupdate', onPlay);
