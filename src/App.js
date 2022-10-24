import logo from './logo.svg';
import './App.css';
import HomeworkList from './components/HomeworkList';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img src={logo} 
             className='logo' />
      </div>
      <div className='homework-list'>
        <h1>My Homeworks</h1>
        <HomeworkList/>
        
      </div>
    </div>
  );
}

export default App;
