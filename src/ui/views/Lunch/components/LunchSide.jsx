import React from "react";

export default function LunchSide() {

  return (
    
    <div className="container lunch__soup-padding">
        <h2 className="lunch__soup-heading">Side Dishes</h2>

        <div className="food__image-grid">
            <div className="food__image-text-box">
                <h3>Becky's Baked Beans</h3>
                <div className="blue-line"></div>
                <p>
                    Sweet BBQ flavors, combined with ground beef, bacon and 5 different types of beans.  Delicious!
                </p>
                <p>
                    Full Pan- $80, Serves 40-50 <br></br>
                    Half Pan- $40, Serves 20-25
                </p>
            </div>
            <div className="lunch__side-beans"></div>            
        </div>
        <br></br>

        <div className="food__image-grid">            
            <div className="lunch__side-mac food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Mac N' Cheese</h3>
                <div className="blue-line"></div>
                <p>
                    A rich, creamy blend of cheeses and pasta, providing that perfect comfort food that the adults enjoy just as much as the kids.
                </p>
                <p>
                    Full Pan- $140, Serves 50-60<br></br>
                    Half Pan- $70, Serves 25-30
                </p>
            </div>
        </div>
      
    </div>
  );
}