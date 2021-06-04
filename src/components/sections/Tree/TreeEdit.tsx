import React, {useState,useRef} from 'react'
import cytoscape from 'cytoscape'
import TreeAdd from './TreeAdd'
import { useHistory } from "react-router-dom";
import {useAlert} from 'react-alert'
import TreeAlert from './TreeAlert';
//@ts-ignore
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import {Alert, Form, Button} from 'react-bootstrap'
import TreeData from './TreeData'



var l1_sym = ["Bored Bolls"]


const TreeEdit = () => {
    
    const [show, setShow] = useState(false);
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [flag, setFlag] = useState(0)
    const [disableBtn, setDisableBtn] = useState(true)
    const [parent,setParent] = useState("")
    const cyRef = useRef();

    const history = useHistory();

    function handleSubmit(){
        setShow(false)
                cyRef.current.add([
                    {group: 'nodes', data: {id: id, label: name}},
                    {group: 'edges', data: {source: parent, target: id}}
                ])
        setId("")
        setName("")
        setDisableBtn(true)
    }

    function handleClick(){
        setFlag(1)
        history.push("/tree")
    }

    
    // const [name, setName] = useState("")
    // function handleSubmit(){
    //     setName(name)
    //     setFlag(1)
    // }
        // console.log(name)

    const renderCytoscapeElement = () =>{

        const cy = cytoscape(
            {
                container: document.getElementById('cy'),

                elements:[

                ],

                style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                        'content': 'data(label)',
                        'text-valign': 'center',
                        'color': 'black',
                        'text-outline-width': 2,
                        'text-outline-color': '#888',
                        'background-color': 'white',
                        'shape': 'rectangle',
                        'font-size': '20px',
                        'border-width': '1px',
                        'width': '200px',
                        'height': '50px',
                        
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'target-arrow-color': '#4FB872',
                        'target-arrow-shape': 'triangle',
                        'label': 'data(label)',
                        'font-size': '14px',
                        'color': '#777',
                        'line-color': '#4FB872',
                        'line-style': 'solid',
                        'curve-style': 'bezier',
                    }
                },
                
                {
                    selector: ':selected',
                    style: {
                        'background-color': 'white',
                        'line-color': 'black',
                        'target-arrow-color': 'black',
                        'source-arrow-color': 'black',
                        'text-outline-color': 'white'
                    }
                }
                ],
                
            }
        );

            var countId = 0
            cy.add([
                    {group: "nodes", data: {id: "root", label: "Cotton"}},
                ]);

            for(let l1 in l1_sym){
                cy.add([
                {group: 'nodes', data: {id: "l1"+countId,label: l1_sym[l1]}},
                {group: 'edges', data: {source: "root", target: "l1"+countId++}}
            ])
            }
        
           
            var layout = cy.layout({ name: 'breadthfirst', roots: ["root"], padding: 30 });
            layout.run();
            
            cy.on('tap','node',function(evt){
                var node = evt.target._private.data;
                console.log(node.label)
                setDisableBtn(false)
                setParent(node.id)
                
            })
            cyRef.current = cy
        }


        //http://65.0.8.183/crops/1/symptom/level/1
        //http://65.0.8.183/crops/1/symptom/1/children/102
        // console.log(name)
        
        React.useEffect(() => {            
             renderCytoscapeElement();
        },[])

        

    return (
        <div>
        <Alert show={show} variant="success">
            <Form.Control type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}/>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <hr />
        <div className="d-flex justify-content">
          <Button onClick={handleSubmit} variant="outline-success">
            Add Node
          </Button>
        </div>
      </Alert>
    <div id="cy" style={{ width: "100%", height: "625px", display: "block", backgroundColor: "black"}}></div>



    {!show && <Button variant = "success" onClick={() => setShow(true)} disabled = {disableBtn}>Add</Button>}

    <Button variant = "success" onClick={handleClick}>Tree Mode</Button>
    {flag == 1 ? <TreeData /> : ""}
    </div>
    )
}

export default TreeEdit
