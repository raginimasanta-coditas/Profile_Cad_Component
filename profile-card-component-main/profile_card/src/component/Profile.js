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
        
        <div className="card">
          {/* <div className="card_top"><img style={{width:"200px",height:"100px", border:"2px solid  black"}} src={{CardTop}}></img></div> */}
          <div className="card_top" style={{width:"200px",height:"30%",backgroundImage: `url(${CardTop})`, borderRadius: "20px 20px 0px 0px"}}></div>
          <div srtyle={{margin:"10px"}}>
            <img
              style={{
                borderRadius: "50%",
                padding: "10px",
                width: "80px",
                height: "80px",
                marginTop:"-50px"
              }}
              src={Picture}
            ></img>
          </div>
          <div>
            <span className="heading">Victor Crest</span>
            <span className="subheading" style={{ fontSize: "18px",fontWeight:"400", padding:"8px"}}>
              26
            </span>
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
       
      </div>
    );
  }
}
export default Profile;
