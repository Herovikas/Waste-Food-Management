import React from "react";
import Carousel from "react-elastic-carousel";



const breakPoints = [
  { width: 200, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },

];

export default function Slid() {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <img src="/1.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/2.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/3.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/4.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/5.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/6.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/7.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        <img src="/8.png" className="rounded-corners" alt="1stImage" style={{height:'200px', width:'200px'}}/>
        </Carousel>
      </div>
    </>
  );
}

