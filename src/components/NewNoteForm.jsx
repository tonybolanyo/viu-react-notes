import { Add } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Fab, TextField } from "@mui/material";
import { useState } from "react";

export default function NewNoteForm(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      console.log(prevNote, name, value)
      return {
        ...prevNote,
        [name]: value
      }
    })

  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: 2
    }}>
      <Card sx={{ width: '100%', maxWidth: 480 }}>
        <CardContent>
          <form>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <TextField
              id="title"
              label="Crea una nota"
              name="title"
              variant="filled"
              value={note.title}
              onChange={handleChange}
            />
            <TextField
              id="content"
              name="content"
              label="Contenido"
              variant="filled"
              multiline
              rows={3}
              value={note.content}
              onChange={handleChange}
              />
              </Box>
          </form>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Fab size="small">
            <Add onClick={submitNote} />
          </Fab>
        </CardActions>
      </Card>
    </Box>
  )
}