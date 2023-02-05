
import './App.scss';
import Layout from './components/utilities/Layout';
import { Main, About, Portfolio, Contact } from './components/pages/index';

function App() {
  return (
    <>
      <Layout
        main={<Main />}
        about={<About />}
        portfolio={<Portfolio />}
        contact={<Contact />}
      />
    </>
  );
}

export default App;
