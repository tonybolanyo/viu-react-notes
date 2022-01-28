import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NewNoteForm from './components/NewNoteForm';

function App() {
  return (
    <div className="App">
      <Header />
      <NewNoteForm />
      <Footer />
    </div>
  );
}

export default App;
