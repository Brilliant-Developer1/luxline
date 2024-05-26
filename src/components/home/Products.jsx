/* eslint-disable no-undef */
import SingleProduct from '../SingleProduct';

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex flex-wrap justify-center gap-5 px-6  ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map(shoe => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
