let section = document.querySelector('section')
let icons = document.querySelector('.icons')

icons.addEventListener('click', ()=>{
    section.classList.toggle('dark')
})

setInterval(() => {
    let date = new Date()
    hrs = date.getHours()
    mins = date.getMinutes()
    sec = date.getSeconds()

    if(hrs<12) document.querySelector('.AmPm').innerText = "AM"
    else document.querySelector('.AmPm').innerText = "PM"

    hrs = hrs>12 ? hrs-12 : hrs
    hrs = hrs ==0 ? hrs=12 : hrs
    hrs = hrs<10 ? hrs = `0${hrs}` : hrs
    mins = mins<10 ? mins = `0${mins}` : mins
    sec = sec<10 ? sec = `0${sec}` : sec


    document.querySelector('.hrNum').innerText = hrs
    document.querySelector('.minNum').innerText = mins
    document.querySelector('.secNum').innerText = sec

}, 1000);