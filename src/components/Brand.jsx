import {Link} from 'react-router-dom'

const Brands = ({brand}) => {
  
  return (
    <>
      <div className="brands__item">
        <img src={brand.brand_logo} alt={brand.brand_name} />
        <Link>{brand.brand_name}</Link>
      </div>
    </>
  );
};

export default Brands;
