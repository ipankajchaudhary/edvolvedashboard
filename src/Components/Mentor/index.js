import React from "react";

const Mentor = () => {
  return (
    <>
      <div className="container border mt-5 mx-5" style={{ width: "auto" }}>
        <div className="headline  mt-2 mx-2 mb-2">
          <b>New Mentors on Edvolve</b>
        </div>
        <div className="cardcontainer d-flex mb-2 flex-column">
          <div className="card border mx-2 mb-2">
            <div className="title d-flex">
              <img
                src="../../../assets/m1.png"
                style={{ width: "25%" }}
                alt=""
              />
              <div
                className="mt-3"
                style={{ fontSize: "15px", verticallyAlign: "center" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolore
                ipsum optio, eius
                <div className="desc">See Profile</div>
              </div>
            </div>
          </div>
          <div className="card border mx-2 mb-2">
            <div className="title d-flex">
              <img
                src="../../../assets/m2.png"
                style={{ width: "25%" }}
                alt=""
              />
              <div
                className="mt-3"
                style={{ fontSize: "15px", verticallyAlign: "center" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolore
                ipsum optio, eius
                <div className="desc">See Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentor;
