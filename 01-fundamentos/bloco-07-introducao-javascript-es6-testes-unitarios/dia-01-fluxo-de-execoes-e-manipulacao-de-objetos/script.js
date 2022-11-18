const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};



const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const orderName = order.name;
  const orderPhoneNumber = order.phoneNumber;
  const orderAddressStreet = order.address.street;
  const orderAddressNumber = order.address.number;
  const orderAddressApartament = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para: ${orderName}, Telefone: ${orderPhoneNumber}, R. ${orderAddressStreet}, Nº: ${orderAddressNumber}, AP: ${orderAddressApartament}`);
};

customerInfo(order);
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  
  const newOrder = {
    name: 'Luiz Silva',
    payment: {
      total: 50
    }
  }
  Object.assign(order, newOrder);
  const orderName = order.name;
  const orderPizzaFlavor1 = Object.keys(order.order.pizza)[0];
  const orderPizzaFlavor2 = Object.keys(order.order.pizza)[1];
  const orderDrinks = order.order.drinks.coke.type;
  const orderPaymentTotal = order.payment.total;
  console.log(`Olá ${orderName}, o total do seu pedido de ${orderPizzaFlavor1}, ${orderPizzaFlavor2} e ${orderDrinks} é R$ ${orderPaymentTotal},00.`)


};

orderModifier(order);