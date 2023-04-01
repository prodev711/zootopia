import all from "../img/all.png";
import sheep from "../img/sheep.png";
import Whoweare from '../img/whoweare.jpg';
import "../styles/info.css"

const Info = () => {
  return (
    <div className="info">
      <div className="info-contents">
        <img src={Whoweare} alt = "whoweare" className="whoweare" />
        <div className="info-content start">
          <div className="info-content-context ">
            <h2 className="info-content-context-title f-waltreg">
              We Are ZooToPia Team
            </h2>
            <div className="small-line" />
            <p>
              Our Zootopia team is that started the startup business in 2017 and is growing. We have become a team member of many great customers with our high quality and creativity and strive to make our all life easier.
            </p>
            <p>
              Our Zootopia team members truly become a part of our partners’ businesses, and we’re proud to work on exciting projects with great people. Ready to get started? Let us form your dream team.
            </p>
            <button className="rightBtn">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="all">
        <img src={all} />
      </div>
      <div className="blend about-left" />
      <div className="blend about-right" />
    </div>
  )
}

export default Info
