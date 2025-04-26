import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import

const SingleTripContent = () => {
  const view_buttons = [
    { id: "Overview", label: "Overview" },
    { id: "Itinerary", label: "Itinerary" },
    { id: "Cost", label: "Cost" },
    { id: "FAQs", label: "FAQs" },
    { id: "Map", label: "Map" },
  ];
  // includes
  const cost_includes = [
    {
      id: 1,
      content:
        "Pick-up or Drop-off service from and to Airport(in our own vehicle)",
    },
    {
      id: 2,
      content: "Transportation to and from!!",
    },
    {
      id: 3,
      content:
        "Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment",
    },
    {
      id: 4,
      content:
        "Transportation, food, accommodation and insurance of Guide during the trip",
    },
    {
      id: 4,
      content:
        "Down jacket, all-season sleeping bag, duffel bag and trekking map(in case if you don’t have your own. Down jacket, sleeping bag and duffel bag must be returned after completion of the trip)",
    },
    {
      id: 5,
      content: "ll the required permits and paperwork",
    },
  ];
  // excudes
  const cost_excludes = [
    {
      id: 1,
      content: "International Airfare",
    },
    {
      id: 1,
      content: "Visa Charges",
    },
    {
      id: 1,
      content:
        "Hotel Expenses(In Kathmandu, some packages do include hotel expenses)",
    },
    {
      id: 1,
      content: "Your travel and medical insurance",
    },
  ];
  // faqs
  const faqs = [
    {
      id: 1,
      heading: "headingOne",
      idCollapse: "#collapseOne",
      collapse: "collapseOne",
      headingText: "How fit do I need to be to do this trek?",
      content:
        "Annapurna Base Camp is a Grade B or a moderately difficult trekking route. So any fit person can do this trek, even if you do not have any previous experience. You should be aware of what to expect and mentally prepare for it. Then, as long as you will too, you can.",
    },
    {
      id: 2,
      heading: "headingTwo",
      idCollapse: "#collapseTwo",
      collapse: "collapseTwo",
      headingText:
        "How long do we walk every day when doing Annapurna Base Camp trekking?",
      content:
        "Annapurna Base Camp is a Grade B or a moderately difficult trekking route. So any fit person can do this trek, even if you do not have any previous experience. You should be aware of what to expect and mentally prepare for it. Then, as long as you will too, you can.",
    },
  ];
  //iterinary
  const tour_itinerary = [
    {
      id: 1,
      heading: "headingOne",
      idCollapse: "#collapseOne",
      collapse: "collapseOne",
      headingText:
        "Day 1 : Kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity.",
      content:
        "Arrive at Tribhuwan International Airport, Kathmandu, you are welcomed by the team and then you will be transferred to your hotel. This trail goes through Ghorepani Poon Hill. Normally, the trek starts like Pokhara to Nayapul and ends like Phedi to Pokhara. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.",
    },
    {
      id: 2,
      heading: "headingTwo",
      idCollapse: "#collapseTwo",
      collapse: "collapseTwo",
      headingText: "Day 2 : Drive to Nayapul and trek to Ulleri",
      content:
        "While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. The evolution of technology in such diverse fields as horse tack and bullet trains has contributed to this trend.",
    },
    {
      id: 3,
      heading: "headingThree",
      idCollapse: "#collapseThree",
      collapse: "collapseThree",
      headingText: "Day 3 : Trek to Ghorepani",
      content:
        "The Palace of Fifty five Windows: This magnificent palace was built during the reign of King Yakshya Malla in A.D. 1427 and was subsequently remodeled by King Bhupatindra Malla in the seventeenth century. Among the brick walls with their gracious setting and sculptural design, is a balcony with Fifty five Windows, considered to be a unique masterpiece of woodcarving.",
    },
    {
      id: 4,
      heading: "headingFour",
      idCollapse: "#collapseFour",
      collapse: "collapseFour",
      headingText:
        "Day 4 : Early trek to Poon Hill, Back to Ghorepani and Trek to Tadapani",
      content:
        "The Palace of Fifty five Windows: This magnificent palace was built during the reign of King Yakshya Malla in A.D. 1427 and was subsequently remodeled by King Bhupatindra Malla in the seventeenth century. Among the brick walls with their gracious setting and sculptural design, is a balcony with Fifty five Windows, considered to be a unique masterpiece of woodcarving.The Palace of Fifty five Windows: This magnificent palace was built during the reign of King Yakshya Malla in A.D. 1427 and was subsequently remodeled by King Bhupatindra Malla in the seventeenth century. Among the brick walls with their gracious setting and sculptural design, is a balcony with Fifty five Windows, considered to be a unique masterpiece of woodcarving.",
    },
  ];
  const [activeView, setActiveView] = useState("Overview");
  const position = [-3.9768291, 39.7137181]; // [latitude, longitude]

  return (
    <>
      <div className="destinations services categories row mt-20-vh position-relative">
        <div className="destination-inner tours col-100 d-flex flex-wrap">
          <div className="row">
            <div className="col-6 vh-70 d-flex justify-content-center">
              <div className="col-12 d-flex flex-column h-100 justify-content-center overflow-hidden">
                <div className="h-100 w-100 rounded-3 overflow-hidden img-scallable">
                  <img src="/slider/slider2.jpg" className="h-100 w-auto" />
                </div>
              </div>
            </div>
            <div className="col-6 vh-70 d-flex justify-content-center">
              <div className="col-12 d-flex flex-column h-100 justify-content-center overflow-hidden">
                <div className="h-50 w-100 rounded-3 overflow-hidden postition-relative img-scallable">
                  <div
                    className="destination-card-text f-14 text-white position-absolute"
                    style={{ cursor: "pointer" }}
                  >
                    Gallery <i className="fa-solid fa-image text-white"></i>
                  </div>
                  <img src="/slider/slider2.jpg" className="w-100 h-auto" />
                </div>
                <div className="h-50 w-100 mt-4 d-flex">
                  <div className="h-100 w-50 rounded-3 me-2 overflow-hidden img-scallable">
                    <img
                      src="/destinations/baringo.jpg "
                      className="h-100 w-auto "
                    />
                  </div>
                  <div className="h-100 w-50 rounded-3 overflow-hidden img-scallable">
                    <img
                      src="/destinations/baringo.jpg "
                      className="h-100 w-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* iterinary */}
          <div className="mt-5-vh row w-100 d-flex position-relative">
            <div className="col-8 d-block">
              <div className="w-100">
                <div className="w-100 d-flex row">
                  <div className="col-10">
                    <h5 className="section-title mt-2">Island Peak Climbing</h5>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <div className="d-card rounded overflow-hidden">
                      <div className="w-100 h-50 d-flex justify-content-center bg-light">
                        <div className="h-100 d-flex flex-column justify-content-center">
                          <h5 className="text-white fs-3">3</h5>
                        </div>
                      </div>
                      <div className="w-100 h-50 d-flex justify-content-center">
                        <div className="h-100 d-flex flex-column justify-content-center">
                          <p className="text-muted f-14 mb-0">Days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tour details */}
              <div className="w-100 card rounded-0 mt-5-vh p-4">
                <div className="w-100 mb-2">
                  <h5 className="section-title mt-2 fs-3 ">Trip Info</h5>
                </div>
                <div className="w-100 d-flex flex-wrap">
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-building fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Accomodation</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">
                        5 Start Hotels
                      </h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-plane-departure fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Departure City</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Nairobi</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-plane-arrival fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Arrival City</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Eldoret</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-thumbs-up fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Best Season</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Jan - Apr</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-check fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">
                        Tour Availability
                      </p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Available</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-bus fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Transportation</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Bus, Car</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-map fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Destination</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">Taita Taveta</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-person fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Minimum Age</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">10</h4>
                    </div>
                  </div>
                  {/* end of section */}
                  <div className="col-4 d-flex mb-2 p-2">
                    <div className="icon-holder col-2 h-100 d-flex justify-content-center">
                      <div className="h-100 d-flex flex-column justify-content-center">
                        <i className="fa-solid fa-person fs-5 text-secondary"></i>
                      </div>
                    </div>
                    <div className="tex-holder col-9 p-2">
                      <p className="text-secondary f-14 mb-0">Maximu Age</p>
                      <h4 className="text-dark f-15 mb-0 mt-2">30</h4>
                    </div>
                  </div>
                  {/* end of section */}
                </div>
              </div>
              {/* tour details */}
              <div className="w-100 card rounded-0 mt-5-vh p-4">
                <div className="w-100 mb-2 d-flex p-2">
                  {view_buttons.map((button) => (
                    <div className="col-2" key={button.id}>
                      <p
                        className="text-muted"
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveView(button.id)}
                      >
                        {button.label}
                      </p>
                    </div>
                  ))}
                </div>
                {activeView === "Overview" && (
                  <div className="w-100">
                    <p className="fs-3 section-title">Overview</p>
                    <p className="text-muted">
                      The Tiananmen, a gate in the wall of the Imperial City,
                      was built in 1415 during the Ming dynasty. In the 17th
                      century, fighting between Li Zicheng’s rebel forces and
                      the forces of the Manchu-led Qing dynasty caused heavy
                      damage to, or even destroyed, the gate. Tiananmen Square
                      was designed and built in 1651, and has since been
                      enlarged by four times its original size in the 1950s.
                    </p>
                    <p className="text-muted">
                      Near the centre of the square stood the “Great Ming Gate”,
                      the southern gate to the Imperial City, renamed “Great
                      Qing Gate” during the Qing dynasty, and “Gate of China”
                      during the Republican era. Unlike the other gates in
                      Beijing, such as the Tiananmen and the Zhengyangmen, this
                      was a purely ceremonial gateway, with three arches but no
                      ramparts, similar in style to the ceremonial gateways
                      found in the Ming tombs. This gate had a special status as
                      the “Gate of the Nation”, as can be seen from its
                      successive names. It normally remained closed, except when
                      the Emperor passed through. Commoner traffic was diverted
                      to side gates at the western and eastern ends of the
                      square, respectively. Because of this diversion in
                      traffic, a busy marketplace, called “Chess Grid Streets”,
                      was developed in the big, fenced square to the south of
                      this gate.
                    </p>

                    <p className="fs-5 section-title mt-4">Trip Highlights</p>
                    <p>
                      <i className="fa-regular fa-circle-check my-icon"></i>{" "}
                      <span className="text-muted">
                        Trek to the world-famous Everest Base Camp
                      </span>
                    </p>
                    <p>
                      <i className="fa-regular fa-circle-check my-icon"></i>{" "}
                      <span className="text-muted">
                        Enjoy the amazing view of the Himalayas from Kala
                        Patthar
                      </span>
                    </p>
                    <p>
                      <i className="fa-regular fa-circle-check my-icon"></i>{" "}
                      <span className="text-muted">
                        Travel through the Sherpa villages of Namche, Khumjung,
                        Khunde, and Dingboche
                      </span>
                    </p>
                    <p>
                      <i className="fa-regular fa-circle-check my-icon"></i>{" "}
                      <span className="text-muted">
                        Visit Tengboche the biggest and oldest monastery n the
                        region.
                      </span>
                    </p>
                  </div>
                )}
                {/* Itinerary */}
                {activeView === "Itinerary" && (
                  <div className="w-100">
                    {" "}
                    <p className="fs-3 section-title">Itinerary</p>
                    <div className="accordion border-0" id="accordionItinerary">
                      {tour_itinerary.map((item, index) => (
                        <div className="accordion-item border-0" key={item.id}>
                          <h2
                            className="accordion-header d-flex flex-no-wrap"
                            id={item.heading}
                          >
                                <div
                                  className={(tour_itinerary.length - 1 === index || index === 0) ? "icon d-flex justify-content-center bg-primary rounded-circle" : "icon d-flex justify-content-center rounded-circle"}
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    minWidth: "50px",
                                  }}
                                >
                                  {(tour_itinerary.length - 1 === index || index  === 0) && (
                                    <div className="d-flex flex-column justify-content-center h-100">
                                    <i className="fa-solid fa-location-dot fs-5 text-white"></i>
                                  </div>
                                  )}
                                  
                                </div>
                              

                            <button
                              className="accordion-button ms-4 fs-5 fs-5 section-title"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={item.idCollapse}
                              aria-expanded="true"
                              aria-controls={item.collapse}
                            >
                              {item.headingText}
                            </button>
                          </h2>
                          <div
                            id={item.collapse}
                            className="accordion-collapse collapse show"
                            aria-labelledby={item.heading}
                            data-bs-parent="#accordionItinerary"
                          >
                            <div className="accordion-body d-flex flex-no-wrap">
                            <div
                                  className="icon d-flex justify-content-center rounded-circle"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    minWidth: "50px",
                                  }}
                                >
                                </div>
                              <div className="ms-4" >
                                {item.content}
                              </div>
                              </div>
                          </div>
                        </div>
                      ))}

                      {/* end of item */}
                    </div>
                  </div>
                )}
                {/* price */}
                {activeView === "Cost" && (
                  <div className="w-100">
                    {" "}
                    <p className="fs-3 section-title">Cost</p>
                    <p className="fs-5 section-title ">The Cost Includes</p>
                    <div className="w-100 mt-4">
                      {cost_includes.map((cost) => (
                        <p key={cost.id}>
                          <i className="fa-regular fa-circle-check my-icon"></i>{" "}
                          <span className="text-muted">{cost.content}</span>
                        </p>
                      ))}
                    </div>
                    <p className="fs-5 section-title mt-4">The Cost Excludes</p>
                    <div className="w-100 mt-4">
                      {cost_excludes.map((cost) => (
                        <p key={cost.id}>
                          <i className="fa-solid fa-circle-xmark text-danger"></i>{" "}
                          {cost.content}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {/* FAQs */}
                {activeView === "FAQs" && (
                  <div className="w-100">
                    {" "}
                    <p className="fs-3 section-title">FAQs</p>
                    <div className="accordion mt-4" id="accordionFaqs">
                      {faqs.map((faq) => (
                        <div className="accordion-item border-0">
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
                )}
                {/* Map */}
                {activeView === "Map" && (
                  <div className="w-100" style={{ height: "700px" }}>
                    <MapContainer
                      className="w-100 h-100"
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
                )}
              </div>
              {/* book tour */}
              <div className="w-100 card rounded-0 mt-5-vh p-4">
                <div className="w-100 mb-2">
                  <h5 className="section-title mt-2 fs-4 fw-normal ">
                    Send your booking details via the form below
                  </h5>
                  <p className="text-muted">
                    Trip name: <span className="text-danger">*</span> Island
                    Peak Climbing
                  </p>
                </div>
                <div className="w-100 enquiry-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-0 p-3"
                      placeholder="Enter Your Name *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control rounded-0 p-3 mt-3"
                      placeholder="Enter Your Email *"
                      required
                    />
                  </div>
                  <div className="w-100 d-flex">
                    <div className="form-group col-6">
                      <select
                        className="form-control rounded-0 p-3 mt-3"
                        required
                        onFocus={(e) => (e.target.size = 10)}
                        onBlur={(e) => {
                          e.target.size = 1;
                        }}
                        onChange={(e) => {
                          e.target.size = 1;
                          e.target.blur();
                        }}
                      >
                        <option selected disabled>
                          Select Country *
                        </option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo (Congo-Brazzaville)">
                          Congo (Congo-Brazzaville)
                        </option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic (Czechia)">
                          Czech Republic (Czechia)
                        </option>
                        <option value="Democratic Republic of the Congo">
                          Democratic Republic of the Congo
                        </option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Eswatini (fmr. 'Swaziland')">
                          Eswatini (fmr. 'Swaziland')
                        </option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Greece">Greece</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">Micronesia</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar (formerly Burma)">
                          Myanmar (formerly Burma)
                        </option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="North Korea">North Korea</option>
                        <option value="North Macedonia">North Macedonia</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine State">Palestine State</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">
                          United States of America
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City">Vatican City</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    <div className="form-group col-6">
                      <input
                        type="number"
                        className="form-control rounded-0 p-3 mt-3"
                        placeholder="Enter Your Phone Number *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control rounded-0 p-3 mt-3"
                      placeholder="Enter Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn bg-primary rounded-0 p-3 mt-3 w-100 text-white">
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
              {/* bog card inner end */}
            </div>
            {/* 2nd column */}
            <div className="col-4 search-side">
              <div className="card mt-4">
                <div
                  className="destination-card-text f-14 text-white"
                  style={{
                    cursor: "pointer",
                    width: "fit-content",
                    marginLeft: "0px",
                  }}
                >
                  12% Off
                </div>
                <div className="col-12 w-100 d-flex flex-wrap mt-4 p-2">
                  <div className="w-100 p-2 d-flex border-bottom">
                    <div className="w-50 d-flex flex-column p-2">
                      <p className="text-secondary f-14">
                        From{" "}
                        <span className="text-danger text-decoration-line-through">
                          $530
                        </span>
                      </p>
                      <h5 className="text-secondary fw-bold f-22">
                        $500{" "}
                        <span className="text-muted f-15 fw-lighter">
                          / Adult
                        </span>
                      </h5>
                    </div>
                    <div className="w-50 d-flex flex-column border-left p-2">
                      <p className="text-secondary f-14">
                        From{" "}
                        <span className="text-danger text-decoration-line-through">
                          $300
                        </span>
                      </p>
                      <h5 className="text-secondary fw-bold f-22">
                        $200{" "}
                        <span className="text-muted f-15 fw-lighter">
                          / Child
                        </span>
                      </h5>
                    </div>
                    {/* end of cards inner */}
                  </div>
                  <div className="w-100 d-flex p-2 mt-2 justify-content-center">
                    <button className="btn-default-dark w-100">
                      <span className="text-white">CHECK AVAILABILITY</span>
                    </button>
                  </div>
                  <p className="mt-4 f-14 text-muted">
                    Need help with booking?
                    <a href="#">
                      <span className="text-primary"> Send Us a Message</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTripContent;
