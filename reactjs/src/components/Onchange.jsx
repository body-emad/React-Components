import { useState } from "react";

function OnchangePractice() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("");
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("");
  //   const [delivery, setDelivery] = useState("");
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  //   function handleDeliveryChange(event) {
  //     setDelivery(event.target.value);
  //   }
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  return (
    <div className="onchange-container">
      <input className="input" value={name} onChange={handleName} />
      <p>Name: {name} </p>
      <input
        className="input"
        value={quantity}
        onChange={handleQuantity}
        type="number"
      />
      <p>Quantity: {quantity} </p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Visa">Visa</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment} </p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="leave your comment here"
      />
      <p>Comment: {comment} </p>
      <label>
        <input
          className="input"
          value="pickUp"
          type="checkbox"
          checked={shipping === "pickUp"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>{" "}
      <br />
      <label>
        <input
          className="input"
          value="delivery"
          type="checkbox"
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default OnchangePractice;
