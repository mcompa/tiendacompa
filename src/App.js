import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import OrderListContainer from './containers/OrderListContainer';
import OrderDetailContainer from './containers/OrderDetailContainer';
import Cart from './components/Cart/Cart';
import { NotFound } from './components/NotFound/NotFound';
import { CartContextProvider } from './context/CartContext';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<CartContextProvider>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer greeting="Tienda Compa" />} />
						<Route exact path="/category/:id" element={<ItemListContainer />} />
						<Route exact path="/item/:artSku" element={<ItemDetailContainer />} />
						<Route exact path="/cart" element={<Cart />} />
						<Route exact path="/orders" element={<OrderListContainer />} />
						<Route exact path="/order-detail/:orderId" element={<OrderDetailContainer />} />
						<Route path="*" element={<NotFound />} />
					</Routes>					
				</CartContextProvider>
			</BrowserRouter>
			<footer className="page-footer font-small bg-dark pt-4">
				<div className="footer-copyright text-center py-3 text-white">
					© 2021 CoderHouse - 
					<a className="App-link mx-2" href="https://github.com/mcompa/tiendacompa" target="_blank" rel="noopener noreferrer">
						Repositorio
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
