import React, { useContext } from 'react';
import { WishlistContext } from '../../Context/WishlistContext';
import { Link } from 'react-router-dom';
import './Wishlist.css';
import { backend_url } from '../../App';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
<img src={backend_url + item.image} alt={item.name} />
<div>
                <h3>{item.name}</h3>
                <p>${item.new_price}</p>
                <div className="wishlist-buttons">
                  <Link to={`/product/${item.id}`}>
                    <button>View Product</button>
                  </Link>
                  <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
