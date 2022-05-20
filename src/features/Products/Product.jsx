import React, { useState } from "react";
import "./Product.css";
var countsl = parseInt(localStorage.getItem("count"));
function Product() {
  var [count, setCount] = useState(Number(countsl || 0));
  const [theArray, setTheArray] = useState(
    JSON.parse(localStorage.getItem("array")) || []
  );
  function handleBuy(item) {
    const newCount = count + 1;
    localStorage.setItem("count", newCount);
    localStorage.setItem("array", JSON.stringify([...theArray, item]));
    document.querySelector(".alertModal").style.display = "block";
    setCount(newCount);
    setTheArray([...theArray, item]);
    setTimeout(() => {
      document.querySelector(".alertModal").style.display = "none";
    }, 3000);
  }
  return (
    <div className="ProductPage">
      <div className="alertModal" style={{ display: "none" }}>
        <h4>✔ Đặt món thành công </h4>
      </div>
      <h2>Menu</h2>
      <div className="products">
        <div className="produts-item">
          <div className="produst-img">
            <img
              src="http://gongcha.com.vn/wp-content/uploads/2019/04/TS-Gao-Rang.png"
              alt=""
            />
            <div className="product-info">
              <p htmlFor="">Trà sữa Gongcha</p>
              <p htmlFor="">30.000đ</p>
              <button onClick={() => handleBuy(1)}>Mua hàng</button>
            </div>
          </div>
        </div>
        <div className="produts-item">
          <div className="produst-img">
            <img
              src="https://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-SUA-TUOI.png"
              alt=""
            />
            <div className="product-info">
              <p htmlFor="">Sữa tươi đường đen</p>
              <p htmlFor="">30.000đ</p>
              <button onClick={() => handleBuy(2)}>Mua hàng</button>
            </div>
          </div>
        </div>
        <div className="produts-item">
          <div className="produst-img">
            <img
              src="http://gongcha.com.vn/wp-content/uploads/2022/03/CHOCOLATE-TOFFEE-1.png"
              alt=""
            />
            <div className="product-info">
              <p htmlFor="">Trà sữa Archives</p>
              <p htmlFor="">30.000đ</p>
              <button onClick={() => handleBuy(3)}>Mua hàng</button>
            </div>
          </div>
        </div>
        <div className="produts-item-2">
          <div className="produst-img">
            <img
              src="https://gongcha.com.vn/wp-content/uploads/2018/08/Strawberry-Earl-grey-latte.png"
              alt=""
            />
            <div className="product-info">
              <p htmlFor="">Strawbery Earl Grey Latte</p>
              <p htmlFor="">30.000đ</p>
              <button onClick={() => handleBuy(4)}>Mua hàng</button>
            </div>
          </div>
        </div>
        <div className="produts-item-2">
          <div className="produst-img">
            <img
              src="https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Pudding-%C4%91%E1%BA%ADu-%C4%91%E1%BB%8F-2.png"
              alt=""
            />
            <div className="product-info">
              <p htmlFor="">Trà sữa Pudding</p>
              <p htmlFor="">30.000đ</p>
              <button onClick={() => handleBuy(5)}>Mua hàng</button>
            </div>
          </div>
        </div>
        <div className="produts-item-2">
          <div className="produst-img">
            <img
              src="https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-s%E1%BB%AFa-Matcha-%C4%91%E1%BA%ADu-%C4%91%E1%BB%8F-2.png"
              alt=""
            />
            <div className="product-info">
              <p htmlFor="">Trà sữa Matcha</p>
              <p htmlFor="">30.000đ</p>
              <button onClick={() => handleBuy(6)}>Mua hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
