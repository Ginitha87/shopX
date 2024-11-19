import React from "react";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import { useParams } from "react-router-dom";

function ElectronicItems() {
  return (
    <div className="about">
      <FeaturedProducts />
    </div>
  );
}

export default ElectronicItems;
