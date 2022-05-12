import './App.css';
import Message from './Message.js';

function App() {
  const name = 'Михаил';

  return (
    <div className="App">
        <h1 class="message">Добро пожаловать в ReactJS, <Message name={name}/></h1>
    </div>
  );
}

export default App;
