import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Router } from './Routes';
// import DashBoard from './pages/DashBoard';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { SideBarProvider } from './context/responsive.sidebar';
import { ThemeColorProvider } from './context/theme.themeswitcher';

function App() {
  return (
    <SideBarProvider>
      <ThemeColorProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeColorProvider>
    </SideBarProvider>
  );
}

export default App;
