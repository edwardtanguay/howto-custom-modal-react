import './App.scss';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
		  <Modal>
			  <h2>Information</h2>
			  <section className="modalContent">
				  This is the information.
			  </section>
		</Modal>
    </div>
  );
}

export default App;