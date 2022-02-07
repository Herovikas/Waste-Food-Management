import React from "react";
import { Link } from "react-router-dom";
export default function AddYourRestaurant() {
  return (
    <>
      <section className="mainy1 boxs">
        <div className="row">
          <div className="col">
            <div className="postionText container" >
              <p>2022 @Food For All</p>
              <span>
                <strong>
                  The Poor Deserve
                  <br />
                  Your Food, Dont
                  <br />
                  Waste It.
                </strong>
              </span>
              <div className="postionTexts">
                <span>
                  The Best You Can Do
                  <br />
                  For Future Generation is,
                  <br />
                  Save Food
                </span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Add_res_form container-lg" style={{marginTop: '40px'}}>
              <h1>Get Started</h1>

              <form action="/">
                <div className="input-group mb-1 input-group-lg" style={{ width: "95%", marginLeft:'10px'}}>
                  <input type="text" placeholder="Store Name" id="Store_Name" className="form-control my-1 " style={{backgroundColor:'#e6e6e6',fontWeight:600, height:'20px'}}/>
                </div>
                <div className="input-group mb-1 input-group-lg" style={{ width: "95%", marginLeft:'10px'}}>
                  <input type="text" placeholder="Store Address" id="Store_Address" className="form-control my-1 " style={{backgroundColor:'#e6e6e6',fontWeight:600, height:'20px'}}/>
                </div>
              <div className="row">
                <div className="input-group mb-1 col input-group-lg" style={{ width: "45%", marginLeft:'10px'}}>
                  <input type="text" placeholder="First Name" id="First_Name" className="form-control my-1 " style={{backgroundColor:'#e6e6e6',fontWeight:600, height:'20px'}}/>
                </div>
                <div className="input-group mb-1 col input-group-lg" style={{ width: "35%", marginRight:'7px'}}>
                  <input type="text" placeholder="Last Name" id="Last_Name" className="form-control my-1 " style={{backgroundColor:'#e6e6e6',fontWeight:600, height:'20px'}}/>
                </div>
                <div className="input-group mb-1 input-group-lg" style={{ width: "90%", marginLeft:'21px'}}>
                  <input type="text" placeholder="Email Address" id="Email" className="form-control my-1 " style={{backgroundColor:'#e6e6e6',fontWeight:600, height:'20px'}}/>
                </div>
                <div className="input-group mb-1 input-group-lg" style={{ width: "90%", marginLeft:'21px'}}>
                  <input type="text" placeholder="Mobile Number" id="Phone" className="form-control my-1 " style={{backgroundColor:'#e6e6e6',fontWeight:600, height:'20px'}}/>
                </div>
                </div>
                <Link to={'/'}>
                  <div className="input-group mb-1 my-3 input-group-lg">
                    <button type="submit" className="btn btn-dark"style={{ backgroundColor: "black", margin:'auto' }}> Submit{" "}</button>
                  </div>
                </Link>
                
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="How_it_Works">
          <div className="How_it_Works_2">
            How We Work With Our Restaurant Partner
          </div>
          <p></p>
          <div className="container row" style={{ margin: "auto" }}>
            <div className="col">
              <div className="image_partner">
                <img
                  src={"./res.jpg"}
                  className="img-thumbnail"
                  alt="Cinque Terre"
                  width="200px"
                  height="200px"
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="image_partner">
                <img
                  src={"./ngo.jpg"}
                  className="img-thumbnail"
                  alt="Cinque Terre"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>

          <div
            className="container row "
            style={{ margin: "auto", padding: "0px 0px 70px 0px" }}
          >
            <div className="col-sm">
              <div className="image_partner">
                <span>
                  The restaurant owner makes a request to a nearby NGO to donate
                  food through our platform
                </span>
              </div>
            </div>
            <div className="col">
              <div className="image_partner">
                <span>
                  NGO will accept the request and send their delivery team to
                  get the food.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
