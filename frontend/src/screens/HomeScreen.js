import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import Carousel from 'react-bootstrap/Carousel';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
    <div>
      {/* //carosol */}
    </div>
      {/* {category && <h1>{category}</h1>} */}

     
     
          <div className="container">
            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner1.jpg"
                  alt="First slide"
                  height="400px"
                />
                <Carousel.Caption>
                  <h3>Trending Shirts from winter</h3>
                  <p>Shirts with Highest selling of the months.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/banner2.jpg"
                  alt="Third slide"
                  height="400px"
                />

                <Carousel.Caption>
                  <h3>Color of the Month</h3>
                  <p>Color selected by the experts for the month</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                
                <img
                  className="d-block w-100"
                  src="/images/banner3.jpg"
                  alt="Third slide"
                  height="400px"
                />

                <Carousel.Caption>
                  <h3>Upcoming Jerssy </h3>
                  <p>Checkout new Football Jerssy from the store</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="" id="products">
            <ul className="filter">
              <li>
                <form onSubmit={submitHandler}>
                  <input
                    name="searchKeyword"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button type="submit">Search</button>
                </form>
              </li>
              <li>
                Sort By{' '}
                <select name="sortOrder" onChange={sortHandler}>
                  <option value="">Newest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
                </select>
              </li>
            </ul>
          </div>
          {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div>
                <ul className="products">
                {products.map((product) => (
                  <li key={product._id}>
                    <div className="product">
                      <Link to={'/product/' + product._id}>
                        <img
                          className="product-image"
                          src={product.image}
                          alt="product"
                        />
                      </Link>
                      <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                      </div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">Rs.{product.price}</div>
                      <div className="product-rating">
                        <Rating
                          value={product.rating}
                          text={product.numReviews + ' reviews'}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
        
          
        </div>

        
      )}
    </>
  );
}
export default HomeScreen;
