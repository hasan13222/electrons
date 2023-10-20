import {Link, useNavigate} from 'react-router-dom'

const Brands = ({brand}) => {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate(`/products/${brand.brand_name}`)} className="brands__item">
        <img src={brand.brand_logo} alt={brand.brand_name} />
        <Link>{brand.brand_name}</Link>
      </div>
    </>
  );
};

export default Brands;
