import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productApi } from "../api/axiosInstance";
import type { Product } from "../types/Product";
import "./ProductDetail.css";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    productApi
      .get<Product>(`/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  const handleUpdate = async () => {
    if (!product) return;
    await productApi.put(`/${id}`, product);
    alert("수정 완료");
    navigate("/");
  };

  const handleDelete = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    await ProductApi.delete(`/${id}`);
    alert("삭제 완료");
    navigate("/");
  };

  if (!product) return <div className="detail-page">Loading...</div>;

  return (
    <div className="detail-page">
      <div className="detail-card">
        <h2 className="">게시글 상세</h2>

        <div className="form-group">
          <label>상품명</label>
          <input
            className="input-field"
            value={product.name || ""}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>가격</label>
          <input
            className="input-field"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
          />
        </div>

        <div className="form-group">
          <label>수량</label>
          <textarea
            className="textarea-field"
            value={product.amount}
            onChange={(e) =>
              setProduct({ ...product, amount: Number(e.target.value) })
            }
          />
        </div>

        <div className="button-group">
          <button className="btn btn-list" onClick={() => navigate("/")}>
            목록으로
          </button>
          <button className="btn btn-update" onClick={handleUpdate}>
            상품 수정
          </button>
          <button className="btn btn-delete" onClick={handleDelete}>
            상품 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
