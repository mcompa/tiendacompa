import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<ItemListContainer greeting="Tienda Compa" />
				<p></p>
				<img src={logo} className="App-logo" alt="logo" />
				<a className="App-link" href="https://github.com/mcompa/tiendacompa" target="_blank" rel="noopener noreferrer">
					Repositorio
				</a>
			</header>
		</div>
	);
}

export default App;
