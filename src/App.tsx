import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Home />
    </Provider>
  );
}

export default App;
