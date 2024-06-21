import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/TextArea';

function App() {
  return (
    <>
    <div className='mainBody'>
      <Navbar/>
      <div className='brd'></div>
      <Textarea/>
    </div>
    </>
  );
}

export default App;
