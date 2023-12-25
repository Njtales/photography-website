import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css'; 
import Slider from 'react-slick';
import './Testimonials.scss';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = `*[_type == "testimonial"]`;

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })
      .catch(console.error);
  }, []);

  if (!testimonials.length) {
    return <div>Loading testimonials...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings} className="testimonial-slider">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-slide">
          <div className="testimonial-content">
            <div className="testimonial-text">
              <h2>Words of Love from {testimonial.name}.</h2>
              <p>{testimonial.feedback}</p>
              <a href="/all_testimonials">Read more from the clients.</a>
            </div>
            {testimonial.imgUrl && (
              <div className="testimonial-image">
                <img src={urlFor(testimonial.imgUrl).url()} alt={`${testimonial.name}'s testimonial`} />
              </div>
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
