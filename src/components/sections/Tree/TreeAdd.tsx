import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
// import TreeEdit from './TreeEdit'
// import { useHistory } from "react-router-dom";

const TreeAdd = () => {
    const[name, setName] = useState("")
    const[flag, setFlag] = useState(0)
    // const history = useHistory();
    
    function handleSubmit(){
        setName(name)
        setFlag(1)
        // history.push("/treeedit");
    }
    // function Change(){
    // }
    return (
        <>
        <Form onSubmit={handleSubmit }>
            <Form.Group controlId = "kpi4_5">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Button variant="sucess" type="submit">Submit</Button>
        {/* {flag == 1 ? <TreeEdit name = {name} flag = {flag}/> : "loading..."} */}
        {/* <button onClick = {Change}>Change</button> */}
        </Form>
        </>
    )
}

export default TreeAdd
