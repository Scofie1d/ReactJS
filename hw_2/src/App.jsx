import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [messageList, setMassageList] = useState([]);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');


  const addMessage = () => {
    let id = Math.random();
      setMassageList([...messageList, {name: name, author: author, id: id}])
  };
  useEffect(() => {
    setTimeout(() =>{
      if(messageList.length > 0) {
          alert(`${author}, Ваше сообщение отправлено!`)
      }
    }, 1500)
  }, [messageList])

  return (
    <div className="App">
        <label htmlFor="name">Заголовок</label>
      <input value={name} onChange={(ev) => setName(ev.target.value)}/>
        <label htmlFor="author">Автор</label>
      <input value={author} onChange={(ev)=> setAuthor(ev.target.value)}/>
      <button onClick={addMessage}>Отправить сообщение</button>
      {messageList.map((el) => {
        return(
            <div key={el.id} className="message">
              <div className="name">
                 {el.name}
              </div>
              <div className="author">
                 {el.author}
              </div>
            </div>
        )
      })}
    </div>
  );
}

export default App;
