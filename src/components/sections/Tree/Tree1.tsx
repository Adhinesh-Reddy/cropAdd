import React, {useState, useEffect, useRef} from 'react'
import cytoscape from 'cytoscape'
import client from '../../../backend/client'
import { useHistory } from "react-router-dom";
import {Alert, Form, Button} from 'react-bootstrap'

function Tree1(props:any) {

    const history = useHistory();
    const cyRef = useRef();
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(true);
    const [disableBtn, setDisableBtn] = useState(true)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [parent,setParent] = useState("")
    const [flag, setFlag] = useState(0)
    const [parentNode, setParentNode] = useState();
    const [nodeData, setNodeData] = useState();

    
    
    var l1_sym = props.l1_sym
    var l2_sym = props.l2_sym
    var l3_sym = props.l3_sym
    
    
    function handleEdit() {
        for(let l2 in l2_sym){
            cyRef.current.remove('#'+l2_sym[l2].sid)
        }
        for(let l3 in l3_sym){
            cyRef.current.remove('#'+l3_sym[l3].sid)
        }

        for(let l2 in l2_sym){
            cyRef.current.add([
                {group: "nodes", data: {id: l2_sym[l2].sid, label: l2_sym[l2].name, level: l2_sym[l2].level,parentName: l2_sym[l2].parentId}},
                {group: "edges", data: {source: l2_sym[l2].parentId, target: l2_sym[l2].sid}}
            ])
        }
        
        for(let l3 in l3_sym){
            cyRef.current.add([
                {group: "nodes", data: {id: l3_sym[l3].sid, label: l3_sym[l3].name, level: l3_sym.level, parentName: l3_sym[l3].parentId}},
                {group: "edges", data: {source: l3_sym[l3].parentId, target: l3_sym[l3].sid}}
            ])
        }   
        
        
        cyRef.current.removeListener('tap');
        
        cyRef.current.on('tap','node', function(evt){
            var node = evt.target._private.data;
            setDisableBtn(false)
            setParent(node.id)
            setParentNode(node.parent)
            setNodeData(node)
            // console.log(node)
        })
        var layout = cyRef.current.layout({ name: 'breadthfirst', roots: ["root"] });
        layout.run();
        cyRef.current.zoom({
            level: 0.50, // the zoom level
            renderedPosition: { x: 760, y: 315}
        });

        
        setShow(true);
        setShow1(false);
    }
    
    function handleAdd() {
        setShow1(false)
        
        
        cyRef.current.add([
            {group: 'nodes', data: {id: id, label: name}},
            {group: 'edges', data: {source: parent, target: id}}
        ])
        var layout = cyRef.current.layout({ name: 'breadthfirst', roots: ["root"] });
        layout.run();
        setId("")
        setName("")
        setDisableBtn(true)
    }

    function handleUpdate() {
        setShow1(false)

        // cyRef.current.remove('#'+parent)
        
        // console.log(nodeData)
        
        if(nodeData.level == 1){
            for(let l1 in l1_sym){
                if(l1_sym[l1].sid == nodeData.id){
                    l1_sym[l1].name = name;
                }
            }
        }
        else if(nodeData.level == 2){
            for(let l2 in l2_sym){
                if(l2_sym[l2].sid == nodeData.id){
                    l2_sym[l2].name = name;
                }
            }
        }
        else{
            for(let l3 in l3_sym){
                if(l3_sym[l3].sid == nodeData.id){
                    l3_sym[l3].name = name;
                }
            }
        }
        
        for(let l1 in l1_sym){
            cyRef.current.remove('#'+l1_sym[l1].sid)
        }
        for(let l2 in l2_sym){
            cyRef.current.remove('#'+l2_sym[l2].sid)
        }
        for(let l3 in l3_sym){
            cyRef.current.remove('#'+l3_sym[l3].sid)
        }

        for(let l1 in l1_sym){
            cyRef.current.add([
                {group: "nodes", data: {id: l1_sym[l1].sid, label: l1_sym[l1].name, level: l1_sym[l1].level, parentName: l1_sym[l1].parentId}},
                {group: "edges", data: {source: "root", target: l1_sym[l1].sid}}
            ])
        }

        for(let l2 in l2_sym){
            cyRef.current.add([
                {group: "nodes", data: {id: l2_sym[l2].sid, label: l2_sym[l2].name, level: l2_sym[l2].level,parentName: l2_sym[l2].parentId}},
                {group: "edges", data: {source: l2_sym[l2].parentId, target: l2_sym[l2].sid}}
            ])
        }
        
        for(let l3 in l3_sym){
            cyRef.current.add([
                {group: "nodes", data: {id: l3_sym[l3].sid, label: l3_sym[l3].name, level: l3_sym.level, parentName: l3_sym[l3].parentId}},
                {group: "edges", data: {source: l3_sym[l3].parentId, target: l3_sym[l3].sid}}
            ])
        }   
        
        var layout = cyRef.current.layout({ name: 'breadthfirst', roots: ["root"] });
        layout.run();
        cyRef.current.zoom({
            level: 0.50, // the zoom level
            renderedPosition: { x: 760, y: 315}
        });
        setName("")
        setDisableBtn(true)
    }

    function handleDelete(){
        cyRef.current.remove('#'+nodeData.id);
        
    }
    
    function handleTreeMode(){
        cyRef.current.removeListener('tap');
        
        for(let l2 in l2_sym){
            cyRef.current.remove('#'+l2_sym[l2].sid)
        }
        for(let l3 in l3_sym){
            cyRef.current.remove('#'+l3_sym[l3].sid)
        }
        var layout = cyRef.current.layout({ name: 'breadthfirst', roots: ["root"] });
        layout.run();
        cyRef.current.on('tap', 'node', function(evt){
                 var node = evt.target._private.data;
                //  console.log(node.label)

                

                 if(node.clicked == false){
                    //adding elements
                    //level2
                 for(let l1 in l1_sym){
                     if(node.label == l1_sym[l1].name){
                     for(let l2 in l2_sym){
                         if(l2_sym[l2].parentId == node.id){
                cyRef.current.add([
                    {group: "nodes", data: {id: l2_sym[l2].sid, label: l2_sym[l2].name, clicked: false, parentName: l2_sym[l2].parentId}},
                    {group: "edges", data: {source: node.id, target: l2_sym[l2].sid}},
                ])
            }
            }
                cyRef.current.$('#'+node.id).data('clicked',true);

            }
                }
                //level2
                //level3
                for(let l2 in l2_sym){
                    if(node.label == l2_sym[l2].name){
                        for(let l3 in l3_sym){
                            if(l3_sym[l3].parentId == node.id){
                            cyRef.current.add([
                                {group: "nodes", data: {id: l3_sym[l3].sid, label: l3_sym[l3].name, clicked: false, parentName: l3_sym[l3].parentId}},
                                {group: "edges", data: {source: node.id, target: l3_sym[l3].sid}},
                            ])
                            }
                        }
                        cyRef.current.$('#'+node.id).data('clicked',true);
                    }
                }
                //level3
                }
                else{
                    //removing elements
                    //removing level2
                    for(let l2 in l2_sym){
                        if(l2_sym[l2].parentId == node.id){
                        cyRef.current.remove('#'+l2_sym[l2].sid)
                        
                        }
                    }
                    //removing level3
                    for(let l3 in l3_sym){
                        if(l3_sym[l3].parentId == node.id){
                            cyRef.current.remove('#'+l3_sym[l3].sid)
                        }
                    }

                    cyRef.current.$('#'+node.id).data('clicked',false);
                }

                 
                 var layout = cyRef.current.layout({ name: 'breadthfirst', roots: ["root"] });
                 layout.run();
               
            })
        setShow(false);
        setShow1(true);
    }

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


            // level 1
                cy.add([
                    {group: "nodes", data: {id: "root", label: "Cotton"}},
                ]);

                for(let l1 in l1_sym){
                cy.add([
                    {group: "nodes", data: {id: l1_sym[l1].sid, label: l1_sym[l1].name, level: l1_sym[l1].level,clicked: false, parentName: l1_sym[l1].parentId}},
                    {group: "edges", data: {source: "root", target: l1_sym[l1].sid}},
                ])
            }

            var layout = cy.layout({ name: 'breadthfirst', roots: ["root"], padding: 30 });
            layout.run();
            // level 1
            

            cy.on('tap', 'node', function(evt){
                 var node = evt.target._private.data;
                //  console.log(node.label)

                

                 if(node.clicked == false){
                    //adding elements
                    //level2
                 for(let l1 in l1_sym){
                     if(node.label == l1_sym[l1].name){
                     for(let l2 in l2_sym){
                         if(l2_sym[l2].parentId == node.id){
                cy.add([
                    {group: "nodes", data: {id: l2_sym[l2].sid, label: l2_sym[l2].name, level: l2_sym[l2].level,clicked: false}},
                    {group: "edges", data: {source: node.id, target: l2_sym[l2].sid}},
                ])
            }
            }
                cy.$('#'+node.id).data('clicked',true);

            }
                }
                //level2
                //level3
                for(let l2 in l2_sym){
                    if(node.label == l2_sym[l2].name){
                        for(let l3 in l3_sym){
                            if(l3_sym[l3].parentId == node.id){
                            cy.add([
                                {group: "nodes", data: {id: l3_sym[l3].sid, label: l3_sym[l3].name, level: l3_sym[l3].level,clicked: false}},
                                {group: "edges", data: {source: node.id, target: l3_sym[l3].sid}},
                            ])
                            }
                        }
                        cy.$('#'+node.id).data('clicked',true);
                    }
                }
                //level3
                }
                else{
                    //removing elements
                    //removing level2
                    for(let l2 in l2_sym){
                        if(l2_sym[l2].parentId == node.id){
                        cy.remove('#'+l2_sym[l2].sid)
                        
                        }
                    }
                    //removing level3
                    for(let l3 in l3_sym){
                        if(l3_sym[l3].parentId == node.id){
                            cy.remove('#'+l3_sym[l3].sid)
                        }
                    }

                    cy.$('#'+node.id).data('clicked',false);
                }

                 
                 var layout = cy.layout({ name: 'breadthfirst', roots: ["root"] });
                 layout.run();
               
            })

            // cy.removeListener('tap');
            

            cyRef.current = cy            
        }


        //http://65.0.8.183/crops/1/symptom/level/1
        //http://65.0.8.183/crops/1/symptom/1/children/102
        
        React.useEffect(() => {            
             renderCytoscapeElement();
        },[])
        

    




    return (
        <>
        <Alert show={show1 && show} variant="success">
            {/* <Form.Control type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}/> */}
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <hr />
        <div className="d-flex justify-content">
          <Button onClick={handleUpdate} variant="outline-success">
            Add Node
          </Button>
        </div>
      </Alert>
        <div id="cy" style={{ width: "100%", height: "625px", display: "block", backgroundColor: "black"}}></div>
            {!show && <Button variant = "success" onClick = {handleEdit}>Edit</Button>}
            {!show1 && <Button variant = "success" onClick={() => setShow1(true)} disabled = {disableBtn}>Add</Button>}
            {!show1 && <Button variant = "success" onClick={() => setShow1(true)} disabled = {disableBtn}>Update</Button>}
            {!show1 && <Button variant = "success" onClick={handleDelete} disabled = {disableBtn}>Update</Button>}
            {!show1 && <Button variant = "success" onClick={handleTreeMode} disabled = {!disableBtn}>Tree Mode</Button>}
        </>
    )

}

export default Tree1
