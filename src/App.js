import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartDetailContainer from './containers/CartDetailContainer';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<ItemListContainer greeting="Tienda Compa" />
					</Route>
					<Route path="/category/:id">
						<ItemListContainer />
					</Route>
					<Route path="/item/:artSku">
						<ItemDetailContainer />
					</Route>
					<Route path="/cart">
						<CartDetailContainer />
					</Route>					

				</Switch>
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
