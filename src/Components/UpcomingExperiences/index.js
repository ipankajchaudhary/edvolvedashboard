import React from "react";
// import data from "./data";
import SingleCard from "./SingleCard";


const UpcommingExperiencesCard = () => {
  const data = [
    {
      img: "../../../assets/ue1.png",
      time: "Live Now",
      description: "Learn about history of hampi and the architecture",
      mentor: "Itihas Chronicals",
      join: true,
    },
    {
      img: "../../../assets/ue2.png",

      time: "26 February 2021, 9am",
      description: "How does organic farming work, and why it's earth friendly",
      mentor: "Lavika Sundar",
      join: false,
    },
    {
      img: "../../../assets/ue3.png",
      time: "26 February 2021, 9am",
      description:
        "Photography 101 : Let's learn all about potrait photography",
      mentor: "Drake Jacob",
      join: false,
    },
  ];
  return (
    <div className="container border mt-5">
      <div className="headline d-flex justify-content-between mt-2 mx-2 mb-2">
        <div className="title">
          <b>Your Upcoming Experience</b>
        </div>
        <div className="see-all">see all</div>
      </div>
      <div className="d-flex mt-1 mb-3 fc">
        {data.map((value, index) => {
          return (
            <div key = {value.mentor} class="card mx-2 mb-5" style={{ width: "18rem" }}>
              <img src={value.img} class="card-img-top rounded" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{value.time}</h5>
                <p class="card-text">{value.description}</p>
                <h8> by {value.mentor}</h8>
                <br />
                <btn class={!value.join ? "btn" : "btn btn-success"}>
                  {value.join ? "Join now" : "Remind Me"}
                </btn>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcommingExperiencesCard;
