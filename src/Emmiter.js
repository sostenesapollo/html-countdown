const Emitter = {
    events: {},

    on(event, callback) {
        Emitter.events[event] = callback
    }
}

Emitter.on('click', () => console.log('cliquei'))
Emitter.events.click()
Emitter.events.click()

export { Emitter } 