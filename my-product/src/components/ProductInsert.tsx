import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productApi } from "../api/axiosInstance";
import "./ProductInsert.css";

const ProductInsert: React.FC = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    amount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      alert("상품 이름과 가격을 입력해주세요.");
      return;
    }

    try {
      await productApi("/insert", product);
      alert("상품이 성공적으로 등록되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("등록 에러", error);
      alert("상품 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="write-page">
      <div className="write-card">
        <h2 className="write-title">새 상품 등록</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>상품명</label>
            <input
              className="write-input"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="상품를 입력하세요"
            />
          </div>
          <div className="form-group">
            <label>가격</label>
            <input
              className="write-input"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="가격을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label>수량</label>
            <textarea
              className="write-textarea"
              name="amount"
              value={product.amount}
              onChange={handleChange}
              placeholder="수량을 작성하세요"
            />
          </div>
          <div className="write-button-group">
            <button type="submit" className="btn-submit">
              등록하기
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/")}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductInsert;
