import React from "react";
import Button from './Button'
import '/src/styles.css'

function TextDetails() {
  return (
    <>
      <div className="body-text">
      <h1>Spring Preview Sale</h1>
      <br />
      <div className="body-content">
      <p>Rugs, vases and other objects covered in fur are a rarity</p>
      <p>The only exception is at the entrance to the room</p>
      <p>where you enter with your sword drawn</p>
      <Button className='bodybtn'/>
      </div>
      </div>
      
    </>
  );
}

export default TextDetails;
