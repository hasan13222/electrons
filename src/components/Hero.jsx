import {useNavigate} from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="full_container hero_full">
        <div className="fix_container hero">
          <p>Discover, Explore, and Master the Electronics Universe</p>
          <h1>Welcome to the Secrets of Tech Marvels</h1>
          <button onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
