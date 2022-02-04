import './App.css';
import MainRouter from './components/MainRouter';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
	return (
		<>
			<Provider store={store}>
				<MainRouter />
			</Provider>
		</>
	);
}

export default App;
