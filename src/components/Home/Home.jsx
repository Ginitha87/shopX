import React, { useRef } from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import "./Home.css";
import Footer from "../Footer/Footer";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Navigation from "../NavigationBar/Navigation";

function Home() {
  const productCategoriesRef = useRef(null);

  const scrollToComponent = () => {
    productCategoriesRef?.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <Provider store={store}>
      <div className="home">
        <Header onBtnClick={scrollToComponent} />

        {/* Featured Products Section */}
        <FeaturedProducts ref={productCategoriesRef} />

        {/* Product Categories Section */}
        <section className="categories">
          <h2>Shop by Categories</h2>
          <div className="category-grid">
            <Link to="/items/electronics" className="category-card">
              <img
                src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?ga=GA1.1.1209115411.1731925601&semt=ais_hybrid"
                alt="Category 1"
              />
              <h3>Electronics</h3>
            </Link>
            <Link to="/items/fashion" className="category-card">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478980.jpg?ga=GA1.1.1209115411.1731925601&semt=ais_hybrid"
                alt="Category 2"
              />
              <h3>Fashion</h3>
            </Link>
            <Link to="/items/kitchen" className="category-card">
              <img
                src="https://img.freepik.com/free-photo/flat-lay-kitchen-utensils-arrangement_23-2149491471.jpg?ga=GA1.1.1209115411.1731925601&semt=ais_hybrid"
                alt="Category 3"
              />
              <h3>Home & Kitchen</h3>
            </Link>
            <Link to="/items/beauty" className="category-card">
              <img
                src="https://img.freepik.com/free-photo/notebook-near-cosmetics-hairdressing-supplies_23-2147778946.jpg?ga=GA1.1.1209115411.1731925601&semt=ais_hybrid"
                alt="Category 4"
              />
              <h3>Beauty & Health</h3>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </Provider>
  );
}

export default Home;
