import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WishlistProvider from './Context/WishlistContext';
import ShopContextProvider from './Context/ShopContext';
import ThemeProvider from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WishlistProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </WishlistProvider>
    </ThemeProvider>
  </React.StrictMode>
);
