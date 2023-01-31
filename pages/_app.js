import '@/styles/globals.scss';
import Navbar from '@/components/layout/navbar/Navbar';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import Footer from '@/components/layout/footer/Footer';

export default function App({ Component, pageProps }) {
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
