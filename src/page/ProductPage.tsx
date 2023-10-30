import { useParams } from "react-router-dom";
import data from "../data.json";

const ProductPage = () => {
  const { id } = useParams();

  const product: Game | undefined = data.find(
    (element) => element.product_name === id
  );

  return (
    <main className="product">
      <h1>{id}</h1>
      {product && (
        <div>
          <img src={product.product_img} />
          <p>{product.product_description}</p>
        </div>
      )}
    </main>
  );
};

export default ProductPage;
