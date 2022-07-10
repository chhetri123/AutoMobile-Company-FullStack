import React, { useState, useEffect } from "react";
import BrandCard from "../../Template/ListTemplete";
const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/brand")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, [brands]);
  return (
    <BrandCard
      data={brands}
      title="Cars Brand Lists "
      isTrue={true}
      fromBrand={true}
    />
  );
};
export default BrandList;