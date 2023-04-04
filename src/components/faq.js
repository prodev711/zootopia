import { useState } from "react"

import sheep from "../img/sheep.png"
import rabbit from "../img/faq-rabbit.png"
import carrot_rabbit from "../img/carrot-rabbit.png"
import rab_fox from "../img/rabi-fox.png"
import lion from "../img/lion.png"
import buffelo from "../img/buffelo.png"
import ox from "../img/ox.png"
import sloth from "../img/sloth.png"
import furry from "../img/furry.png"
import otter from "../img/otter.png"
import mr from "../img/mr.png"
import fox from "../img/fox.png"
import "../styles/faq.css"

const Faq = () => {
  const [mintprice, setMintprice] = useState(false)
  const [mintdate, setMintdate] = useState(false)
  const [mintcount, setMintcount] = useState(false)
  const [presale, setPresale] = useState(false)
  const [benefit, setBenefit] = useState(false)
  const [reveal, setReveal] = useState(false)

  const mintPrice = () => {
    setMintprice(!mintprice)
  }
  const mintDate = () => {
    setMintdate(!mintdate)
  }
  const mintCount = () => {
    setMintcount(!mintcount)
  }
  const Presale = () => {
    setPresale(!presale)
  }
  const Benefit = () => {
    setBenefit(!benefit)
  }
  const Reveal = () => {
    setReveal(!reveal)
  }

  return (
    <div className="faq">
      <div className="faq-title">
        <h2 className="f-orange">F A Q</h2>
        <p>FAQ</p>
        <div className="small-line" />
      </div>
      <div className="faq-bar-title">
        <p>Frequently Asked</p>
        <p>Questions</p>
      </div>
      <div className="faq-elements">
        <div className="faq-element">
          <div className="faq-question" onClick={mintPrice}>
            <p>Your team have Marking and consultanting? or Only development Team?</p>
            <button className={mintprice ? "" : "hide"}>-</button>
            <button className={mintprice ? "hide" : ""}>+</button>
          </div>
          <div className={mintprice ? "faq-answer" : "hide"}>
            <p>Our team has good experience of Marketing and are response to marking with development.</p>
            <p>Also We have great idea and serveral products to make life easier</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={mintDate}>
            <p>What stack does your team mainly develop?</p>
            <button className={mintdate ? "" : "hide"}>-</button>
            <button className={mintdate ? "hide" : ""}>+</button>
          </div>
          <div className={mintdate ? "faq-answer" : "hide"}>
            <p>We have great team can develop with Angular, React, Next.js at Frontend</p>
            <p>We are good at Nest.js, Express, MongoDB, Mongoose at Backend</p>
            <p>Also React Native team for mobile application and Great team at blockchain field</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={mintCount}>
            <p>Where your team based on? I want to make team at my region</p>
            <button className={mintcount ? "" : "hide"}>-</button>
            <button className={mintcount ? "hide" : ""}>+</button>
          </div>
          <div className={mintcount ? "faq-answer" : "hide"}>
            <p>As we are global team, Our team guys are in all the world. If possible, you can build a great development team in your area.</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={Presale}>
            <p>Can start working immediately after being hired?</p>
            <button className={presale ? "" : "hide"}>-</button>
            <button className={presale ? "hide" : ""}>+</button>
          </div>
          <div className={presale ? "faq-answer" : "hide"}>
            <p>Yes, Our team is ready always and ensure great quality with high skill</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={Benefit}>
            <p>What are the benefits of hiring Zootopia team?</p>
            <button className={benefit ? "" : "hide"}>-</button>
            <button className={benefit ? "hide" : ""}>+</button>
          </div>
          <div className={benefit ? "faq-answer" : "hide"}>
            <p></p>
            <p>From web and mobile development to site launch, we do a complete job, and the hiring cost is inexpensive and can be negotiated through dialogue.</p>
            <p>In addition, 100% satisfaction of customer needs through close communication with their requirements.</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={Reveal}>
            <p>Do I have to pay first to hire zootopia team?</p>
            <button className={reveal ? "" : "hide"}>-</button>
            <button className={reveal ? "hide" : ""}>+</button>
          </div>
          <div className={reveal ? "faq-answer" : "hide"}>
            <p>No</p>
          </div>
        </div>
        <div className="faq-sheep ">
          <img src={sheep} className="f-size" />
        </div>
        <div className="faq-rabbit">
          <img src={rabbit} className="f-size" />
        </div>
      </div>
      <div className="blend faq-left" />
      <div className="img-gallerys">
        <div className="img-gallery-top">
          <div className="element-img">
            <img src={carrot_rabbit} />
          </div>
          <div className="element-img">
            <img src={rabbit} />
          </div>
          <div className="element-img">
            <img src={rab_fox} />
          </div>
          <div className="element-img">
            <img src={lion} />
          </div>
          <div className="element-img">
            <img src={buffelo} />
          </div>
          <div className="element-img">
            <img src={sheep} />
          </div>
        </div>
        <div className="img-gallery-bottom">
          <div className="element-img">
            <img src={ox} />
          </div>
          <div className="element-img">
            <img src={sloth} />
          </div>
          <div className="element-img">
            <img src={furry} />
          </div>
          <div className="element-img">
            <img src={otter} />
          </div>
          <div className="element-img">
            <img src={mr} />
          </div>
          <div className="element-img">
            <img src={fox} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
