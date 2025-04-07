import React from "react";
import { Link } from "react-router-dom";
const DestinationList = () => {
  const destinations = [
    {
      id: 1,
      name: "Mombasa",
      no_of_trips: "2",
      image: "destinations/mombasa.jpg",
    },
    {
      id: 2,
      name: "Baringo",
      no_of_trips: "20",
      image: "destinations/baringo.jpg",
    },
    {
      id: 3,
      name: "Maasai Mara",
      no_of_trips: "3",
      image: "destinations/maasai.jpg",
    },
  ];
  return (
    <>
      <div className="destinations destination-list categories row mt-20-vh position-relative">
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <p className="title-italic fw-bold w-100 d-flex justify-content-center">
            Top Destinations
          </p>
          <h5 className="section-title fw-bold justify-content-center">
            Tour Destinations
          </h5>
        </div>
        <div className="destination-inner tours mt-10-vh col-100 d-flex flex-wrap">
          {destinations.map((destination) => (
            <div className="card-wrapper col-3 vh-60" key={destination.id}>
              <Link
                to={`/destination/${destination.name}`}
                className="dft-color"
              >
                <div className="card h-100 position-relative">
                  <div className="destination-card-text f-14 text-white position-absolute">
                    ({destination.no_of_trips} Trips)
                  </div>
                  <img
                    className="card-img-top h-80"
                    src={destination.image}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body mt-2">
                  {destination.name} <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DestinationList;
