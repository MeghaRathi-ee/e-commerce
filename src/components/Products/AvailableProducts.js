import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const AvailableProducts = (props) => {
  const fashion = props.products.filter((product) => product?.category?.includes('cloth'))
  const electronic = props.products.filter((product) => product?.category?.includes('electronics'))
  const jwellery = props.products.filter((product) => product?.category?.includes('jewelery'))

  return (
    <div>
      {(props.category == "All" || props.category == "fashion") && fashion.length && <div className={classes.fashion_section}>
        <div className="container"> 
          <div className={classes.fashion_section_2}>
            <div className="row">
            <h1 className={classes.fashion_title}>Man & Woman Fashion</h1>
              <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={30}
              >
                {fashion.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>}
      {(props.category == "All" || props.category == "electronic") && electronic.length && <div className={classes.fashion_section}>
        <div className="container"> 
          <div className={classes.fashion_section_2}>
            <div className="row">
            <h1 className={classes.fashion_title}>Electronics</h1>
              <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={30}
              >
                {electronic.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>}
      {(props.category == "All" || props.category == "jwelery") && jwellery.length && <div className={classes.fashion_section}>
        <div className="container"> 
          <div className={classes.fashion_section_2}>
            <div className="row">
            <h1 className={classes.fashion_title}>Jwellery</h1>
              <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={30}
              >
                {jwellery.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                      category={product.category}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default AvailableProducts;
