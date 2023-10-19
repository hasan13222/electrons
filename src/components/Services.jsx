import { services } from "../utility/services";
const Services = () => {
  return (
    <>
      <div className="full_container services_full">
        <div className="fix_container services">
          <div className="heading">
            <p>Why Us</p>
            <h2>Why Choose Us</h2>
          </div>
          <div className="services__items">
            {services.map((service, index) => (
              <>
                <div key={index} className="service__item">
                  <img src={service.icon} alt="icon" />
                  <h3>{service.title}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
