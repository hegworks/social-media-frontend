import ReactDOM from 'react-dom';
import App from './App.jsx';
import CookieManagerProvider from "./components/CookieManager"

ReactDOM.render(
	<CookieManagerProvider>
		<App />
	</CookieManagerProvider>,
	document.getElementById("root")
);