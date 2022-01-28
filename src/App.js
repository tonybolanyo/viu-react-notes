import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NewNoteForm from './components/NewNoteForm';
import useLocalStorage from './hooks/useLocalStorage';
function App() {

  const [notes, setNotes] = useLocalStorage('notes', []);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  return (
    <div className="App">
      <Header />
      <NewNoteForm
        onAdd={addNote}
      />
      <Footer />
    </div>
  );
}

export default App;
