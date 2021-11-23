import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar';
import { CartWidget } from './components/CartWidget';
import { ItemCount } from './components/ItemCount';
import ItemListContainer from './containers/ItemListContainer';

function App() {

	const Agregar = (cantidad) => {
		console.log('Agregando ' + cantidad + ' unidades.');
	};

	return (
		<div className="App">
			<NavBar>
				<CartWidget cantidad="2"/>
			</NavBar>
			<header className="App-header">
				<ItemListContainer greeting="Tienda Compa">
					<ItemCount title="titulo counter" stock={5} inicial={1} onAdd={Agregar} />
				</ItemListContainer>
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
