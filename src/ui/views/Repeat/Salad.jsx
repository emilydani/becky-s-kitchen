import React from "react";

export default function Salad() {

  return (
    
    <div className="container lunch__soup-padding">
        <h2 className="lunch__soup-heading">Salads</h2>

        <div className="food__image-grid">
            <div className="food__image-text-box">
                <h3>Spinach Salad,</h3>
                <h3>Frog Eye Salad,</h3>
                <h3>Potato Salad,</h3>
                <h3>Cookie Salad, or</h3>
                <h3>Garden Salad</h3>
                <div className="red-line"></div>
                <p>Full Pan- $80, Serves 40-50 <br></br> Half Pan- $40, Serves 20-25</p>
            </div>
            <div className="lunch__salad-spinach"></div>            
        </div>
        <br></br>

        <div className="food__image-grid">            
            <div className="lunch__salad-pasta food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Mom's Fruit Salad, or</h3>
                <h3>Broccoli Cauliflower Salad</h3>
                <div className="red-line"></div>
                <p>Full Pan- $90, Serves 40-50 <br></br> Half Pan- $45, Serves 20-25</p>
            </div>
        </div>
        <br></br>

        <div className="food__two-grid">
            <div className="food__two-grid-box">
                <h3>Fresh Garden Salad</h3>
                <div className="red-line"></div>
                <p>
                Delicious garden salad served with your choice of dressing: ranch, blue cheese, and Catalina. All dressings are homemade recipes. 
                </p>
                <p>
                Full Pan- $60, Serves 40-50 <br></br>
                Half Pan- $30, Serves 20-25
                </p>
            </div>
        </div>
        <br></br>
      
    </div>
  );
}