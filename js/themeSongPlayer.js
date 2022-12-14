const themeSong = document.getElementById('themeSong')

function themeSongPlay(){
    btnThemeSongPlay.style.backgroundImage = 'url(./assets/pause.png)'
    btnThemeSongPlay.style.backgroundPosition = '0'
    themeSong.play(btnThemeSongPlay)
}

function themeSongPause(){
    btnThemeSongPlay.style.backgroundImage = 'url(./assets/play.png)'
    btnThemeSongPlay.style.backgroundPosition = '.1rem'
    themeSong.pause()
}

export function themeSongPlayer(){
    btnThemeSongPlay.addEventListener('click', ()=>{
        if(themeSong.paused){
            themeSongPlay(btnThemeSongPlay)
        }else{
            themeSongPause(btnThemeSongPlay)
        }
    })
}