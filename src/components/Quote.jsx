import React from "react";
import Star from "../images/5star.png";
import Richard from "../images/RichardS.png"

const starStyle = {
  height: "150px",
  maxwidth: "100%",
  marginBottom: "-40px",
  marginLeft: "-150px",
};

const quoteComponentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(45, 45, 45, 0.5)",
  width: "400px",
};

const paragraphStyle = {
  display: "flex",
  textAlign: "justify",
};
const RichardStyle = {
    height: "70px",
    maxwidth: "100%",
    marginBottom: "-70px",
    marginLeft: "-280px",
    borderRadius: "100%",
  };

function Quote() {
  return (
    <div className='quotestyle' style={quoteComponentStyle}>
      <img src={Star} alt="" style={starStyle} />
      <p style={paragraphStyle}>
        "I don't always clop, but when I do, it's because
        <br />
        of watch. It's incredible. would also like to say
        <br />
        thank you!
      </p>
      <div>
      <img src={Richard} alt="" style={RichardStyle} />
        <h3>Richard Sanchez</h3>
      </div>
    </div>
  );
}

export default Quote;
