import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // ✅ Import Provider từ Redux
import { store } from './redux/store'; // ✅ Import Redux store
import './index.css';
import App from './App.jsx';
import '../i18n.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            {' '}
            {/* ✅ Bọc App trong Provider */}
            <App />
        </Provider>
    </StrictMode>
);
