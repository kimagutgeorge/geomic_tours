import React, { useState, useRef, useEffect } from "react";
import DefaultButton from "../buttons/DefaultButton";

interface Destination {
  id: number;
  title: string;
  image: string;
}

const Destinations = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(2); // Center card index
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sample data for destinations (you can replace with your actual data)
  const destinations: Destination[] = [
    { id: 1, title: "Maasai Mara", image: "/destinations/maasai.jpg" },
    { id: 2, title: "Lk. Bogoria", image: "/destinations/baringo.jpg" },
    { id: 3, title: "Mombasa", image: "/destinations/mombasa.jpg" },
    { id: 4, title: "Mt. Kenya", image: "/destinations/mt-kenya.jpg" },
    { id: 5, title: "Taita Taveta", image: "/destinations/taita.jpg" },
    { id: 6, title: "Amboseli", image: "/destinations/baringo.jpg" },
    { id: 7, title: "Samburu", image: "/destinations/taita.jpg" },
    { id: 8, title: "Lamu", image: "/destinations/maasai.jpg" },
    { id: 9, title: "Lamu", image: "/destinations/maasai.jpg" },
    { id: 10, title: "Lamu", image: "/destinations/maasai.jpg" },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest card after dragging
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 5; // Assuming 5 visible cards
      const newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);
      setCurrentIndex(newIndex + 2); // Adjust based on your layout
    }
  };

  const handleMouseMoveDrag = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust multiplier for sensitivity
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 5;
      sliderRef.current.scrollLeft = (index - 2) * cardWidth;
    }
  };

  // Auto-center the active card on resize
  useEffect(() => {
    const handleResize = () => {
      goToSlide(currentIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <div
      className="destinations categories row mt-10-vh position-relative"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor Follower */}
      <div
        className="cursor-follower position-absolute d-flex justify-content-center"
        style={{
          top: position.y + "px",
          left: position.x + "px",
          width: "120px",
          zIndex: "10",
          height: "100px",
          borderRadius: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          display: isDragging ? "flex" : "none",
        }}
      >
        <div className="cursor-follower-inner position-relative w-100 h-100">
          <div className="cursor-follower-inner-dark-layout position-absolute w-100 h-100"></div>
          <div className="cursor-follower-text position-absolute w-100 h-100">
            <div className="cursor-follower-text-inner d-flex justify-content-center w-100 h-100">
              <div className="cursor-follower-text-inner-inner d-flex flex-column justify-content-center">
                <p className="text-white">
                  <i className="fa-solid fa-angle-left text-white"></i> DRAG{" "}
                  <i className="fa-solid fa-angle-right text-white"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <p className="title-italic fw-bold w-100 d-flex justify-content-center">
          Top Destinations
        </p>
        <h5 className="section-title fw-bold justify-content-center">
          Tour Destinations
        </h5>
      </div>

      {/* Slider Container */}
      <div
        className="destination-inner mt-5-vh row w-100 d-flex vh-80 position-relative"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMoveDrag}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {/* Destination Cards */}
        {destinations.map((destination, index) => {
          // Calculate position class based on relative position to currentIndex
          let positionClass = "";
          if (index === currentIndex) {
            positionClass = "active";
          } else if (index === currentIndex - 1) {
            positionClass = "card-2";
          } else if (index === currentIndex - 2) {
            positionClass = "card-1";
          } else if (index === currentIndex + 1) {
            positionClass = "card-2-right card-right";
          } else if (index === currentIndex + 2) {
            positionClass = "card-1-right card-right";
          } else {
            positionClass = "hidden-card";
          }

          return (
            <div
              key={destination.id}
              className={`card col-4 ${positionClass} position-absolute overflow-hidden`}
              onClick={() => goToSlide(index)}
            >
              <div className="card-inner position-relative w-100 h-100">
                <div className="card-inner-image position-absolute h-100">
                  <img
                    src={destination.image}
                    className="h-100"
                    alt={destination.title}
                  />
                </div>
                <div className="card-inner-dark-layout bg-black position-absolute w-100 h-100"></div>
                <div className="card-inner-text position-absolute d-flex h-100 w-100 flex-column justify-content-end">
                  <h4 className="m-2 text-white f-15">{destination.title}</h4>
                  <DefaultButton
                    button_text="View All"
                    button_link={`/destination/${destination.title.replace(
                      /\s+/g,
                      "-"
                    )}`}
                    button_classname="btn-default-white m-2"
                    button_span_color="text-white"
                    button_icon="icon"
                    button_icon_color="dark-svg in-btn"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="col-12 d-flex justify-content-center mt-4">
        {destinations.map((_, index) => (
          <button
            key={index}
            className={`mx-1 p-0 rounded-circle ${
              index === currentIndex ? "bg-primary" : "bg-secondary"
            }`}
            style={{
              display: "none",
              width: "10px",
              height: "10px",
              border: "none",
              opacity: index === currentIndex ? 1 : 0.5,
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
