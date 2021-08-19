import './App.css';
import Contacts from './Contacts/Contacts';
import DistantWork from './DistantWork/DistantWork';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <DistantWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
