import React from "react";
import "./Homepage.css";

function Homepage(props) {
  return (
    <div className="homepage">
      <div className="homepage-logo">
        <img
          src="https://i.pinimg.com/originals/01/56/8a/01568aa7fdd4b7cc44b9cd36eb02d226.gif"
          alt=""
        />
      </div>
      <div className="homepage-contain">
        <div className="homepage-contain-top">
          <h4>Nội dung bài tập</h4>
          <ul className="homepage-ul">
            <li>Giới thiệu mục tiêu, nội dung bài tập</li>
            <li>Thành viên, phân công công việc</li>
            <li>Danh lục sản phẩm</li>
            <li>Thống kê doanh số</li>
            <li>Thông tin thêm</li>
          </ul>
        </div>
        <div className="homepage-contain-top">
          <h4>Mục tiêu bài tập</h4>
          <ul className="homepage-ul">
            <li>Biết được cách viết trang wed</li>
            <li>
              Thống kê được số lượng bán ra hằng ngày được bao nhiêu ly trà sữa
            </li>
            <li>lập được biểu đồ cột để thống kê</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
