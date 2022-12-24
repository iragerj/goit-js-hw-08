import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY) || 0;
const onTimeUpdate = throttle(function (data) {
  const seconds = data.seconds;
  localStorage.setItem(STORAGE_KEY, seconds);
}, 1000);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onTimeUpdate);

player.setCurrentTime(currentTime);
