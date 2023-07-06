import "./App.css";
import Profile from "./pages/profiile/Profile";
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path = 'profile/:id' element={<Profile/>}/>
      </Routes>
    </div>
  );
};

export default App;
