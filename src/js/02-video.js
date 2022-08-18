// 1 Ознайомся з документацією бібліотеки Vimeo плеєра.

// 2 Додай бібліотеку як залежність проекту через npm.

// 3 Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing player, але враховуй, що у тебе плеєр доданий як npm пакет,
//а не через CDN.

// 4 Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.

// 5 Зберігай час відтворення у локальне сховище.Нехай ключем для сховища буде рядок "videoplayer-current-time".

// 6 Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

// 7 Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

onSetTimeAfterRefrsh();

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, data.seconds);
  console.log(localStorage.getItem(TIME_KEY));
};

function onSetTimeAfterRefrsh() {
  if (TIME_KEY) {
    player.setCurrentTime(localStorage.getItem(TIME_KEY));
  }
}

player.on('timeupdate', throttle(onPlay, 1000));
