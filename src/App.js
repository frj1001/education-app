import './App.css';
import pencil from './assets/images/pencil.png';
import bag from './assets/images/bag.png';
import book from './assets/images/book.png';
import ruler from './assets/images/ruler.png';
import cover from './assets/images/cover.png';
import box from './assets/images/box.png';
import cap from './assets/images/cap.png'; 
import WeekOne from './pages/Week1/WeekOne';
import WeekTwo from './pages/Week2/WeekTwo';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  
  const location = useLocation()
  
  return (
    <div className="App">
      <Header location={location}/>
      <div className='main'>
        <div className='left-panel'>
          <div className='container'>
            <div>
              <img src={pencil} alt='pencil' />
            </div>
            <div>
              <img src={bag} alt='bag' />
            </div>
            <div>
              <img src={book} alt='book' />
            </div>
          </div>
        </div>
        <div className='page-content'>
          <div className='container'>
            
            <div className='inner-container'>
              <Routes>
                <Route path='/' element={<WeekOne/>}/>
                <Route path='/week2' element={<WeekTwo/>}/>
              </Routes>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='container'>
            <div>
              <img src={ruler} alt='pencil' />
            </div>
            <div>
              <img src={location.pathname==='/'? cover : box} alt='bag' />
            </div>
            <div>
              <img src={cap} alt='book' />
            </div>
          </div>
        </div>  
      </div>
      <Footer location={location}/>
    </div>
  );
}

export default App;
