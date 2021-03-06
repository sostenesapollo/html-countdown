const View = {
    render({minutes, seconds}) {
        document.getElementById('timer').innerHTML = `
            ${minutes}:${seconds}
        `

        if(minutes == '00' && seconds < parseInt(10)) {
            document.body.classList.remove("blink-red-infinite")
            document.body.classList.remove("blink-red-infinite-faster")
            document.body.classList.add("blink-red-infinite-superfast")
        }

        if(minutes == '00' && seconds < parseInt(30)) {
            document.body.classList.remove("blink-red-infinite")
            document.body.classList.add("blink-red-infinite-faster")
        }

        if(minutes == '00') {
            document.body.classList.add("blink-red-infinite")
        }

        if(minutes == '00' && seconds == '00') {
            document.body.classList.remove("blink-red-infinite")
            document.body.classList.remove("blink-red-infinite-faster")
            document.body.classList.remove("blink-red-infinite-superfast")
            document.body.classList.add("red-fixed")
        }

    }
} 

export default View