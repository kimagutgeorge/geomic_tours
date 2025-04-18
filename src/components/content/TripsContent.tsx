import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const TripsContent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [typeOpen, settypeisOpen] = useState(true);
  const [showSort, setshowSort] = useState(false);
  const [value, setValue] = useState(3);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  // Calculate the position percentage for the value bubble
  const positionPercentage = ((value - 1) / 6) * 100;

  //trips
  const trips = [
    {
      id: 1,
      name: "3 Days Mombasa",
      destination: "Mombasa",
      category: "Honey Moon",
      image: "destinations/baringo.jpg",
      days: "3",
      description:
        "The Tiananmen, a gate in the wall of the Imperial City, was built in 1415 during the Ming",
      price: "500",
      prev_price: "530",
      discount: "12",
    },
    {
      id: 1,
      name: "At the hilltop",
      destination: "Mt. Kenya",
      category: "Honey Moon",
      image: "destinations/mt-kenya.jpg",
      days: "2",
      description:
        "The Tiananmen, a gate in the wall of the Imperial City, was built in 1415 during the Ming",
      price: "500",
      prev_price: "530",
      discount: "12",
    },
  ];
  return (
    <>
      <div className="destinations trips categories row mt-10-vh position-relative">
        <div className="destination-inner mt-5-vh row w-100 d-flex position-relative">
          <div className="col-3 filters d-flex justify-content-center">
            <div className="filter-inner card">
              <div className="col-12 d-flex flex-no-wrap">
                <div className="col-7">
                  <h4 className="section-title">
                    Filters <i className="fa-solid fa-filter dft-color-2"></i>
                  </h4>
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <p className="f-14 custom-light-color">Clear All</p>
                </div>
              </div>
              <div className="col-12">
                <div className="filter-item w-100">
                  <div
                    className="f-width d-flex flex-no-wrap"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="col-10">
                      <p>Destinations</p>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <i
                        className={`fa-solid ${
                          isOpen ? "fa-angle-up" : "fa-angle-down"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div
                    className={`f-width filter-item-list ${
                      isOpen ? "show" : "hide"
                    }`}
                  >
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Mombasa</span>
                    </li>
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Nairobi</span>
                    </li>
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Taita Taveta</span>
                    </li>
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Maasai Mara</span>
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="filter-item w-100">
                  <p>Price</p>
                  <select className="w-100">
                    <option value="">$500</option>
                    <option value="">$500 - 10, 000</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="filter-item w-100">
                  <p>Days</p>
                  <div className="range-slider-container">
                    <div className="slider-wrapper-relative">
                      <div
                        className="value-bubble"
                        style={{ left: `${positionPercentage}%` }}
                      >
                        {value}
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="7"
                        value={value}
                        onChange={handleChange}
                        className="custom-slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="filter-item w-100">
                  <div
                    className="f-width d-flex flex-no-wrap"
                    onClick={() => settypeisOpen(!typeOpen)}
                  >
                    <div className="col-10">
                      <p>Trip Types</p>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                      <i
                        className={`fa-solid ${
                          typeOpen ? "fa-angle-up" : "fa-angle-down"
                        }`}
                      ></i>
                    </div>
                  </div>
                  <div
                    className={`f-width filter-item-list ${
                      typeOpen ? "show" : "hide"
                    }`}
                  >
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Budget travel</span>
                    </li>
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Cooperate tours</span>
                    </li>
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Nature walk</span>
                    </li>
                    <li className="d-flex flex-wrap-no-wrap w-100">
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span className="dft-color-2">Honey moon</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-page-banner card">
              <div className="d-flex justify-content-end w-100">
                {/* <div className="position-relative">

                </div> */}
                <p className="f-15 postion-relative">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setshowSort(!showSort);
                    }}
                  >
                    <span className="custom-light-color">Sort: </span>
                    <span>Latest</span>
                    <span>
                      <i
                        className={`fa-solid ${
                          showSort ? "fa-angle-down" : "fa-angle-up"
                        }`}
                        style={{
                          fontSize: "16px",
                          marginLeft: "5px",
                          paddingTop: "5px",
                        }}
                      ></i>
                    </span>
                  </span>
                  <div
                    className={`filter-card position-absolute bg-white ${
                      !showSort ? "show" : "hide"
                    }`}
                  >
                    <li>Latest</li>
                    <li>Most Reviewed</li>
                    <li>
                      <span className="custom-light-color">Price: </span> High
                      to Low
                    </li>
                    <li>
                      <span className="custom-light-color">Price: </span> High
                      to Low
                    </li>
                    <li>
                      <span className="custom-light-color">Days: </span> High to
                      Low
                    </li>
                    <li>
                      <span className="custom-light-color">Days: </span> High to
                      Low
                    </li>
                    <li>
                      <span className="custom-light-color">Name: </span> A - Z
                    </li>
                    <li>
                      <span className="custom-light-color">Name: </span> Z- A
                    </li>
                  </div>
                </p>
              </div>
            </div>
            <div className="fiter-page-body d-flex flex-wrap mt-4">
              {trips.map((trip, index) => (
                <div className="card-wrapper col-6">
                  <div className="card tour-card">
                    <img
                      className="card-img-top"
                      src="destinations/baringo.jpg"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <Link to={`/trip/${trip.name}`}>
                        <h5 className="card-title dft-color-2">{trip.name}</h5>
                      </Link>
                      <div className="w-100 d-flex row card-body-fixed">
                        <div className="col-7">
                          <p className="f-14">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="custom-light-color">
                              {trip.description}
                            </span>
                          </p>
                          <p className="f-14">
                            <i className="fa-solid fa-clock"></i>
                            <span className="custom-light-color">
                              {trip.days} Days
                            </span>
                          </p>
                          <p className="f-14">
                            <i className="fa-solid fa-boxes"></i>
                            <span className="custom-light-color">
                              {trip.category}
                            </span>
                          </p>
                          <div className="w-100 description">
                            <p className="custom-light-color">
                              {trip.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-5 tour-card-price">
                          <div className="destination-card-text text-white">
                            {trip.discount}% off
                          </div>
                          <p className="mt-2">
                            <span className="section-title">${trip.price}</span>
                            <span className="f-14 ms-2 custom-light-color text-decoration-line-through">
                              ${trip.prev_price}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-100 card-btn d-flex justify-content-center mt-4">
                        <button className="btn-default-light w-100 mt-2">
                          <Link to={`/trip/${trip.name}`}>
                            <span className="text-white">View Details</span>
                          </Link>
                        </button>
                      </div>
                      <div className="w-100 mt-2">
                        <p
                          className="custom-light-color f-8"
                          style={{ marginBottom: "0px" }}
                        >
                          Available
                        </p>
                        <div className="w-100 calendar-days d-flex flex-no-wrap">
                          <span>
                            {" "}
                            <i className="fa-solid fa-calendar f-14 my-icon"></i>{" "}
                          </span>
                          <span className="ms-2 f-12 dft-color-2">Jan</span>
                          <span className="ms-2 f-12 dft-color-2">Feb</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* end of card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TripsContent;
