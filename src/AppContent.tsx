
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { SideBarProvider } from './context/ResponsiveSidebar';
import { ThemeColorProvider } from './context/ThemeSwitcher';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConfigProvider, theme } from 'antd';
import { useSelector } from 'react-redux';


function AppContent() {

  const {color} = useSelector((state: any) => { return state.theme });


  return (
    <AuthProvider>
      <ThemeColorProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#0029a3',
              borderRadius: 4,
              colorBgContainer: color === 'dark' ? '#14161e' : '#ffffff',
            },
            algorithm: color === 'dark' ? theme.darkAlgorithm : undefined,
          }}
        >
          <SideBarProvider>
            <BrowserRouter>
              <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              // theme="colored"
              />
              <Router />
            </BrowserRouter>
          </SideBarProvider>
        </ConfigProvider>
      </ThemeColorProvider>
    </AuthProvider>
  );
}

export default AppContent;
