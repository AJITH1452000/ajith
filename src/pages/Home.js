import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/pngtree-golden-rice-field-harvested-in-autumn-png-image_6764195.jpg";
import "../styles/HomeStyles.css";


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>ELAYA HARVESTING SERVICE</h1>
          <p>BEST SERVICE IN TAMILNADU</p>
          <Link to="/menu">
            <button className="btn" >BOOK NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
