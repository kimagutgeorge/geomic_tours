import React from "react";

const ContactsContent = () => {
  return (
    <>
      <div className="destinations contacts categories row mt-20-vh position-relative">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <p className="title-italic fw-bold w-100 d-flex justify-content-center">
            Get In Touch
          </p>
          <h5 className="section-title fw-bold justify-content-center">
            Our Contact Information
          </h5>
        </div>
        <div className="destination-inner tours mt-10-vh col-100 d-flex justify-content-center">
          <div className="card recent-post contact-card d-flex flex-no-wrap">
            <p className="section-title">Our Address</p>
            <p className="dft-color-2">Tom Mboya Street, Mombasa</p>
          </div>
          {/* end of card */}
          <div className="card recent-post contact-card d-flex ">
            <p className="section-title">Phone Number</p>
            <p className="dft-color-2">+254 759 200 998</p>
            <p className="dft-color-2">+254 789 373 600</p>
          </div>
          {/* end of card */}
          <div className="card recent-post contact-card d-flex justify-content-center ">
            <p className="section-title">Email</p>
            <p className="dft-color-2">info@gemictours.com</p>
            <p className="dft-color-2">gemictours@gmail.com</p>
          </div>
          {/* end of card */}
        </div>
        <div className="destination-inner tours mt-10-vh col-100 d-flex justify-content-center">
          <form className="form-contact">
            <div className="contact-card d-flex flex-wrap w-100">
              <div className="form-group col-6  d-flex flex-no-wrap rounded-0">
                <input
                  type="text"
                  className="contact-control col-10"
                  placeholder="Your Name"
                />
                <div className="icon-holder h-100 d-flex justify-content-center col-2">
                  <div className="d-flex flex-column h-100 justify-content-center">
                    <i className="fa-solid fa-user dft-color-2 form-icon"></i>
                  </div>
                </div>
              </div>
              <div className="form-group col-6  d-flex flex-no-wrap rounded-0">
                <input
                  type="text"
                  className="contact-control col-10"
                  placeholder="Your Email"
                />
                <div className="icon-holder h-100 d-flex justify-content-center col-2">
                  <div className="d-flex flex-column h-100 justify-content-center">
                    <i className="fa-solid fa-envelope dft-color-2 form-icon"></i>
                  </div>
                </div>
              </div>
              <div className="form-group col-12  d-flex flex-no-wrap rounded-0">
                <input
                  type="text"
                  className="contact-control col-10"
                  placeholder="Subject"
                />
                <div className="icon-holder h-100 d-flex justify-content-center col-2">
                  <div className="d-flex flex-column h-100 justify-content-center"></div>
                </div>
              </div>
              <div className="form-group col-12  d-flex flex-no-wrap rounded-0">
                <textarea
                  className="contact-control col-10"
                  placeholder="Your Message"
                ></textarea>
                <div className="icon-holder h-100 d-flex justify-content-center col-2">
                  <div className="d-flex flex-column h-100 justify-content-center">
                    <i className="fa-solid fa-message dft-color-2 form-icon"></i>
                  </div>
                </div>
              </div>
              <div
                className="form-group col-12  d-flex flex-no-wrap rounded-0"
                style={{ border: "0px" }}
              >
                <button className="btn-default-light">
                  <span className="text-white">
                    Send Message{" "}
                    <i className="fa-solid fa-paper-plane text-white"></i>
                  </span>
                </button>
              </div>
              {/* end of form class */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactsContent;
