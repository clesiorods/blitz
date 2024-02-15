import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Router } from './Routes';
// import DashBoard from './pages/DashBoard';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { SideBarProvider } from './context/responsive.sidebar';

function App() {
  return (
    <SideBarProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
