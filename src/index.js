import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>,
document.getElementById('root')
);

// баги в борд
// выбор только одну карточку 
// добавить прелоудер 
// ходить может только один 
// что вообще происходит