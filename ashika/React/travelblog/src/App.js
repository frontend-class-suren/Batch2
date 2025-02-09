//App.js

import Header from './components/Header.js'
import Cards from './components/Cards.js'
import { data } from './data.js'
import Footer from './components/Footer.js'
import './App.css'

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
