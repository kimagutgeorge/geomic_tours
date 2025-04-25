import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactsContent = () => {
  const position = [-3.9768291, 39.7137181]; // [latitude, longitude]
  return (
    <>
      <div className="destinations contacts categories row mt-10-vh position-relative">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <p className="title-italic fw-bold w-100 d-flex justify-content-center">
            Get In Touch
          </p>
          <h5 className="section-title fw-bold justify-content-center">
            Our Contact Information
          </h5>
        </div>
        <div className="destination-inner tours mt-10-vh col-100 d-flex justify-content-center">
          <div className="card recent-post contact-card d-flex flex-row flex-no-wrap justify-content-center">
            <div
              className="contact-card-icon bg-primary d-flex justify-content-center rounded-circle"
              style={{
                width: "70px",
                height: "70px",
              }}
            >
              <div className="h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-location-dot fs-4 text-white"></i>
              </div>
            </div>
            <div className="conta-card-text ms-2">
              <p className="section-title" style={{ cursor: "default" }}>
                Our Address
              </p>
              <p className="dft-color-2">Tom Mboya Street, Mombasa</p>
            </div>
          </div>
          {/* end of card */}
          <div className="card recent-post contact-card d-flex flex-row flex-no-wrap justify-content-center">
            <div
              className="contact-card-icon bg-primary d-flex justify-content-center rounded-circle"
              style={{
                width: "70px",
                height: "70px",
              }}
            >
              <div className="h-100 d-flex flex-column justify-content-center">
                <i className="fa-solid fa-phone fs-4 text-white"></i>
              </div>
            </div>
            <div className="conta-card-text ms-2">
              <p className="section-title" style={{ cursor: "default" }}>
                Phone Number
              </p>
              <p className="dft-color-2">+254 759 200 998</p>
              <p className="dft-color-2">+254 789 373 600</p>
            </div>
          </div>
          {/* end of card */}
          <div className="card recent-post contact-card d-flex flex-row flex-no-wrap justify-content-center">
            <div
              className="contact-card-icon bg-primary d-flex justify-content-center rounded-circle"
              style={{
                width: "70px",
                height: "70px",
              }}
            >
              <div className="h-100 d-flex flex-column justify-content-center">
                <i className="fa-regular fa-envelope fs-4 text-white"></i>
              </div>
            </div>
            <div className="conta-card-text ms-2">
              <p className="section-title" style={{ cursor: "default" }}>
                Email
              </p>
              <p className="dft-color-2">info@gemictours.com</p>
              <p className="dft-color-2">gemictours@gmail.com</p>
            </div>
          </div>
          {/* end of card */}
        </div>
      </div>
      <div className="w-100 mt-10-vh vh-80 position-relative">
        <div className="position-absolute ms-4 w-50 h-100 d-flex flex-column justify-content-center">
          <div className="w-100 bg-white rounded-3" style={{ zIndex: "1000" }}>
            <p className="section-title mt-4 ms-4 fs-4">Contact Us</p>
            <form className="form-contact">
              <div className="p-4 d-flex flex-wrap w-100">
                <div className="w-100 d-flex flex-no-wrap ml-2 w-100">
                  <div className="form-group w-50 d-flex flex-no-wrap rounded-0 mt-2">
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
                  <div className="form-group w-50 ms-2 d-flex flex-no-wrap rounded-0 mt-2">
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
                </div>

                <div className="form-group col-12  d-flex flex-no-wrap rounded-0 mt-4">
                  <input
                    type="text"
                    className="contact-control col-10"
                    placeholder="Subject"
                  />
                  <div className="icon-holder h-100 d-flex justify-content-center col-2">
                    <div className="d-flex flex-column h-100 justify-content-center"></div>
                  </div>
                </div>
                <div className="form-group col-12  d-flex flex-no-wrap rounded-0 mt-4">
                  <textarea
                    className="contact-control col-10"
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

        <MapContainer
          className="position-absolute w-100 h-100"
          center={position}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>GeoMic Tours</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
export default ContactsContent;
