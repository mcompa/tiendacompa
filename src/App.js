import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Tienda Compa</p>
				<p>
					Modificado <code>src/App.js</code>.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Documentacion
				</a>
				<a className="App-link" href="https://github.com/mcompa/tiendacompa" target="_blank" rel="noopener noreferrer">
					Repositorio
				</a>
			</header>
		</div>
	);
}

export default App;
