import React from "react";
import "leaflet/dist/leaflet.css";

const FaqsContent = () => {
  // faqs
  const faqs = [
    {
      id: 1,
      heading: "headingOne",
      idCollapse: "#collapseOne",
      collapse: "collapseOne",
      headingText: "Q1. How do I start the process of buying a home?",
      content:
        "The open-concept layout seamlessly connects the living room with the fully equipped kitchen, boasting top-of-the-line appliances and all the essentials for preparing delicious meals.",
    },
    {
      id: 2,
      heading: "headingTwo",
      idCollapse: "#collapseTwo",
      collapse: "collapseTwo",
      headingText:
        "Q2. What factors should I consider when choosing a neighborhood?",
      content:
        "The responsibility for paying closing costs can vary depending on the terms negotiated between the buyer and the seller, as well as local customs and regulations. In some cases.",
    },
    {
      id: 3,
      heading: "headingThree",
      idCollapse: "#collapseThree",
      collapse: "collapseThree",
      headingText:
        "Q3. How can I determine the right price for selling my property?",
      content:
        "Research the local real estate market to understand current trends, property values, and comparable sales in the area. Knowing the market will give you leverage during negotiations.",
    },
    {
      id: 4,
      heading: "headingFour",
      idCollapse: "#collapseFour",
      collapse: "collapseFour",
      headingText:
        "Q4. What are closing costs and who is responsible for paying them?",
      content:
        "Research the local real estate market to understand current trends, property values, and comparable sales in the area. Knowing the market will give you leverage during negotiations.",
    },
  ];
  return (
    <>
      <div className="destinations contacts categories row mt-10-vh position-relative">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <p className="title-italic fw-bold w-100 d-flex justify-content-center">
            FAQ
          </p>
          <h5 className="section-title fw-bold justify-content-center">
            frequently Asked Questions
          </h5>
        </div>
        <div className="destination-inner mt-10-vh col-100 ">
          <div className="accordion mt-4" id="accordionFaqs">
            {faqs.map((faq) => (
              <div className="accordion-item mt-4 custom-border border">
                <h2
                  className="accordion-header d-flex flex-no-wrap"
                  id={faq.heading}
                >
                  <button
                    className="accordion-button fs-5 fs-5 section-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={faq.idCollapse}
                    aria-expanded="true"
                    aria-controls={faq.collapse}
                  >
                    {faq.headingText}
                  </button>
                </h2>
                <div
                  id={faq.collapse}
                  className="accordion-collapse collapse show"
                  aria-labelledby={faq.heading}
                  data-bs-parent="#accordionFaqs"
                >
                  <div className="accordion-body">{faq.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="destinations contacts categories row mt-10-vh position-relative">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <p className="title-italic fw-bold w-100 d-flex justify-content-center">
            Meet with Our Guide
          </p>
          <h5 className="section-title fw-bold justify-content-center">
            Do You Have Any More Questions?
          </h5>
        </div>
        <div className="destination-inner mt-10-vh col-100 d-flex justify-content-center flex-wrap">
          <form className="w-60 custom-border border rounded-3">
            <div className="p-4 d-flex flex-wrap w-100">
              <div className="w-100 d-flex flex-no-wrap ml-2 w-100">
                <div className="form-group w-50 d-flex flex-no-wrap rounded-0 mt-2">
                  <input
                    type="text"
                    className="contact-control col-10 p-3"
                    placeholder="Your Name"
                  />
                  <div className="icon-holder h-100 d-flex justify-content-center col-2">
                    <div className="d-flex flex-column h-100 justify-content-center">
                      <i className="fa-solid fa-user dft-color-2 form-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="form-group w-50 ms-2 d-flex flex-no-wrap rounded-0 mt-2">
                  <input
                    type="text"
                    className="contact-control col-10 p-3"
                    placeholder="Your Email"
                  />
                  <div className="icon-holder h-100 d-flex justify-content-center col-2">
                    <div className="d-flex flex-column h-100 justify-content-center">
                      <i className="fa-solid fa-envelope dft-color-2 form-icon"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-12  d-flex flex-no-wrap rounded-0 mt-4">
                <input
                  type="text"
                  className="contact-control col-10 p-3"
                  placeholder="Subject"
                />
                <div className="icon-holder h-100 d-flex justify-content-center col-2">
                  <div className="d-flex flex-column h-100 justify-content-center"></div>
                </div>
              </div>
              <div className="form-group col-12  d-flex flex-no-wrap rounded-0 mt-4">
                <textarea
                  className="contact-control col-10 p-3"
                  placeholder="Your Message"
                  style={{ height: "120px" }}
                ></textarea>
                <div className="icon-holder h-100 d-flex justify-content-center col-2">
                  <div className="d-flex flex-column h-100 justify-content-center">
                    <i className="fa-solid fa-message dft-color-2 form-icon"></i>
                  </div>
                </div>
              </div>
              <div
                className="form-group col-12  d-flex flex-no-wrap rounded-0 mt-4"
                style={{ border: "0px" }}
              >
                <button className="btn-default-dark">
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
export default FaqsContent;
