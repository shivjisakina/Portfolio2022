import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const Customers = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          {/* <div className="resumo_fn_main_title">
            <h3 className="subtitle">Customers</h3>
            <h3 className="title">Happy People</h3>
          </div>
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="https://envato.com/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/1.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://frenify.com/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/2.png" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="img/partners/3.png" alt="image" />
                </a>
              </li>
              <li>
                <a
                  href="https://themeforest.net/item/artemiz-blog-podcast-wordpress-theme/28455063"
                  target="_blank"
                  rel="noreferrer"                 
                >
                  <img src="img/partners/4.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/wetland-multi-purpose-react-next-js-template-for-startup/33851796"   rel="noreferrer" target="_blank">
                  <img src="img/partners/5.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/edunet-react-personal-tutor-lms-dashboard-ui-kit/31635576"  rel="noreferrer" target="_blank">
                  <img src="img/partners/6.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/appz-mobile-app-landing-react-nextjs-template/34385390"  rel="noreferrer" target="_blank">
                  <img src="img/partners/7.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425"  rel="noreferrer" target="_blank">
                  <img src="img/partners/3.png" alt="image" />
                </a>
              </li>
            </ul>
          </div> */}
          {/* /Partners */}
          {/* Testimonials */}
          <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key='1'>
                <div className="title_holder">
                  <p className="desc">
                    “I had the pleasure of working with Sakina as her manager at Trilogy Education Services when she was on the Central Support Tutor Team. I found her to be highly motivated and effective in helping our students and a pleasure to have on the team. She is always welcome back on our tutor team in the future.”
                  </p>
                  <h3 className="title">Greg Gallant</h3>
                  <h3 className="subtitle">Manager @ 2U</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key='2'>
                <div className="title_holder">
                  <p className="desc">
                    {`“Sakina Shivji is an amazing person to work with. She is very solution oriented with exceptional problem solving skills. Sakina’s deeper understanding of the technical nuances always helped us during the tough time of our project. Sakina is always ready to take up new challenges and to prove her mettle.”`}
                  </p>
                  <h3 className="title">Abdullah Rahman</h3>
                  <h3 className="subtitle">Studied Together</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key='3'>
                <div className="title_holder">
                  <p className="desc">
                    “ Sakina was a model student at The UCF Coding Bootcamp. She was self reliant, self motivated, and went above and beyond her classmates in her studies. Sakina was a great team player in group setting and provided support to struggling students around her. I have full faith that Sakina would be an amazing addition to any organization who is in need of a Web Developer.”
                  </p>
                  <h3 className="title">Joshua Poffenberger</h3>
                  <h3 className="subtitle">Teacher @ UCF</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default Customers;
