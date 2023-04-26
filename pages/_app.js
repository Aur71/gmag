import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '@/redux/store';
import '@/styles/globals.scss';
import Navbar from '@/components/layout/navbar/Navbar';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import Footer from '@/components/layout/footer/Footer';
import { LOGIN } from '@/redux/reducers/userSlice';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWithLayout Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

function AppWithLayout({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) dispatch(LOGIN(user));
  }, [dispatch]);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
