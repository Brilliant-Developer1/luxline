import { useRef, useState } from 'react';

const AddProducts = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [productData, setProductData] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };
    setProductData(data);
    setShowAlert(true);
  };

  const handleConfirm = async confirm => {
    setShowAlert(false);
    if (confirm && productData) {
      await fetch('http://localhost:3000/shoes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);

          setProductData(null);
          setShowToast(true);
          if (formRef.current) {
            formRef.current.reset();
          }
          setTimeout(() => setShowToast(false), 3000);
        });
    }
  };

  return (
    <div className="container max-w-screen-md p-10">
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>
          <div className="mt-2">
            <input
              className="input input-bordered input-accent focus:outline-none bg-transparent w-full"
              type="text"
              name="id"
              placeholder="ID"
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-gradient-to-tr from-emerald-300 to-emerald-100 text-emerald-800 p-4 "
              type="submit"
              value="Add product"
            />
          </div>
        </form>
      </div>

      {showAlert && (
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Are you sure you want to add this product?</span>
          <div>
            <button className="btn btn-sm" onClick={() => handleConfirm(false)}>
              Deny
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => handleConfirm(true)}
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Product Added</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
