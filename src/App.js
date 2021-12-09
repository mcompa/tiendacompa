import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {

	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting="Tienda Compa" />
			<ItemDetailContainer />
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
