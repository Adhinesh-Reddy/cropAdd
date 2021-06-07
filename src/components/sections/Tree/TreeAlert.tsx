import React,{useState} from 'react'
// import {useAlert} from 'react-alert'
import {Alert, Form} from 'react-bootstrap'
// import TreeEdit from './TreeEdit'
// import { useHistory } from "react-router-dom";

const TreeAlert = () => {
    // const alert = useAlert();
    const [name, setName] = useState("")
    const [flag, setFlag] = useState(0)

    // const history = useHistory();

    function handleSubmit(){
        setName(name)
        setFlag(1)
    }
    return (
        // <button onClick={() => {alert.show('Oh look, an alert!')}}>
        //   Show Alert
        // </button>
        <div>
        <Alert variant = "success">
        {/* <Form onSubmit={handleSubmit}> */}
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
         <button onClick = {handleSubmit}>Add Node</button>
        {/* </Form> */}
        </Alert>

        {/* {flag == 1 ? <TreeEdit name = {name} flag = {flag}/> : "loading..."} */}
        </div>
    )
}

export default TreeAlert
