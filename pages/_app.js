import "../styles/globals.css";
import MainEditor from "../comp/mainEditor";
import { store } from "../store/";
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainEditor />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
