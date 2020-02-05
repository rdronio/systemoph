import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ReactGa from 'react-ga';

import Menu from './components/menu/menu';
import About from './components/about/about';
import Service from './components/services/services';
import SlickServices from './components/slickservices/slickservices';
import Careers from './components/careers/careers';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

import Maintenance from './components/maintenance/maintenance';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import MailChimp from './components/mailchimp/mailchimp';

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-157820093-1');
    ReactGa.pageview('/');
  }, [])

  return (
    <div>
      <Menu />
      
      <Projects />
      <About />
      <Careers />
      
      <Service />
      <SlickServices />
      <MailChimp />
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
