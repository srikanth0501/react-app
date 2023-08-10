import logo from './logo.svg';
import './App.css';
import NameComponent from "./Components/NameComponent/NameComponent.js"
import Age from './Components/Age/Age';
import InputBox from './Components/InputBox/InputBox';

function App() {
  return (
    <div className='container'>
      <NameComponent>This is Srikanth Kumar Karada</NameComponent>
      <Age children="25" name="Srikanth" />
      <InputBox />
      {/* <NameComponent>My Father name is Arakhita Karada</NameComponent> */}
    </div>
  );
}

export default App;
