import View from './View.js'

const Timer = {
    time: 60 * 2,
    currentTime: 0,
    interval: null,
    init() {
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },
    countdown() {
        Timer.currentTime = Timer.currentTime - 1

        View.render({
            minutes: Timer.formatTime(Timer.timeToMinutes(Timer.currentTime)),
            seconds: Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))
        })

        if(Timer.currentTime === 0) {
            clearInterval(Timer.interval)
            return;
        }
    },
    
    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time %60,

    formatTime: time => String(time).padStart(2,'0')
}

export { Timer }