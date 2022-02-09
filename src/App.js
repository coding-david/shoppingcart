import './App.css';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartBody from './components/body/CartBody'

function App() {
  return (
    <div>
      <CartHeader />
      <CartBody />
      <CartFooter copy="&copy;" date={new Date().getFullYear()} />
    </div>
  );
}

export default App;
