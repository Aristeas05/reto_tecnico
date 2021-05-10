import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/footer.scss';
import './styles/callUs.scss';
import './styles/dataForm.scss';
import './styles/banner.scss';
import './styles/home.scss';
import './styles/end.scss';
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
