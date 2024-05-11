import "./MyWork.css";
import theme_pattern from "../../assets/images/theme_pattern.svg";
import my_work_data from "../../assets/images/mywork_data";
import arrow_icon from "../../assets/images/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className="my-work" id="works">
      <div className="my-work-title">
        <h1>My Latest Works...</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="my-work-container">
        {my_work_data.map((work, index) => {
          return <img src={work.w_img} alt="" key={index} />;
        })}
      </div>
      <div className="show-more">
        <p>Show More...</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
