import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { StoreProvider } from './redux/StoreProvider';

function App() {
    return (
        <StoreProvider>
            <RouterProvider router={router} />
        </StoreProvider>
    );
}

export default App;
