import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`I'm a Full-Stack Web Developer that is specialized in the Front-End with over 4 years
                        of experience. I was born in Dubai, grew up in the Gulf (Oman, Qatar), then moved to Florida where I learned how to code. Currently living in Chicago, IL. I code and create
                        web elements for amazing companies. I love
                        working with new people and learning from them, while also having the oppurtunity to teach them. `}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Sakina Shivji</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>July, 1998</th>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <th>23</th>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <th>Chicago, IL</th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+14079892379">(407) 989 2379</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:shivjisakina@gmail.com">
                        shivjisakina@gmail.com
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <th>LinkedIn</th>
                    <th>
                      <a href="https://www.linkedin.com/in/sakinashivji/">sakinashivji</a>
                    </th>
                  </tr>
                  <tr>
                    <th>GitHub</th>
                    <th>
                      <a href="https://github.com/shivjisakina">shivjisakina</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/resume.pdf" download="SakinaShivjiResume">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Rightpoint Consulting</h5>
                          <span>( March 2020 — Current )</span>
                        </div>
                        <h3>Developer 1 -{">"} Developer 2</h3>
                        <p>Promoted in less than 8 months to Developer 2 based on impact made as a UI Developer with a high-profile client</p>
                        <p>Took on new challenges and learned front-end technologies (i.e., Angular/React) based on ever-changing project needs</p>
                        <p>Helped in various aspects of projects (i.e backend, QA) that were outside of assigned role to ensure timely and successful project delivery.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Perficient Inc.</h5>
                          <span>( September 2018 — March 2020 )</span>
                        </div>
                        <h3>Technical Consultant</h3>
                        <p>Promoted from Associate to Technical Consultant based on IBM work for large retailers, financial service firms, electrical companies, and being able to run on-site training sessions for clients.</p>
                        <p>Transitioned to the Adobe BU to assist with the increasing demand for front end AEM development work using HTL.</p>
                        <p>Built front end components using HTML, CSS/SASS, and JavaScript which was manipulated for use in AEM.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Perficient Inc.</h5>
                          <span>( September 2017 — September 2018 )</span>
                        </div>
                        <h3>Associate Technical Consultant</h3>
                        <p>Part of the IBM Commerce group focused on delivering IBM solutions to various clients built in CoreMedia, Node.js, and Java.</p>
                        <p>Customizing front end using Apache Freemarker Templating, SASS, and JS.</p>
                        <p>Developing Node.js applications using various NPM packages to help clients manage trade shows and catalogs.</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Trilogy Education (Now 2U)</h5>
                          <span>( August 2017 — January 2019 )</span>
                        </div>
                        <h3>Full Stack Web Development Tutor</h3>
                        <p>Tutoring students from UCF, UCLA, UT (Austin), and more colleges around the US through their Full Stack Web Development boot camp</p>
                        <p>Technologies include: HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, Express.js, React.js, MySQL, MongoDB, and Handlebars</p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Develop Robots LLC</h5>
                          <span>( January 2012 — January 2016 )</span>
                        </div>
                        <h3>Social Media Manager {"&"} Content Writer</h3>
                        <p>Implemented SEO techniques for our tourism, real estate, and entertainment clients.</p>
                        <p>Wrote content for blogs, Twitter, and Instagram containing keywords to bring further
traffic and raise Google rankings.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>College of Dupage</h5>
                          <span>( March 2020 — 2023 )</span>
                        </div>
                        <h3>Associates of Science in Computer Science</h3>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>IBM</h5>
                          <span>( April 2018 )</span>
                        </div>
                        <h3>CoreMedia Certified FrontEnd Developer</h3>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>University of Central Florida</h5>
                          <span>( August 2017 )</span>
                        </div>
                        <h3><a href="https://www.credly.com/preserved-badge/14329524" target="_blank">Full Stack Web Development (Certificate)</a></h3>
                        <p>
                          Attended a Full Time Full Stack Bootcamp to learn browser-based technologies such as HTML, CSS, JavaScript, server-side development technologies including Express, MERN stack, and Security/Session Storage, databases such as MySQL and MongoDB, and deployment methods on Git and Heroku.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">HTML5, CSS3, SASS</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={85}>
                    <div className="item_in">
                      <h3 className="progress_title">Bootstrap, Material</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "15%" }}
                      >
                        85%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={92}>
                    <div className="item_in">
                      <h3 className="progress_title">Javascript Fundamentals</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "8%" }}
                      >
                        92%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={75}>
                    <div className="item_in">
                      <h3 className="progress_title">React, Typescript, Angular, jQuery, Node, Express </h3>
                      <span
                        className="progress_percent"
                        style={{ right: "25%" }}
                      >
                        75%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={90}>
                    <div className="item_in">
                      <h3 className="progress_title">Working with Design Tools (Figma, Zeplin)</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "10%" }}
                      >
                        90%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={70}>
                    <div className="item_in">
                      <h3 className="progress_title">Testing Frameworks: Jasmine, Chai, Nightmare</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "30%" }}
                      >
                        70%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "70%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={55}>
                    <div className="item_in">
                      <h3 className="progress_title">MySQL, MongoDB</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "45%" }}
                      >
                        55%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "55%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={86}>
                    <div className="item_in">
                      <h3 className="progress_title">CMS: IBM CoreMedia, Wordpress, AEM, Unqork, Webflow</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "14%" }}
                      >
                        86%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "86%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                    A creative developer with a love for well-written code and constant learning oppurtunities.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
