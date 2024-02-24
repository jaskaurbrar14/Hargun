import "./TrendingCarousel.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useProductsContext } from "../../utils/hooks.js";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#5e5d5d" }}
      onClick={onClick}
    />
  );
}

function TrendingCarousel() {
  const { trendingProducts } = useProductsContext();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
                  <p className="aside__carousel-card-link-info-title">
                    {product.title}
                  </p>
                  <p className="aside__carousel-card-link-info-price">
                    ${product.price}
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
