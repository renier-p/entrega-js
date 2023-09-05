alert('Bienvenido a TuTiendita');

const buyProducts = () => {
  let product = '';
  let quantity = 0;
  let price = 0;
  let subtotal = 0;
  let keepBuying = true;

  do {
    product = prompt('¿Quieres comprar un notebook, una impresora, un teléfono o una tablet?');
    quantity = Number(prompt('¿Cuantos queres comprar?'));

    switch (product) {
      case 'notebook':
        price = 3000;
        break;
      case 'impresora':
        price = 2500;
        break;
      case 'telefono':
        price = 2000;
        break;
      case 'tablet':
        price = 1500;
        break;
      default:
        alert('Alguno de los datos ingresados no es correcto');
        price = 0;
        quantity = 0;
    }

    subtotal += price * quantity;
    console.log(product);
    console.log(quantity);
    console.log(subtotal);

    keepBuying = confirm('¿Deseas seguir comprando?');
  } while (keepBuying);

  return subtotal;  
}

const applyDiscount = (subtotal) => {
  const discount = 0.80; 

  if (subtotal >= 8000) {
    return subtotal * discount;
  } else {
    return subtotal;
  }
}

const showDetail = (finalPrice) => {

    totalDiscount = subtotal-finalPrice;
    if (finalPrice < 8000) {
  alert('El precio total de su compra es: '+finalPrice+ ' pesos');
    } else {
        alert('El precio total de su compra con descuento es: '+ finalPrice + ' pesos, el descuento fue de '+ totalDiscount + ' pesos')
    }
} 

const subtotal = buyProducts();
console.log('Precio de la compra sin descuento: ' +subtotal)
const finalPrice = applyDiscount(subtotal);
console.log('Precio de la compra con decuento: ' +finalPrice)
showDetail(finalPrice);