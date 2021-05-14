import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import './styles/footer.scss';
import './styles/callUs.scss';
import './styles/dataForm.scss';
import './styles/autoForm.scss';
import './styles/banner.scss';
import './styles/home.scss';
import './styles/data.scss';
import './styles/end.scss';

const Application = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Application />,document.getElementById('root'));
reportWebVitals();
