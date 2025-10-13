import {Router} from './components/Router.tsx';
import { StateProvider } from './context/StateContext';

function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
