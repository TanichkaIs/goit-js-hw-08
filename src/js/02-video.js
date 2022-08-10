import Player from '@vimeo/player';
import '../css/common.css';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";


const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const getCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (getCurrentTime) {

    
    player.setCurrentTime(getCurrentTime);
}

function onPlay({seconds}) {
localStorage.setItem(LOCALSTORAGE_KEY, seconds)

}
player.on('timeupdate', throttle(onPlay, 1000));



