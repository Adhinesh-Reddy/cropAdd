import React,{useState} from 'react';
import { FormattedMessage } from 'react-intl';
import {Card, Nav, ListGroup, Button, Dropdown} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
// import {NavLink} from 'react-router-dom';
import { Link} from 'react-router-dom'

const HomeProblemAdd = () => {

  const cotton = "../../../../assets/images/cotton.png"
  const wheat = "../../../../assets/images/wheat.png"
  const sugarcane = "../../../../assets/images/sugarcane.png"
  const sunflower = "../../../../assets/images/sunflower.png"
  const [backGroundColorView,setBackGroundColorView]=useState('white');
  const [textColorView,setTextColorView]=useState('black');
  const [backGroundColorAdd,setBackGroundColorAdd]=useState('white');
  const [textColorAdd,setTextColorAdd]=useState('black');
    return (
      <div>
      <Card border = "dark" style= {{position: "absolute", width: "88%",left:"10%",top:"131px",margin: "0px" }}>
      <Card.Header>
        <Nav className="justify-content-center" fill variant = "tabs" defaultActiveKey="/homeproblem">
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
      <div>
      <br/>
        <Dropdown className='mx-2' style={{float:'right',paddingRight:"48px"}}>
            <Dropdown.Toggle style={{backgroundColor:"#D5DCED",borderColor:"#D5DCED",borderStyle:"solid",borderRadius:"10",width:"328px",color:"black",fontSize:"20px"}}>
            <FormattedMessage id='ExpertView.Text11' />
            </Dropdown.Toggle>
        </Dropdown>
      </div>
      <br/><br/>
      <div>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={()=>{setBackGroundColorView("#4FB872");setTextColorView('white')}} style={{backgroundColor:backGroundColorView,borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"125px",color:textColorView,fontSize:"25px"}} href="/homeproblem"><FormattedMessage id="View"/></Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={()=>{setBackGroundColorAdd("#4FB872");setTextColorAdd('white')}} style={{backgroundColor:backGroundColorAdd,borderColor:"black",borderStyle:"solid",borderRadius:"15px",width:"125px",color:textColorAdd,fontSize:"25px"}}><FormattedMessage id="Add"/></Button>
        <i className="fa fa-trash-o" style={{fontSize:"36px",color:"#696969",float:'right',paddingRight:"48px"}}></i>
        <Link to="/homeproblemedit"><i className="fa fa-edit" style={{fontSize:"36px",color:"#696969",float:'right',paddingRight:"50px"}}></i></Link>
        <br/>
      </div>
      <hr style={{ color: '#C4C4C4', backgroundColor: '#C4C4C4',height:"1px"}} />
      <Container>
        <Row>
          <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertView.Text1' /></Col>
          <Col style={{color:"#000000"}}>{''}</Col>
          <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertView.Text2' /></Col>
          <Col style={{color:"#000000"}}>{''}</Col>
        </Row>
        <br/>
        <Row>
          <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertView.Text3' /></Col>
          <Col style={{color:"#000000"}}>{''}</Col>
          <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertView.Text4' /></Col>
          <Col style={{color:"#000000"}}>{''}</Col>
        </Row>
        <br/>
        <Row>
          <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertView.Text5' /></Col>
          <Col style={{color:"#000000"}}>{''}</Col>
          <Col style={{color:"#000000"}}>{''}</Col>
          <Col style={{color:"#000000"}}>{''}</Col>
        </Row>
        <br/>
      </Container>
      <hr style={{ color: '#827A7A', backgroundColor: '#827A7A',height:"2px"}} />
      <div>
        <p style={{color:"#696969",fontSize:"25px",paddingLeft:"70px"}}><FormattedMessage id='ExpertEdit.Text1'/></p>
        <br/>
        <Container>
          <Row>
            <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertAdd.Text1'/></Col> {/*change paddingLeft: 170px*/}
            <Col style={{color:"#000000"}}>{''}</Col>
            <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertAdd.Text2'/></Col>
            <Col style={{color:"#000000"}}>{''}</Col>
          </Row>
          <br/>
          <Row>  
            <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertAdd.Text3'/></Col>
            <Col style={{color:"#000000"}}>{''}</Col>
            <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertAdd.Text4'/></Col>
            <Col style={{color:"#000000"}}>{''}</Col>
          </Row>
          <br/>
          <Row>
            <Col style={{color:"#4FB872"}}><FormattedMessage id='ExpertAdd.Text5'/></Col>
            <Col style={{color:"#000000"}}>{''}</Col>
            <Col style={{color:"#000000"}}>{''}</Col>
            <Col style={{color:"#000000"}}>{''}</Col>
          </Row>
          <br/>
        </Container> 
        {/* <Link to="/homeproblemadd" style={{float:'right',paddingRight:"30px"}}><i className="fas fa-plus" style={{fontSize:"14px",color:"#696969",float:'right',paddingRight:"30px"}}>&nbsp;&nbsp;<FormattedMessage id="Add"/></i></Link>      */}
        <i className="fas fa-plus" style={{fontSize:"14px",color:"#696969",float:'right',paddingRight:"48px"}}>&nbsp;&nbsp;<FormattedMessage id="Add"/></i>
        <br/><br/>
      </div>
      <br/>
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

export default HomeProblemAdd

