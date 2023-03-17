/*
    Keycode Challenge

    The program will capture infomation of any key
    pressed on the keyboard and display it to the screen

*/
// Style text
const page = document.getElementById('page')
page.style.margin = '30vh'
page.style.fontFamily = 'fredoka one'
page.style.fontSize = '6vh'
page.style.color = 'red'

// Capture key event
document.body.addEventListener('keydown', (e)=> 
{
    // key pressed
    let code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'event.key')
    code = code.replace('{Value}', e.key)
    const box1 = code

    // full description of key pressed
    code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'event.code')
    code = code.replace('{Value}', e.code)
    const box2 = code

    // keycode
    code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'event.keycode')
    code = code.replace('{Value}', e.keyCode)
    const box3 = code

    // keyboard location
    code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'location')
    code = code.replace('{Value}', e.location)
    const box4 = code

    /*
        This is the HTML that will display all of the
        above information as well as the key code in a
        large font size
    */
    let mpage = document.getElementById('page2').innerHTML
    mpage = mpage.replace('{Code}', e.keyCode)
    mpage = mpage.replace('{Box1}', box1)
    mpage = mpage.replace('{Box2}', box2)
    mpage = mpage.replace('{Box3}', box3)
    mpage = mpage.replace('{Box4}', box4)

    code = mpage

    page.innerHTML = code
})
