import React from "react";
import Picture from "../assets/image-victor.jpg";
import CardTop from "../assets/bg-pattern-card.svg";
import BackgroundTop from "../assets/bg-pattern-top.svg";
import "./Profile.styles.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedIP: "empty",
    };
  }

  render() {
    return (
      <div>
        <div></div>
        <div className="card">
          <div className="card_top"></div>
          <div>
            <img
              style={{
                borderRadius: "50%",
                padding: "10px",
                width: "80px",
                height: "80px",
              }}
              src={Picture}
            ></img>
          </div>
          <div>
            <span className="heading">Victor Crest</span>
            <span className="subheading">26</span>
          </div>
          <div className="dash"></div>

          <div className="flex-container" style={{ display: "flex" }}>
            <div>
              <div className="heading"> 80K</div>

              <div className="subheading">followers</div>
            </div>
            <div>
              <div className="heading">803k</div>

              <div className="subheading">likes</div>
            </div>
            <div>
              <div className="heading">1.4K</div>

              <div className="subheading">Photos</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
export default Profile;
