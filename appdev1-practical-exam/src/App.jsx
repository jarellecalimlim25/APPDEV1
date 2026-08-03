import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import ItemList from './components/ItemList';
import Divider from './components/Divider';

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Inventory List</h2>

        <Item name="Monitor" quantity={8} />

        <ItemList />

        <Divider />
      </main>

      <Footer />
    </>
  );
}

export default App;