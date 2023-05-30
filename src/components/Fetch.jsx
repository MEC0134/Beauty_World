import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateCard from "./CreateCard";
import "../css/Fetch.css";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(12);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchParam] = useState(["product_type", "name","price"]);
  const [noMoreResults, setNoMoreResults] = useState(false); // New state

  const allCardData = async () => {
    const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
    setProducts(response.data);
    setIsLoaded(true);
  };

  const popUpMessage = () => {
    setNoMoreResults(true);
    setTimeout(() => {
      setNoMoreResults(false);
    }, 3000);
  };
  
  const loadMore = () => {
    if (visible < products.length) {
      setVisible(visible + 12);
    } else {
      popUpMessage();
    }
  };

  const RemoveCard = (id) => {
    const newCharacterType = products.filter((card) => card.id !== id);
    setProducts(newCharacterType);
    setVisible(visible - 1);
  };


  const search = () => {
    return products.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchInput.toLowerCase()) > -1
        );
      });
    });
  };

  const filteredProducts = search(products);

  useEffect(() => {
    allCardData();
  }, []);

  if (!isLoaded) {
    return <div>Please wait while data is being loaded.......</div>;
  } else {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="search-wrapper">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                size="50"
                className="search-input"
                placeholder="Search for items by price and type......"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <span className="sr-only">Search items here</span>
            </label>
          </div>

          <div className="cards">
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice(0, visible)
                .map((product) => (
                  <CreateCard
                    key={product.id}
                    image_link={product.image_link}
                    name={product.name}
                    brand={product.brand}
                    product_type={product.product_type}
                    price={product.price}
                    remove={() => RemoveCard(product.id)}
                  />
                ))
            ) : (
              <h2 className="no-item">Sorry, no products found!</h2>
            )}
          </div>
        </div>

        {noMoreResults && (
          <div className="pop-up">No More Products!</div>
        )}

        <button className="fade-out load-more" onClick={loadMore}>
          Load More
        </button>
      </div>
    );
  }
};

export default Fetch;
