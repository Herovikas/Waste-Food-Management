import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
<h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
      <section className='mainy boxs'>
        <div className='postionText_home container' style={{ width: '50%' }}>
          <p>2022 @Food For All</p>
          <span>
            We Feed Needy
            <br />
            People...
          </span>
          <div className='postionTexts_home'>
            <span>
              Good Food Necessary
              <br />
              for Great Nation
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className='Give_it_away' style={{ backgroundColor: '#eddae2' }}>
          <div className='Give_it_away_2'>
            Give it away, Instead of wasting it.
          </div>
          <p></p>
          <div className='container row' style={{ margin: 'auto' }}>
            <div className='col'>
              <img
                className='card-img-top'
                src='./CustomersOrder.svg'
                alt='Card cap'
                style={{ width: '300px' }}
              />
              <div className='card-body'>
                <Link to='/Individual-Donor' className='Donor btn btn-lg btn-dark '>
                  Individual Donor
                </Link>
              </div>
            </div>
            <div className='col'>
              <img
                className='card-img-top'
                src='./DeliveryPeopleArrive.svg'
                alt='Card cap'
                style={{ width: '300px' }}
              />
              <div className='card-body'>
                <Link to='./Add-Your-Restaurant' className='Donor btn btn-lg btn-dark '>
                  Add Your Restaurant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='How_It_Work'>
          <div className='How_It_Work'>How It Work</div>
          <p></p>
          <div className='continer'>
            <div className='row' style={{ margin: 'auto' }}>
              <div className='col-1'></div>
              <div className='Howitwork col-5'>
                <h1 style={{ fontSize: '240px', fontFamily: 'fantasy' }}>01</h1>
                <div>Hungry person's order food</div>
                <span>
                  A needy peerson finds food and places an order through Our web
                  appllication.
                </span>
              </div>
              <div className='col'>
                <img
                  src={'./Hungry_order_food.jpg'}
                  className='img-thumbnail'
                  alt='Cinque Terre'
                  style={{ height: '500px', width:'400px' , margin:'auto'}}
                />
              </div>
            </div>
          </div>

          <div className='continer'>
            <div className='row' style={{ margin: 'auto' }}>
              <div className='col'>
                <img
                  src={'./images.jpg'}
                  className='img-thumbnail'
                  alt='Cinque Terre'
                  style={{ height: '450px',width:'400px', margin:'auto' }}
                />
              </div>
              <div className='Howitwork_2 col-7'>
                <h1 style={{ fontSize: '240px', fontFamily: 'fantasy' }}>02</h1>
                <div style={{ textAlign: 'left' }}>
                  NGOs/Restaurents give food
                </div>
                <span>
                  NGO's and some restaurents make some food available for them.
                </span>
              </div>
              <div className='col-1'></div>
            </div>
          </div>

          <div className='continer'>
            <div className='row' style={{ margin: 'auto' }}>
              <div className='col-1'></div>
              <div className='Howitwork col-6'>
                <h1 style={{ fontSize: '250px', fontFamily: 'fantasy' }}>03</h1>
                <div>Delivery partners arrive</div>
                <span>
                  Delivery people pick up the order from your NGO's and
                  restaurant, then deliver it to the hungry people.
                </span>
              </div>
              <div className='col'>
                <img
                  src={'./30MPYUVANGO1.jpg'}
                  className='img-thumbnail'
                  alt='Cinque Terre'
                  style={{ height: '480px',width:'400px', margin:'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HomeScreen;
