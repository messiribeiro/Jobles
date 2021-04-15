


// const button = document.querySelector('button');
let control = true

// button.addEventListener('click', init())


// const { ipcRenderer } = require('electron');

// ipcRenderer.invoke('teste', console.log('eae'))

let hours = 0
let seconds = 0
let minutes = 0

function init() {
    
    let interval = null

    document.querySelector('#status').innerHTML = 'LIVE'

    

    // console.log('começou')

    if (control) {
        interval = setInterval(() => {
            seconds += 1
            // console.log('entrou no setInterval')
            if (seconds == 60) minutes += 1, seconds = 0
            if (minutes == 60) hours += 1, minutes = 0

            render(hours, minutes, seconds)

            // console.log('adicionou +1 aos segundos')

            // button.addEventListener('click', () => {
            //     clearInterval(interval);
            //     seconds = 0
            //     minutes = 0
            //     hours = 0
            //     render(hours, minutes, seconds)

            //     control = false
            // })

        }, 1000)



        control = false
    } else {
        location.reload()
        ipcRenderer.send('close-time')
    }
}








// FUNÇÃO PARA FORMATAR O NÚMERO

function formatTime(time) {
    return String(time).padStart(2, '0')
}





// FUNÇÃO QUE RENDERIZA O TEMPORIZADR

function render(hours, minutes, seconds) {
    const count = document.querySelector('#counter')

    count.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`

}




const {ipcRenderer} = require('electron')

ipcRenderer.on('asynchronous-message', function (event, message) {
    const data = `\n- ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}\n`
    console.log(message); // Returns: {'SAVED': 'File Saved'}
    ipcRenderer.send('teste', data)
});











