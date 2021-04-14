import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';

import GlobalStyle from './globalStyles';

function App() {
    return (
        <BrowserRouter className='app'>
            <GlobalStyle />
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
