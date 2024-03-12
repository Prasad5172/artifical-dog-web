// Import necessary libraries and styles
import React, { useEffect } from 'react';
import './css/style.css'; // Import your CSS file
import "./css/RoadMap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/fontawesome-svg-core"


const RoadMap = () => {
  useEffect(() => {
    // Vertical Timeline - by CodyHouse.co
    function VerticalTimeline(element) {
      this.element = element;
      this.blocks = this.element.getElementsByClassName('cd-timeline__block');
      this.images = this.element.getElementsByClassName('cd-timeline__img');
      this.contents = this.element.getElementsByClassName('cd-timeline__content');
      this.offset = 0.8;
      this.hideBlocks();
    }

    VerticalTimeline.prototype.hideBlocks = function () {
      if (!('classList' in document.documentElement)) {
        return; // no animation on older browsers
      }
      // hide timeline blocks which are outside the viewport
      var self = this;
      for (var i = 0; i < this.blocks.length; i++) {
        (function (i) {
          if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
            self.images[i].classList.add('cd-timeline__img--hidden');
            self.contents[i].classList.add('cd-timeline__content--hidden');
          }
        })(i);
      }
    };

    VerticalTimeline.prototype.showBlocks = function () {
      if (!('classList' in document.documentElement)) {
        return;
      }
      var self = this;
      for (var i = 0; i < this.blocks.length; i++) {
        (function (i) {
          if (
            self.contents[i].classList.contains('cd-timeline__content--hidden') &&
            self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset
          ) {
            // add bounce-in animation
            self.images[i].classList.add('cd-timeline__img--bounce-in');
            self.contents[i].classList.add('cd-timeline__content--bounce-in');
            self.images[i].classList.remove('cd-timeline__img--hidden');
            self.contents[i].classList.remove('cd-timeline__content--hidden');
          }
        })(i);
      }
    };

    var verticalTimelines = document.getElementsByClassName('js-cd-timeline'),
      verticalTimelinesArray = [],
      scrolling = false;

    if (verticalTimelines.length > 0) {
      for (var i = 0; i < verticalTimelines.length; i++) {
        (function (i) {
          verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
        })(i);
      }

      // show timeline blocks on scrolling
      window.addEventListener('scroll', function (event) {
        if (!scrolling) {
          scrolling = true;
          !window.requestAnimationFrame
            ? setTimeout(checkTimelineScroll, 250)
            : window.requestAnimationFrame(checkTimelineScroll);
        }
      });
    }

    function checkTimelineScroll() {
      verticalTimelinesArray.forEach(function (timeline) {
        timeline.showBlocks();
      });
      scrolling = false;
    }
  }, []); // Run only once on component mount

  return <>
    <div className="container">
      <div className="roadmap-header d-flex flex-column justify-center align-items-center">
        <div className="display-4">
          Road Map
        </div>
        <div className=" display-1">
          The Timeline
        </div>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elitpa.
        </h4>

      </div>

      <div className="your-container-class">
        <section class="cd-timeline js-cd-timeline">
          <div class="container max-width-lg cd-timeline__container">
            <div class="cd-timeline__block">
              <div class="cd-timeline__img cd-timeline__img--picture">
              </div>

              <div class="cd-timeline__content text-component">
                <h2>Title of section 1</h2>
                <FontAwesomeIcon icon="fa-solid fa-house" />
                <p class="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                  optio, dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                  qui ut.
                </p>

                <div class="flex justify-between items-center">
                  <span class="cd-timeline__date">Jan 14</span>
                </div>
              </div>
            </div>

            <div class="cd-timeline__block">
              <div class="cd-timeline__img cd-timeline__img--movie">
              </div>

              <div class="cd-timeline__content text-component">
                <h2>Title of section 2</h2>
                <p class="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                  optio, dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde?
                </p>

                <div class="flex justify-between items-center">
                  <span class="cd-timeline__date">Jan 18</span>
                </div>
              </div>
            </div>

            <div class="cd-timeline__block">
              <div class="cd-timeline__img cd-timeline__img--picture">
                {/* <img src="assets/img/cd-icon-picture.svg" alt="Picture" /> */}
              </div>

              <div class="cd-timeline__content text-component">
                <h2>Title of section 3</h2>
                <p class="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exceptur.
                </p>

                <div class="flex justify-between items-center">
                  <span class="cd-timeline__date">Jan 24</span>
                </div>
              </div>
            </div>

            <div class="cd-timeline__block">
              <div class="cd-timeline__img cd-timeline__img--location">
                {/* <img src="assets/img/cd-icon-location.svg" alt="Location" /> */}
              </div>

              <div class="cd-timeline__content text-component">
                <h2>Title of section 4</h2>
                <p class="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                  optio, dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
                  qui ut.
                </p>

                <div class="flex justify-between items-center">
                  <span class="cd-timeline__date">Feb 14</span>
                </div>
              </div>
            </div>

            <div class="cd-timeline__block">
              <div class="cd-timeline__img cd-timeline__img--location">
                {/* <img src="assets/img/cd-icon-location.svg" alt="Location" /> */}
              </div>

              <div class="cd-timeline__content text-component">
                <h2>Title of section 5</h2>
                <p class="color-contrast-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                  optio, dolorum provident rerum.
                </p>

                <div class="flex justify-between items-center">
                  <span class="cd-timeline__date">Feb 18</span>
                </div>
              </div>
            </div>
            <div class="cd-timeline__block">
              <div class="cd-timeline__img cd-timeline__img--movie">
                {/* <img src="assets/img/cd-icon-movie.svg" alt="Movie" /> */}
              </div>

              <div class="cd-timeline__content text-component">
                <h2>Final Section</h2>
                <p class="color-contrast-medium">
                  This is the content of the last section
                </p>

                <div class="flex justify-between items-center">
                  <span class="cd-timeline__date">Feb 26</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
};

export default RoadMap;
