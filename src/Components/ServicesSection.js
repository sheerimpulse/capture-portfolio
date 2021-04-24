import React from "react";
import clock from "../imgs/clock.svg";
import dia from "../imgs/diaphragm.svg";
import teamwork from "../imgs/teamwork.svg";
import money from "../imgs/money.svg";
import home2 from "../imgs/home2.png";
import styled from "styled-components";

//Styles
import { About, Description, Image } from "../styles";



const ServicesSection = () => {

  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={dia} alt="diaphragm icon" />
              <h3>Diapghram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Home icon" />
      </Image>
    </Services>
  );
};

//Modified Styles
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
flex-basis:20rem;
.icon{
  display:flex;
  align-items:center;
  h3{
    margin-left:1rem;
    background:white;
    color:black;
    padding:1rem;
  }
}
`;

export default ServicesSection;
