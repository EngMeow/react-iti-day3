import React from 'react'
import { NavLink } from 'react-router-dom'

export  function Home() {
  return (
    <div>
      <div>
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Welcome To My Project</div>
      <div className="masthead-heading text-uppercase">It's Nice To Meet You, Eng Sara</div>
      <NavLink className="btn btn-outline-warning btn-xl text-uppercase" to={'/products'}>Show products</NavLink>
    </div>
  </header>
  {/* Services*/}
  <section className="page-section" id="services">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
          </span>
        <img className="img-fluid " src="assets/img/portfolio/1.jpg" alt="..." />
          <h4 className="my-3">Iphones</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
    <img className="img-fluid " src="assets/img/portfolio/1.jpg" alt="..." />
          <h4 className="my-3">Imacs</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-lock fa-stack-1x fa-inverse" />
          </span>
    <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
          <h4 className="my-3">Macbooks</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio Grid*/}
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Portfolio</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <NavLink className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </NavLink>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Threads</div>
              <div className="portfolio-caption-subheading text-muted">Illustration</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 2*/}
          <div className="portfolio-item">
            <NavLink className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
            </NavLink>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Explore</div>
              <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 3*/}
          <div className="portfolio-item">
            <NavLink className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
            </NavLink>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Finish</div>
              <div className="portfolio-caption-subheading text-muted">Identity</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          {/* Portfolio item 4*/}
          <div className="portfolio-item">
            <NavLink className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
            </NavLink>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Lines</div>
              <div className="portfolio-caption-subheading text-muted">Branding</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          {/* Portfolio item 5*/}
          <div className="portfolio-item">
            <NavLink className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
            </NavLink>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Southwest</div>
              <div className="portfolio-caption-subheading text-muted">Website Design</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Portfolio item 6*/}
          <div className="portfolio-item">
            <NavLink className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
            </NavLink>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Window</div>
              <div className="portfolio-caption-subheading text-muted">Photography</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About*/}
  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2009-2011</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2011</h4>
              <h4 className="subheading">An Agency is Born</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2015</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>July 2020</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
  
  {/* Contact*/}
  <section className="page-section" id="contact">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      {/* * * * * * * * * * * * * * * **/}
      {/* * * SB Forms Contact Form * **/}
      {/* * * * * * * * * * * * * * * **/}
      {/* This form is pre-integrated with SB Forms.*/}
      {/* To make this form functional, sign up at*/}
      {/* https://startbootstrap.com/solution/contact-forms*/}
      {/* to get an API token!*/}
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              {/* Name input*/}
              <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div className="form-group">
              {/* Email address input*/}
              <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            <div className="form-group mb-md-0">
              {/* Phone number input*/}
              <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              {/* Message input*/}
              <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
          </div>
        </div>
        {/* Submit success message*/}
        {/**/}
        {/* This is what your users will see when the form*/}
        {/* has successfully submitted*/}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center text-white mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <NavLink to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</NavLink>
          </div>
        </div>
        {/* Submit error message*/}
        {/**/}
        {/* This is what your users will see when there is*/}
        {/* an error submitting the form*/}
        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
        {/* Submit Button*/}
        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
      </form>
    </div>
  </section>
 
    </div>
    </div>
  )
}
