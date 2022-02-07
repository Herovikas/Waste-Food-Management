import React from 'react';

export default function Footer() {
  return (
    <section className="footerbtm boxs">
        <div className="container">
          <div className="bottomFooter boxs">
            <div className="btmleft d-inline-block ">
                <span>
                  <i className="far fa-copyright"></i>
                  Food For All
                </span>   
            </div>
            <div className="btmright d-inline-block float-right">
              <span className="d-inline-block">We are Social:</span>
              <a
                href="https://www.facebook.com/profile.php?id=100004155015725"
                className="facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/sujeetm19/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vikas-yadav-349891137/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCw9lkGbB0JgQVDkbo6RBcbA?view_as=subscriber">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
 ) ;
}
