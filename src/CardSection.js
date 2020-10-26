import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card 
                title="Card title" 
                description="Some quick example text to build on the card title and make up
                    the bulk of the card's content." 
                btnName="Go somewhere" 
            />
          </div>
          <div className="col-4">
            <Card 
                title="Card title" 
                description="Some quick example text to build on the card title and make up
                    the bulk of the card's content." 
                btnName="Go somewhere" 
            />
          </div>
          <div className="col-4">
            <Card 
                title="Card title" 
                description="Some quick example text to build on the card title and make up
                    the bulk of the card's content." 
                btnName="Go somewhere" 
            />  
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
