import Item from './Item';

function ItemList() {
  return (
    <section>
      <h2>Items</h2>

      <Item name="Laptop" quantity={10} />
      <Item name="Keyboard" quantity={15} />
      <Item name="Mouse" quantity={20} />
    </section>
  );
}

export default ItemList;