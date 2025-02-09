import Header from './components/Header';
import Cards from './components/Card';
import { data } from './components/Data';
import Footer from './components/Footer';
import './App.css';

function App() {
  const mappedData = data.map((item) => {
		return (
			<Cards key={item.id} item={item} />
		)
	})
	return (
		<div className="App">
			<Header />
			{mappedData}
			<Footer />
		</div>
	);
}

export default App;
