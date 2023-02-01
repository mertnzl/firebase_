import Login from './components/Login'
import Anasayfa from './components/Anasayfa';
import HastaKayit from './components/HastaKayit';
import Register from './components/Register';
import HastaBilgi from "./components/HastaBilgi"
import { Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Anasayfa/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Login/HastaKayit" element={<HastaKayit/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Login/HastaKayit/HastaBilgi" element={<HastaBilgi/>} />
    <Route path="/Register/HastaKayit" element={<HastaKayit/>} />
    </Routes>
  );
}

export default App;
