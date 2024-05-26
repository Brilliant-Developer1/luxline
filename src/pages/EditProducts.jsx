import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditProducts = () => {
  const shoe = useLoaderData();
  const navigate = useNavigate();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleUpdate = async data => {
    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      // eslint-disable-next-line no-unused-vars
      .then(data => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          navigate('/dashboard/all-products');
        }, 1000);
      });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = confirm => {
    setShowConfirm(false);
    if (confirm) {
      const form = document.querySelector('form');
      const id = form.id.value;
      const title = form.title.value;
      const brand = form.brand.value;
      const price = form.price.value;
      const description = form.description.value;
      const image_url = form.image_url.value;

      const data = { id, title, brand, price, description, image_url };
      handleUpdate(data);
    }
  };

  return (
    <div className="container max-w-screen-md p-10">
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={e => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={e => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-gradient-to-tr from-emerald-300 to-emerald-100 text-emerald-800 p-4"
              type="submit"
              value="Update product"
            />
          </div>
        </form>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p>Are you sure you want to update this product?</p>
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

      {showToast && (
        <div className="fixed bottom-4 right-4">
          <div className="alert alert-info">
            <span>Product Updated</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProducts;
