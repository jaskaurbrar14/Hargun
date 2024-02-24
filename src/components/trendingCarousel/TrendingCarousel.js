import "./TrendingCarousel.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useProductsContext } from "../../utils/hooks.js";
function TrendingCarousel() {
  const { trendingProducts } = useProductsContext();
  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <aside className="aside">
      <h2 className="aside__heading">Trending products</h2>
      <ul className="aside__carousel">
        {" "}
        <Slider {...settings}>
          {trendingProducts.map((product) => (
            <li key={product.id} className="aside__carousel-card">
              <Link
                className="aside__carousel-card-link"
                to={`/products/${product.id}`}
              >
                <img
                  className="aside__carousel-card-link-image"
                  src={product.photo[0]}
                  alt={product.title}
                ></img>
                <section className="aside__carousel-card-link-info">
                  <p className="aside__carousel-card-link-image-info-title">
                    {product.title}
                  </p>
                  <p className="aside__carousel-card-link-image-info-price">
                    {product.price}
                  </p>
                </section>
              </Link>
            </li>
          ))}
        </Slider>
      </ul>
    </aside>
  );
}

export default TrendingCarousel;
