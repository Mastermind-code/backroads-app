import React from "react";
import Title from "./Title";
import { serviceContent } from "../data";

const services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title main="our" sub="services" />
        <div className="section-center services-center">
          {serviceContent.map((service) => {
            const { id, name, title, text } = service;
            return (
              <>
                <article key={id} className="service">
                  <span className="service-icon">
                    <i className={name}></i>
                  </span>
                  <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                    <p className="service-text">{text}</p>
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

export default services;
