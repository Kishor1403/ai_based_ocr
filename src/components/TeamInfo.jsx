import React from "react";

const team = [
  {
    name: "Rohit Kharat",
    role: "Machine Learning",
    image: "https://avatars.githubusercontent.com/u/59816526?v=4",
  },
  {
    name: "Shravani Kharade",
    role: "Web developement",
    image: "https://avatars.githubusercontent.com/u/59816526?v=4",
  },
  {
    name: "Kishor Matsagar",
    role: "Web developement",
    image: "https://avatars.githubusercontent.com/u/59816526?v=4",
  },
];

export const TeamInfo = () => {
  return (
    <section className="team my-5 text-center" id="about_US">
      <div className="container">
        <div className="text-center my-5 ">
          <h1 data-aos="fade-up" data-aos-offset="200">
            Our <span className="text-primary">Team</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row">
          {team.map((member) => {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-12"
                data-aos="zoom-in"
              >
                <div className="card border-secondary">
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-primary">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
