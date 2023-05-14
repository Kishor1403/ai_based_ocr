import React from "react";
const services = [
  {
    id: 1,
    title: "Image to word file",
    info: "Our OCR system convert image of handwritten document into digital text format like word file ,pdf file etc.",
  },
  {
    id: 2,
    title: "Text to speech",
    info: "Helping blind Persons to understand any handwritten document by providing Text to speech assistance.",
  },
  {
    id: 3,
    title: "Great Accuracy!",
    info: "Text with different handwriting can be recognized upto 90%-92% of Accuracy.",
  },
];
export const ServicesInfo = () => {
  return (
    <section className="services py-5 bg-light" id="OurServices">
      <div className="container">
        <div className="text-center my-5">
          <h1 data-aos="fade-up" data-aos-offset="200">
            Our <span className="text-primary">services</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row">
          {services.map((service) => {
            return (
              <div
                className="col-sm-12 col-lg-4 col-md-4 col-12 text-center"
                data-aos="zoom-in"
              >
                <div className="card" style={{ height: "14rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.info}</p>
                    <a href="#" className="btn btn-outline-primary">
                      Learn more!
                    </a>
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
