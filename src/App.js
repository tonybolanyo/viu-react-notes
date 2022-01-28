import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NewNoteForm from './components/NewNoteForm';
import useLocalStorage from './hooks/useLocalStorage';
import { Box } from '@mui/material';
import Note from './components/Note';
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
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2, mb: 6 }}>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
            />
          );
        })}
      </Box>
      <Footer />
    </div>
  );
}

export default App;
