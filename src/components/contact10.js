import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text23 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text17 thq-body-large">
                    Get in touch with us for any inquiries or to start your tape
                    conversion process.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text19 thq-heading-3">
                    <span>
                      Main Office: Am Alten Hospital 8,
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>56068 Koblenz</span>
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text18 thq-body-large">
                    We usually handle all contact online but if youre local we
                    can schedule a drop-off time for the tapes at our location
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text24 thq-heading-3">
                    Virtual Office: discord.com/invite
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text16 thq-body-large">
                    Chat with our staff in our public virtual, receive product
                    updates and news and keep in touch with us and our community
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGRpc2NvcmR8ZW58MHx8fHwxNzI2ODI3OTYyfDA&ixlib=rb-4.0.3&w=1400',
  location2Description: undefined,
  content1: undefined,
  location1Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1501116496206-1aff990c82b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjc5MTAzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1: undefined,
  location2ImageAlt: 'Image of our secondary office location',
  location1ImageAlt: 'Image of our main office location',
  heading1: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  content1: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10
