import data from "../data.json";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <h1>Tous les jeux</h1>
      <div className="productList">
        {data.map(({ product_img, product_name }, index) => {
          return (
            <Link to={`/game/${product_name}`} className="article" key={index}>
              <img src={product_img} alt={product_name} />
              <h2>{product_name}</h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
