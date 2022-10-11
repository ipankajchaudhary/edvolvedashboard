import React from "react";

const Stats = () => {
  return (
    <>
      <div className="container border mt-5 mx-5" style={{width : "auto"}}>
        <div className="headline  mt-2 mx-2 mb-2">
          <b>Your Stats</b>
        </div>
        <div className="cardcontainer d-flex mb-2">
          <div className="card border mx-2 bg-secondary bg-gradient">
            <div className="title">
              <h5>12</h5>
            </div>
            <div className="desc">Experiences this week</div>
          </div>
          <div className="card border  mx-2 bg-secondary bg-gradient">
            <div className="title">
              <h5>24</h5>
            </div>
            <div className="desc">Experiences Overall</div>
          </div>
          <div className="card border  mx-2 bg-secondary bg-gradient">
            <div className="title">
              <h5>12</h5>
            </div>
            <div className="desc">Courses this week</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
