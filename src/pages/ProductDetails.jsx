import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="container flex justify-center p-10">
      <div className="card w-96 bg-gradient-to-tr from-emerald-300 to-emerald-100">
        <figure>
          <img src={image_url} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <h2 className="card-title">${price}</h2>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
