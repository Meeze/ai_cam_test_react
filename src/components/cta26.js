import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text3 thq-heading-2">
                        Ready to bring your memories into the digital age?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <Fragment>
                      <p className="cta26-text4 thq-body-large">
                        Let us help you convert your outdated minidv tapes into
                        digital formats today!
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
}

CTA26.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA26
