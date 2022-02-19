import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Loading from './components/Loading/Loading';
import { store } from './redux/store';
import './utils/i18next';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './firebase';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Suspense fallback={<Loading />}>
					<App />
				</Suspense>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
