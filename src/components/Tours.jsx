import React from "react";
import Title from "./Title";
import { tourData } from "../data";

const tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title main="featured" sub="tours" />

        <div className="section-center featured-center">
          {tourData.map((tour) => {
            const { id, src, date, title, text, location, duration, price } =
              tour;
            return (
              <>
                <article key={id} className="tour-card">
                  <div className="tour-img-container">
                    <img src={src} className="tour-img" alt="" />
                    <p className="tour-date">{date}</p>
                  </div>
                  <div className="tour-info">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <div className="tour-footer">
                      <p>
                        <span>
                          <i className="fas fa-map"></i>
                        </span>
                        {location}
                      </p>
                      <p>{duration}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default tours;
