import React from "react";
import "../HomePage.css"


function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-12 text-primary">
              <div className="row">
                <h1 className="home-title  font-weight-bold display-1">The world’s first Digital Dogs™</h1>
              </div>
              <div className="row">
                <h4 className="text-primary">Cross-app, AI Digital Dogs NFTs for immersive realities, including metaverses, VR, AR, social games, and more. Your trusted companion across virtual worlds!
                </h4>
              </div>
              <div className="row">
                <button className="home-btn">
                  <div className="inside-btn-div text-dark">
                    say hello to digital dog
                  </div>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
