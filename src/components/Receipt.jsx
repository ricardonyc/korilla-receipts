function Receipt(props) {
  const { order } = props;
  return (
    <div className="receipt-box">
      <h1>{order.person}</h1>
      <p>Main: {order.order.main}</p>
      <p>Protein: {order.order.protein}</p>
      <p>Rice: {order.order.rice}</p>
      <p>Sauce: {order.order.sauce}</p>
      <p>Drink: {order.order.drink}</p>
      <p>Cost: ${order.order.cost}</p>
      <p className="paid">PAID</p>
    </div>
  );
}

export default Receipt;
