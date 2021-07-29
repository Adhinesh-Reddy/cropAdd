import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { FormattedMessage } from 'react-intl';

import '../Home/card-style.css'
import '../Home/home.scss'
const close = require('./../../../../assets/images/closegreen.jpg')

class Alert extends Component {
    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
                <div className="cardalert column">
			<div style={{float:"right"}}><img src={close} alt="close" style={{width:"50px",height:"50px"}}/></div>
			<br/><br/><br/>
            		<p style={{fontSize:"21px",textAlign:"center"}}><b> <FormattedMessage id="AlertCrop.Text1"/></b> </p>  
                        <p style={{fontSize:"20px",color:"#4FB872",textAlign:"center"}}><b> <FormattedMessage id="AlertCrop.Text2"/></b></p>    
			<p style={{fontSize:"25px",textAlign:"center"}}> <FormattedMessage id="AlertCrop.Text3"/></p>
			<div style={{textAlign:"center"}}><Button style={{ fontSize:"20px",backgroundColor:'#4FB872',color:'white',padding:'15px',borderColor:'green',borderStyle:'solid'}} type="submit"> <FormattedMessage id="AlertCrop.Text4"/> </Button></div>
                </div>
            </div>
        );
    }
}

export default Alert;

