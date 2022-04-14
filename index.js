import { getContentCards }  from './assets/Datos.js'
import { createCard } from './assets/createCard.js'
import { mount }  from './assets/mount.js'
import { createButton } from './assets/createButton.js';
import { buttonDisabled } from './assets/buttonDisabled.js'

const maxCards = 1
const state={
    quantity: maxCards,
}
//Crear botones
createButton("Add card", "addCard")
createButton("Remove card", "removeCard")

//Petición del contenido de las tarjetas
const contentCard = getContentCards()

//Construcción de las tarjetas
contentCard.forEach(item => { 
    const card = createCard(item)
    mount(card)
});
buttonDisabled(state.quantity)

const addCard=document.querySelector("#addCard")
addCard.addEventListener('click',()=>{
    const card = createCard(contentCard[0])
    mount(card)
    state.quantity++
    buttonDisabled(state.quantity)
})
const removeCard=document.querySelector("#removeCard")
removeCard.addEventListener('click',()=>{
    const parent = document.querySelector('#app')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})