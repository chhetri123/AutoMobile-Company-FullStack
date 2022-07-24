import React, { useState, useEffect } from "react";
import BrandCard from "../../Template/ListTemplete";
const BrandList = () => {
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_API}/brand`)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data.data);
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
