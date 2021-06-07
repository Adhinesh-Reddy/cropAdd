import React from 'react'
import {Card, Nav, ListGroup} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Tree1 from '../Tree/Tree1'
import {useState} from 'react'
import client from '../../../backend/client'

const HomeHeirarchy = () => {

  const cotton = "../../../../assets/images/cotton.png"
  const wheat = "../../../../assets/images/wheat.png"
  const sugarcane = "../../../../assets/images/sugarcane.png"
  const sunflower = "../../../../assets/images/sunflower.png"

  const [flag, setFlag] = useState(0)
    const [l1_sym, setl1_sym] = useState([
        {sid: '', name: ''},
    ])
    const [l2_sym, setl2_sym] = useState([
        {sid: '', parentId: '', name: ''},
    ])
    const [l3_sym, setl3_sym] = useState([
        {sid: '', parentId: '', name: ''},
    ])

    


    React.useEffect(() => {
            client.get("crops/1/symptom/level/1")
            .then(res => {
                setl1_sym(res.data)
                console.log(res.data)
            })
        },[]);
        

        React.useEffect(() => {
            client.get("crops/1/symptom/level/2")
            .then(res => {
                setl2_sym(res.data)
            })  
        },[]);
        
        React.useEffect(() => {
            client.get("crops/1/symptom/level/3")
            .then(res =>{
                setl3_sym(res.data)
                setFlag(1)
            })
        },[]);

    return (
      <div>
            <Card border = "dark" style= {{position: "absolute", width: "88%",left:"10%",top:"131px",margin: "0px" }}>
          <Card.Header>
            <Nav className="justify-content-center" fill variant = "tabs" defaultActiveKey="/homeheirarchy">
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
          <Card.Body>
            {flag == 1 ? <Tree1 l1_sym = {l1_sym} l2_sym = {l2_sym} l3_sym = {l3_sym}/> : "loading..."}
          </Card.Body>
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
    )
}

export default HomeHeirarchy
