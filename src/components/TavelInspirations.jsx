import React from "react";

const TravelInspiration = () => {
  const travelIdeas = [
    {
      id: 1,
      title: "Weekend of Good",
      image:
        "https://plus.unsplash.com/premium_photo-1661921265709-7f63b001ef98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vla2VuZCUyMG9mJTIwZ29vZHxlbnwwfDB8MHx8fDA%3D",
      alt: "Weekend of Good",
    },
    {
      id: 2,
      title: "Culture and Craft",
      image:
        "https://images.unsplash.com/photo-1474904200416-6b2b7926f26f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VsdHVyZSUyMGFuZCUyMGNyYWZ0fGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Culture and Craft",
    },
    {
      id: 3,
      title: "Rural and Rustic",
      image:
        "https://images.unsplash.com/photo-1725702131100-eaec984eb76c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1cmFsJTIwYW5kJTIwcnVzdGljfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Rural and Rustic",
    },
    {
      id: 4,
      title: "Sun and Sea",
      image:
        "https://images.unsplash.com/photo-1629189251815-be0c8e6f63bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwYW5kJTIwc2VhfGVufDB8MHwwfHx8MA%3D%3D",
      alt: "Sun and Sea",
    },
  ];

  return (
    <section className="travel-inspiration py-5">
      <div className="container">
        <h2 className="text-center mb-3">Travel Inspiration</h2>
        <p className="text-center text-muted mb-4">
          Browse travel ideas by interest, curated by us
        </p>
        <div className="row">
          {travelIdeas.map((idea) => (
            <div
              key={idea.id}
              className="col-md-3 mb-4 d-flex align-items-stretch"
            >
              <div className="card shadow-sm">
                <img src={idea.image} className="card-img-top" alt={idea.alt} />
                <div className="card-body text-center">
                  <h5 className="card-title">{idea.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelInspiration;
