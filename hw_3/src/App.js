import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Stack, TextField} from "@mui/material";
import  React, {useState, useEffect, useRef} from "react";
import {purple} from "@mui/material/colors";
import { ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
    },
});


function App() {
    const [messageList, setMessageList] = useState([]);
    const ref = useRef(null);

    function handleSubmit(ev) {
        ev.preventDefault();
        const target = ev.target;
        const author = target.author.value;
        const text = target.text.value;

        setMessageList ( cond => [...cond, {
            id: createId(cond),
            author: author,
            text: text,
        }]);
    }

    function createId(arr) {
        return arr.length ? arr[arr.length - 1].id + 1 : 0;
    }

    useEffect(() => {
        setTimeout(() => {
            autoMsg(messageList);
        }, 1500);
    }, [messageList]);

    function autoMsg() {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMessageList(cond => [...cond, {
                id: createId(cond),
                text: `Сообщение от пользователя "${lastAuthor.author}" отправлено!`,
            }]);
        }
        ref.current.focus()
    }
  return (
   <ThemeProvider theme={theme}>
       <div className="container">
           <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
           onSubmit={handleSubmit}>
               <Stack
                   spacing={2}
               >
                   <TextField id="name" label="Имя" variant="outlined" name="author" inputRef={ref}/>
                   <TextField id="message" label="Сообщение" variant="outlined" name="text" inputRef={ref}/>
                   <Button variant="contained" color="primary" type="submit">Отправить</Button>
               </Stack>
           </Box>
           <div className="message_list">
               {messageList.map( message => <div className="massage_item" key={message.id}>
                   { message.author && <p className="message_txt"><span>Автор:</span> {message.author}</p>}
                   <p className="message_txt">{message.author && <span>Сообщение:</span>} {message.text}</p>
               </div>)}
           </div>
       </div>

   </ThemeProvider>
  );
}

export default App;
