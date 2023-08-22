import React from "react";
import css from "./product.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Product = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);
  const [parent] = useAutoAnimate();

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container} ref={parent}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>

        <div className={css.list}>
          {menuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left_side">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}</span>
                <div>Shop Now</div>
              </div>
              <img src={product.img} alt="" className="img_product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
