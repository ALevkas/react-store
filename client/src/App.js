import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './layout/Header';

function App() {
    return (
        <BrowserRouter className='app'>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
