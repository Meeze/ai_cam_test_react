import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features24 from '../components/features24'
import Steps2 from '../components/steps2'
import Pricing14 from '../components/pricing14'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Austere Shiny Hawk</title>
        <meta property="og:title" content="Austere Shiny Hawk" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-body-small thq-link">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-body-small thq-link">
              #services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-body-small thq-link">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-body-small thq-link">
              #contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Welcome to MX Media
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">Our Services</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Get to know us better
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">Reach out to us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              Convert your outdated minidv tapes into digital formats to ensure
              your precious memories are preserved for years to come.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Preserve Your Memories
            </span>
          </Fragment>
        }
        image4Src="https://images.unsplash.com/photo-1622782631729-8ed3ed73ae90?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjc5MTAzMXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero17>
      <CTA26
        content1={
          <Fragment>
            <span className="home-text118 thq-body-large">
              Let us help you convert your outdated minidv tapes / camcorder
              recordings into digital formats today! Relive forgotten history or
              gift it to a friend/family member
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Ready to bring your memories into the digital age?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">
              Minidv Tape Conversion
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">Video Download</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text122 thq-heading-2">
              Video Gallery Hosting
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              <span>Convert outdated minidv tapes into digital formats</span>
              <br></br>
              <span>(.mp4, .mkv .allfimfils)</span>
              <br></br>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              Download your digitized videos for preservation on a
              harddrive/computer/phone
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text129 thq-body-small">
              Host your videos in our online gallery to access them anywhere
              anytime on any device
            </span>
          </Fragment>
        }
      ></Features24>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Gather MiniDV Tapes
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text131 thq-heading-2">
              Choose Conversion Options
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text132 thq-heading-2">
              Send Tapes to MX Media
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text133 thq-heading-2">
              Receive Digital Files
            </span>
          </Fragment>
        }
        checkoutButton={
          <Fragment>
            <span className="home-text134 thq-body-small">
              <span>Checkout Options</span>
              <br></br>
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text137 thq-body-small">
              Collect all your MiniDV tapes that you want to convert into
              digital formats.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Select whether you want video download, video gallery hosting, or
              DVD conversion for each tape.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Ship your MiniDV tapes to MX Media for professional conversion
              services.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Get your converted MiniDV tapes in digital formats as per your
              chosen options.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text141 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text142 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text143 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text144 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text145 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text146 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text147 thq-body-small">
              <span>**insert custom component here**</span>
              <br></br>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text150 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text153 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text154 thq-heading-3">$20/mo</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text155 thq-heading-3">$29/mo</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text156 thq-heading-3">$49/mo</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text157 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text158 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text159 thq-body-large">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text161 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text162 thq-body-large">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text163 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text164 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text165 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text166 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text168 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text169 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text170 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text171 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text188 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text195 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text196 thq-body-small">
              MX Media did an excellent job converting my old minidv tapes into
              digital formats. The quality of the videos was outstanding, and
              the process was seamless.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text197 thq-body-small">
              I highly recommend MX Media for their minidv tape conversion
              services. They were professional, efficient, and the end result
              exceeded my expectations.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text198 thq-body-small">
              MX Media&apos;s video download service made it easy for me to
              access my old footage anytime, anywhere. I am impressed with the
              quality and quick turnaround time.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text199 thq-body-small">
              I chose MX Media for converting my minidv tapes to digital, and I
              couldn&apos;t be happier with the result. The DVD option was a
              great add-on for preserving my memories.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200 thq-body-small">
              Read what our customers have to say about their experience with MX
              Media.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text201 thq-heading-2">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text202 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text204 thq-body-large">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text205 thq-body-large">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              CEO, Company ABC
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Marketing Manager, Company XYZ
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text208 thq-body-small">Photographer</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text209 thq-body-small">Film Enthusiast</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text210 thq-body-large">
              Get in touch with us for any inquiries or to start your tape
              conversion process.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text211 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212 thq-heading-3">
              <span>
                Main Office: in yo mama,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>1337 z</span>
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text216 thq-heading-3">
              Virtual Office: discord.com/invite
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text217 thq-body-large">
              We usually handle all contact online but if youre local we can
              schedule a drop-off time for the tapes at our location
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text218 thq-body-large">
              Chat with our staff in our public virtual, receive product updates
              and news and keep in touch with us and our community
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text219 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text220 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text221 thq-body-small">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text222 thq-body-small">FAQ</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text223 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text224 thq-body-small">
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text225 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text226 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
