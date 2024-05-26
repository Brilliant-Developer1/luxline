import { useEffect, useState } from 'react';
import SingleProductCardDashboard from '../components/dashboard/SingleProductCardDashboard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shoes/')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleDeleteProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-2 md:p-10 ">
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap justify-center 2xl:justify-normal  gap-4">
        {products.map(shoe => (
          <SingleProductCardDashboard
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
