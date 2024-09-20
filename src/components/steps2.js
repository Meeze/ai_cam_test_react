import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Convert Your miniDV Tapes with Ease
            </h2>
            <p className="thq-body-large">
              Preserve your memories effortlessly with our simple conversion
              process. Just send us your miniDV tapes, select your preferred
              conversion options, and let our team of experts handle the rest.
              From start to finish, we ensure your videos are digitized with the
              utmost care, so you can relive those cherished moments anytime.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span>
                  {props.checkoutButton ?? (
                    <Fragment>
                      <span className="steps2-text26 thq-body-small">
                        <span>Checkout Options</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text31 thq-heading-2">
                      Gather MiniDV Tapes
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text34 thq-body-small">
                      Collect all your MiniDV tapes that you want to convert
                      into digital formats.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text29 thq-heading-2">
                      Choose Conversion Options
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text30 thq-body-small">
                      Select whether you want video download, video gallery
                      hosting, or DVD conversion for each tape.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text33 thq-heading-2">
                      Send Tapes to MX Media
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text35 thq-body-small">
                      Ship your MiniDV tapes to MX Media for professional
                      conversion services.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text32 thq-heading-2">
                      Receive Digital Files
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text25 thq-body-small">
                      Get your converted MiniDV tapes in digital formats as per
                      your chosen options.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Description: undefined,
  checkoutButton: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step4Title: undefined,
  step3Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
}

Steps2.propTypes = {
  step4Description: PropTypes.element,
  checkoutButton: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
}

export default Steps2
