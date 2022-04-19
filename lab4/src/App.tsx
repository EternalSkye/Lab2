import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ursatii Vladimir Cr-193
        </p>
          <InterfaceFive></InterfaceFive>
          <InterfaceSeven></InterfaceSeven>
      </header>
    </div>
  );
}

export default App;

function InputField() {
    const [input, setInput] = useState('');
    console.log(input);
    return (

        <div style={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <input value={input} onInput={e => setInput((e.target as HTMLTextAreaElement).value)}/>
            <span>{input}</span>
        </div>
    );
}

function InterfaceFive() {
    return (
        <div>
            <InputField></InputField>
            <InputField></InputField>
            <InputField></InputField>
            <InputField></InputField>
            <InputField></InputField>
            <h1>End interface5 fields</h1>
        </div>
    );
}

function InterfaceSeven() {
    return (
        <div>
            <InterfaceFive></InterfaceFive>
            <InputField></InputField>
            <InputField></InputField>
            <h1>End interface7 fields</h1>
        </div>
    );
}