/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        onDelete(id);
      });
  };

  const handleConfirm = confirm => {
    setShowConfirm(false);
    if (confirm) {
      handleDelete();
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-between mt-3">
          <div>
            <Link to={`edit/${id}`}>
              <button className="btn bg-slate-300 ">Edit</button>
            </Link>
            <button
              onClick={() => setShowConfirm(true)}
              className="btn bg-red-300 "
            >
              Delete
            </button>
          </div>

          <Link to={`/products/${id}`}>
            <button className="btn bg-indigo-200 ">See details</button>
          </Link>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => handleConfirm(false)} className="btn mr-2">
                Cancel
              </button>
              <button
                onClick={() => handleConfirm(true)}
                className="btn btn-primary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductCardDashboard;
