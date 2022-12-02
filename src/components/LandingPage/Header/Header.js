import "./header.css";
import docteurImage from "../../../assets/images/landingPage/doc.png";
import backgourndDoct from "../../../assets/images/landingPage/shape.png";
import Form from "../../form";
import { useEffect, useState } from "react";

const Header = () => {
  const [showModel, setShowModal] = useState(false);
  const onClickShowModalHandler = () => {
    setShowModal(!showModel);
  };
  console.log("header:" + showModel);
  return (
    <>
      <img src={backgourndDoct} alt="" class="shape" />
      <div class="showcase-area">
        <div class="container">
          <div class="left">
            <div class="big-title">
              <h1>Bien Venue</h1>
              <h1>On va fair un cusultation sur votre senteé</h1>
            </div>
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              eius distinctio odit, magni magnam qui ex perferendis vitae!
            </p>
            <div class="cta">
              <a href="#" class="btn" onClick={onClickShowModalHandler}>
                Get started
              </a>
              <Form showModel={showModel} />
            </div>
          </div>

          <div class="right">
            <img src={docteurImage} alt="Person Image" class="person" />
          </div>
        </div>
      </div>

      <div class="bottom-area">
        <div class="container"></div>
      </div>
    </>
  );
};

export default Header;
