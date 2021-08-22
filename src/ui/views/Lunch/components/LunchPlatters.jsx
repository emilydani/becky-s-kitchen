import React from "react";

export default function LunchPatter() {

  return (
    
    <div className="container lunch__soup-padding">
        <h2 className="lunch__soup-heading">Platters</h2>

        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Deli Platter</h3>
                <div className="red-line"></div>
                <p>
                    This meat platter contains roast beef, ham, and turkey. The platter is approximately 6-7 lbs. of meat. A condiment platter of lettuce, tomato, and pickles for $30 can also be provided. It is the perfect platter to go with cheese and rolls.                 
                </p>
                <p>
                    One Platter- $75, Serves 50-60 
                </p>
            </div>
            <div className="lunch__platter-deli food__image-img"></div>
        </div> 
        <br></br>           

        <div className="food__image-grid">            
            <div className="lunch__platter-cheese food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Cheese Platter</h3>
                <div className="red-line"></div>
                <p>
                    This Cheese platter contains swiss, cheddar and provolone. The platter is approximately 4-5 lbs. of cheese. A condiment platter of lettuce, tomato, and pickles for $30 can also be provided. It is the perfect platter to go with deli meat and rolls.
                </p>
                <p>
                    One Platter- $30, Serves 50-60 
                </p>
            </div>
        </div>
        <br></br>

        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Fruit Platter</h3>
                <div className="red-line"></div>
                <p>
                    Choose 3-4 fresh fruit of the season, strawberries, grapes, pineapple, melons, apples or oranges. Comes with a fruit dip upon request.                 
                </p>
                <p>
                    One Platter- $75, Serves 40-50 
                </p>
            </div>
            <div className="lunch__platter-fruit food__image-img"></div>
        </div> 
        <br></br>  

        <div className="food__image-grid">            
            <div className="lunch__platter-veggie food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Veggie Platter</h3>
                <div className="red-line"></div>
                <p>
                    Veggie platters have baby carrots, celery sticks, cherry tomatoes, cauliflower, olives, and baby dill pickles—unless otherwise requested. It is served with ranch dip.
                </p>
                <p>
                    One Platter- $50, Serves 40-50 
                </p>
            </div>
        </div>
        <br></br>   
      
    </div>
  );
}