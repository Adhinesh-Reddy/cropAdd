// import React, { useContext } from "react";
import {Card, Nav, ListGroup} from 'react-bootstrap';
// import {NavLink} from 'react-router-dom'

// import "./card-style.css";
import "./home.scss";
// import Card from "./Cards";
// import client from "../../../backend/client";
// import { ctxt } from './../../../utils/AppContext';

const cotton = "../../../../assets/images/cotton.png"
const wheat = "../../../../assets/images/wheat.png"
const sugarcane = "../../../../assets/images/sugarcane.png"
const sunflower = "../../../../assets/images/sunflower.png"

function Home() {
  
  return (
    <div>
    <Card border = "dark" style= {{position: "absolute", width: "88%",height:"111px",left:"10%",top:"131px",margin: "0px" }}>
      <Card.Header>
        <Nav className="justify-content-center" fill variant = "tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" >CROP</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/homeproblem">PROBLEM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/homeheirarchy">HEIRARCHY</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
    <Card style={{position: "absolute",width: "7%",top:"198px",padding:"10px"}}>
      <ListGroup variant="flush">
        <Nav.Item style={{backgroundColor:'#4FB872'}}>
          <Nav.Link href = "/home">
            <div>
              <img src={cotton} alt="cotton" width='50px' height='50px'/>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{padding:"0px"}}>
          <Nav.Link href = "/home">
            <div>
              <img src={wheat} alt="cotton" width='50px' height='50px'/>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{padding:"0px"}}>
          <Nav.Link href = "/home">
            <div>
              <img src={sugarcane} alt="cotton" width='50px' height='50px'/>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{padding:"0px"}}>
          <Nav.Link href = "/home">
            <div>
              <img src={sunflower} alt="cotton" width='50px' height='50px'/>
            </div>
          </Nav.Link>
        </Nav.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default Home;
