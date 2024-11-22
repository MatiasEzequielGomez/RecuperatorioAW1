import { cardComponentCompra } from "./components/card-compra.js";
import { cardComponentVenta } from "./components/card-venta.js";

let cardDataCompra = [
    { title: 'Dolar oficial', price: '976.67' },
    { title: 'Dolar blue', price: '1115' },
    { title: 'Dolar tarjeta', price: '970.41' },
    { title: 'Dolar MEP', price: '1078.90' },
]

let cardDataVenta = [
    { title: 'Dolar oficial', price: '1034.98' },
    { title: 'Dolar blue', price: '1135' },
    { title: 'Dolar tarjeta', price: '1035.16' },
    { title: 'Dolar MEP', price: '1080.11' },
]
window.addEventListener('load', ()=>{
    const cardsCompra = cardDataCompra.map(e=>{
        return cardComponentCompra(e)
    }).join('')
    compra.innerHTML= cardsCompra
    const cardsVenta = cardDataVenta.map(e=>{
        return cardComponentVenta(e)
    }).join('')
    venta.innerHTML= cardsVenta
})

