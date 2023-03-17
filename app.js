const page = document.getElementById('page')
page.style.margin = '30vh'
page.style.fontFamily = 'fredoka one'
page.style.fontSize = '6vh'
page.style.color = 'red'

document.body.addEventListener('keydown', (e)=> 
{
    let code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'event.key')
    code = code.replace('{Value}', e.key)
    const box1 = code

  

    code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'event.code')
    code = code.replace('{Value}', e.code)
    const box2 = code

    code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'event.keycode')
    code = code.replace('{Value}', e.keyCode)
    const box3 = code

    code = document.getElementById('key').innerHTML
    code = code.replace('{Title}', 'location')
    code = code.replace('{Value}', e.location)
    const box4 = code



    let mpage = document.getElementById('page2').innerHTML
    mpage = mpage.replace('{Code}', e.keyCode)
    mpage = mpage.replace('{Box1}', box1)
    mpage = mpage.replace('{Box2}', box2)
    mpage = mpage.replace('{Box3}', box3)
    mpage = mpage.replace('{Box4}', box4)

    code = mpage

    page.innerHTML = code
})
