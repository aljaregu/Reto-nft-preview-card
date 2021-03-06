export function createCard(item){
    
    const card=document.createElement('div')
    card.className="card"

    const top=document.createElement('div')
    top.className="top"

    card.appendChild(top)

    const imagen0=document.createElement('div')
    imagen0.className="image-top"

    const image_top=document.createElement('img')
    image_top.src=item.Imagen1
    image_top.alt=""

    const icono0=document.createElement('div')
    icono0.className="icon-image"

    const icon_image=document.createElement('img')
    icon_image.src=item.Imagen2
    icon_image.alt=""

    top.appendChild(imagen0)
    imagen0.appendChild(image_top)
    imagen0.appendChild(icono0)
    icono0.appendChild(icon_image)

    const Box_text=document.createElement('div')
    Box_text.className="Box-text"
    top.appendChild(Box_text)

    const Ttop=document.createElement('a')
    Ttop.href="Ttop"
    Ttop.textContent=item.title
    const parrafo1=document.createElement('p')
    parrafo1.textContent=item.Texto1
    const flex=document.createElement('div')
    flex.className="flex"
    Box_text.appendChild(Ttop)
    Box_text.appendChild(parrafo1)
    Box_text.appendChild(flex)

    const eth=document.createElement('div')
    eth.className="eth"
    const days=document.createElement('div')
    days.className="days"
    flex.appendChild(eth)
    flex.appendChild(days)

    const imagen1=document.createElement('img')
    imagen1.src=item.Imagen3
    imagen1.alt=""
    const parrafo2=document.createElement('p')
    parrafo2.textContent=item.costo
    eth.appendChild(imagen1)
    eth.appendChild(parrafo2)

    const imagen2=document.createElement('img')
    imagen2.src=item.Imagen4
    imagen2.alt=""
    const parrafo3=document.createElement('p')
    parrafo3.textContent=item.tiempo
    days.appendChild(imagen2)
    days.appendChild(parrafo3)
    
    const hr=document.createElement('hr')
    Box_text.appendChild(hr)
    const dates=document.createElement('div')
    dates.className="dates"
    Box_text.appendChild(dates)

    const imagen3=document.createElement('img')
    imagen3.src=item.Imagen5
    imagen3.alt=""
    const parrafo4=document.createElement('p')
    parrafo4.textContent=item.creacion
    dates.appendChild(imagen3)
    dates.appendChild(parrafo4)

    const Tperson=document.createElement('a')
    Tperson.href="Tperson"
    Tperson.className="name"
    Tperson.textContent=item.autor
    parrafo4.appendChild(Tperson)

    return card
}