// import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { Web3ConnectionProvider } from './providers/Web3Connection';

function App() {
  return (
    <div className='App'>
      <Web3ConnectionProvider>
        <Topbar />
        <Sidebar />
      </Web3ConnectionProvider>
    </div>
  );
}

export default App;
