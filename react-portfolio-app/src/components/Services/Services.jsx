import "./Services.css";
import theme_pattern from "../../assets/images/theme_pattern.svg";
import services_data from "../../assets/images/services_data";
import arrow_icon from "../../assets/images/arrow_icon.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services...</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div className="services-format" key={index}>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-read-more">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
