import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/Home';
import Home2 from './components/Home2';
import DetailCard from './components/DetailCard';
import Menu from './components/Menu';
import { menuData} from './components/Menu/data';
import Review from './components/Review';
import { reviewData} from './components/Review/data';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home /> {/*HOME + Nav*/}
      <DetailCard/>
      <Home2/>
      <Menu data={menuData}/>
      <Review data={reviewData}/>
      <Subscribe/>
      <Footer />
    </Router>
  );
}

export default App;
