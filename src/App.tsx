
import 'react-toastify/dist/ReactToastify.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import AppContent from './AppContent';


function App() {

  
  return (
    <ReduxProvider store={store}>
      <AppContent />
    </ReduxProvider>
  );
}

export default App;
