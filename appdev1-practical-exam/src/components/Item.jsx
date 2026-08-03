function Item({ name, quantity }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
    </article>
  );
}

export default Item;