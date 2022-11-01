import "../styles/globals.css";
import { store } from "../store";
import CompsProvider from "../context/compsContext";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CompsProvider>
      <Component {...pageProps} />
      </CompsProvider>
    </Provider>
  );
}

export default MyApp;
