import orders from "../Data";
import Receipt from "./Receipt";

function Main() {
  return (
    <div className="receipt-container">
      {orders.map((order, index) =>
        order.paid === true ? <Receipt order={order} key={index} /> : false
      )}
    </div>
  );
}

export default Main;
