import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card max-w-96  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image_url}
          alt={title}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p className="max-h-16">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary mt-10 xl:mt-5">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
