import { useStoreContext } from "../context";
import { Link } from "react-router-dom";
import "./CartView.css";
function CartView() {
  const { cart, setCart, fname } = useStoreContext();

  return (
    <div className="appcontainer">
      <div className="nbar">
            <div className="icon">
                <h2 className="logo">ACI Theatre</h2>
            </div>
            <div className="menu">
                <ul className="navigation">
                    <li><a><Link to={`/`}>HOME</Link></a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SETTINGS</a></li>
                    <li>
                        <div className="search">
                            <div className="searchbox">
                                <input type="text" placeholder="Search..." />
                            </div>
                            <button className="butsearch">Search</button>
                        </div>
                    </li>
                    <li>
                        <div className="buttons">
                            <div className="register">
                                <Link to={`/movies/genre`} className="button">Back</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    <div className="cartview">
      <h1>{fname}'s Shopping Cart</h1>
      <div className="cartitems">
        {
          cart.entrySeq().map(([key, value]) => {
            return (
              <div className="cartitem" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                  alt={value.title}
                />
                <h1>{value.title}</h1>
                <button onClick={() => setCart((prevCart) => prevCart.delete(key))}>Remove</button>
              </div>
            );
          })
        }
      </div>
    </div>
    </div>
  );
}

export default CartView;