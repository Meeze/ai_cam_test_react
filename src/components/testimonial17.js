import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text31 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text33 thq-body-small">
                  Read what our customers have to say about their experience
                  with MX Media.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text34 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26 thq-body-small">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        MX Media did an excellent job converting my old minidv
                        tapes into digital formats. The quality of the videos
                        was outstanding, and the process was seamless.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text32 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37 thq-body-small">
                            Marketing Manager, Company XYZ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        I highly recommend MX Media for their minidv tape
                        conversion services. They were professional, efficient,
                        and the end result exceeded my expectations.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text29 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30 thq-body-small">
                            Photographer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25 thq-body-small">
                        MX Media&apos;s video download service made it easy for
                        me to access my old footage anytime, anywhere. I am
                        impressed with the quality and quick turnaround time.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text35 thq-body-large">
                            Sarah Williams
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36 thq-body-small">
                            Film Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text27 thq-body-small">
                        I chose MX Media for converting my minidv tapes to
                        digital, and I couldn&apos;t be happier with the result.
                        The DVD option was a great add-on for preserving my
                        memories.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review1: undefined,
  review3: undefined,
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of Michael Johnson',
  author1Position: undefined,
  review4: undefined,
  review2: undefined,
  author3Name: undefined,
  author3Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjc5MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1519030838513-a407db96023a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjc5MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: undefined,
  content1: undefined,
  author1Name: undefined,
  author4Name: undefined,
  author4Position: undefined,
  author1Alt: 'Image of John Doe',
  author2Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1622278801918-03ae631dd576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjc5MTAzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjc5MTAzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Williams',
}

Testimonial17.propTypes = {
  review1: PropTypes.element,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.element,
  review4: PropTypes.element,
  review2: PropTypes.element,
  author3Name: PropTypes.element,
  author3Position: PropTypes.element,
  author1Src: PropTypes.string,
  heading1: PropTypes.element,
  author4Src: PropTypes.string,
  author2Name: PropTypes.element,
  content1: PropTypes.element,
  author1Name: PropTypes.element,
  author4Name: PropTypes.element,
  author4Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial17
