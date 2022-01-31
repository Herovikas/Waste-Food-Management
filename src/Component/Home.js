import React from "react";
import { Link } from "react-router-dom";
import Slid from './Slid';



export default function Home() {
  return (
    <>
    
      <section className="mainy boxs">
        <div className="postionText_home container" style={{ width: "50%" }}>
          <p>2022 @Food For All</p>
          <span>
            We Feed Needy
            <br />
            People...
          </span>
          <div className="postionTexts_home">
            <span>
              Good Food Necessary
              <br />
              for Great Nation
            </span>
          </div>
        </div>
        <div className="Find_Food">
          <p>Search Food According to Your Region</p>
          <form>
            <div
              className="input-group mb-3 input-group-lg"
              style={{ width: "110%" }}
            >
              <div className="input-group-prepend">
                <span className="loc input-group-text">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
              </div>
              <input
                type="text"
                placeholder="   Please Enter Your Region"
                id="Region"
                className="form-control"
              />
              <button
                type="button"
                className="btn btn-dark"
                style={{ margin: "0 0 0 30px", backgroundColor: "black" }}
              >
                Find Food{" "}
              </button>
            </div>
            <p>Sign In to see recent order.</p>
          </form>
        </div>
      </section>
      <section>
        <div className="Give_it_away" style={{ backgroundColor: "#eddae2" }}>
          <div className="Give_it_away_2">
            Give it away, Instead of wasting it.
          </div>
          <p></p>
          <div className="container row" style={{ margin: "auto" }}>
            <div className="col">
              <img
                className="card-img-top"
                src="./image.png"
                alt="Card cap"
                style={{ width: "300px" }}
              />
              <div className="card-body">
                <Link to="/" className="Donor btn btn-lg btn-dark ">
                  Individual Donor
                </Link>
              </div>
            </div>
            <div className="col">
              <img
                className="card-img-top"
                src="./image.png"
                alt="Card cap"
                style={{ width: "300px" }}
              />
              <div className="card-body">
                <Link
                  to="/Add-Your-Restaurant"
                  className="Donor btn btn-lg btn-dark "
                >
                  Add Your Restaurant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="How_It_Work">
          <div className="How_It_Work">How It Work</div>
          <p></p>
          <div className="continer">
            <div className="row" style={{ margin: "auto" }}>
              <div className="col-1"></div>
              <div className="Howitwork col-7">
                <h1 style={{ fontSize: "240px", fontFamily: "fantasy" }}>01</h1>
                <div>Tell us what you like</div>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ulla- mcorper suscipit lobortis nisl ut
                  aliquip ex ea commo- do consequat. Duis autem vel eum iriure
                  dolor in hen- drerit in vulputate velit esse molestie
                  consequat, vel
                </span>
              </div>
              <div className="col">
                <img
                  src={"./phone.png"}
                  className="img-thumbnail"
                  alt="Cinque Terre"
                  style={{ height: "500px" }}
                />
              </div>
            </div>
          </div>

          <div className="continer">
            <div className="row" style={{ margin: "auto" }}>
              <div className="col">
                <img
                  src={"./phone.png"}
                  className="img-thumbnail"
                  alt="Cinque Terre"
                  style={{ height: "500px" }}
                />
              </div>
              <div className="Howitwork_2 col-7">
                <h1 style={{ fontSize: "240px", fontFamily: "fantasy" }}>02</h1>
                <div style={{ textAlign: "left" }}>Tell us what you like</div>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ulla- mcorper suscipit lobortis nisl ut
                  aliquip ex ea commo- do consequat. Duis autem vel eum iriure
                  dolor in hen- drerit in vulputate velit esse molestie
                  consequat, vel
                </span>
              </div>
              <div className="col-1"></div>
            </div>
          </div>

          <div className="continer">
            <div className="row" style={{ margin: "auto" }}>
              <div className="col-1"></div>
              <div className="Howitwork col-7">
                <h1 style={{ fontSize: "240px", fontFamily: "fantasy" }}>03</h1>
                <div>Tell us what you like</div>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ulla- mcorper suscipit lobortis nisl ut
                  aliquip ex ea commo- do consequat. Duis autem vel eum iriure
                  dolor in hen- drerit in vulputate velit esse molestie
                  consequat, vel
                </span>
              </div>
              <div className="col">
                <img
                  src={"./phone.png"}
                  className="img-thumbnail"
                  alt="Cinque Terre"
                  style={{ height: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#e6e6e6" }}>
        <div className="About_Us">
          <div className="About_Us">What People are Saying About Us</div>
          <p></p>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src="/image.png"
                  className="rounded-corners"
                  alt="Cinque Terre"
                  style={{ height: "200px", width: "200px" }}
                />
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </span>
              </div>
              <div className="col">
                <img
                  src="/image.png"
                  className="rounded-corners"
                  alt="Cinque Terre"
                  style={{ height: "200px", width: "200px" }}
                />
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src="/image.png"
                  className="rounded-corners"
                  alt="Cinque Terre"
                  style={{ height: "200px", width: "200px" }}
                />
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </span>
              </div>
              <div className="col">
                <img
                  src="/image.png"
                  className="rounded-corners"
                  alt="Cinque Terre"
                  style={{ height: "200px", width: "200px" }}
                />
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section style={{ backgroundColor: "#dc3545a1", paddingBottom: "150px" }}>
        <div className="Our_Partners">
          <h1>Our Partners</h1>
        </div>
        <Slid/>
   </section>
    </>
  );
}
