import React from 'react';
import ReactDOM from 'react-dom';


// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import './App.css';

import Menu from './components/menu/menu';
import About from './components/about/about';
import Service from './components/services/services';
import SlickServices from './components/slickservices/slickservices';
import Careers from './components/careers/careers';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

import Maintenance from './components/maintenance/maintenance';

// export default class App extends React.Component {
//   render() {
//       return (
//         <div>
//           <Menu />
//           <Service />
//           <SlickServices />
//           <About />
//           <Careers />
//           <Projects />
//           <Footer />
//           <Maintenance />
//           <MessengerCustomerChat
//             pageId="105340060897659"
//             appId="2370605603251620"
//           /> 
//         </div>
//       )
//   }
// }

function App() {
  
  return (
    
    <div>
      <Menu />
      <Service />
      <SlickServices />
      <About />
      <Careers />
      <Projects />
      <Footer />
      <Maintenance />
      <MessengerCustomerChat
        pageId="105340060897659"
        appId="2370605603251620"
      /> 
    </div>
  );
}

export default App;
