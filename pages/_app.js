import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Navbar from '@/components/layout/navbar/Navbar';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import Footer from '@/components/layout/footer/Footer';

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Navbar />
      <Sidebar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}
