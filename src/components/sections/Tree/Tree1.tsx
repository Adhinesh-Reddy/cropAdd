import React from 'react'
import cytoscape from 'cytoscape'
import {useEffect} from 'react'
import {useState} from 'react'
import client from '../../../backend/client'
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function Tree1(props:any) {

    const history = useHistory();

    function handleClick() {
        history.push("/treeEdit");
    }
   

    var l1_sym = props.l1_sym
    var l2_sym = props.l2_sym
    var l3_sym = props.l3_sym
    

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
                    {group: "nodes", data: {id: l1_sym[l1].sid, label: l1_sym[l1].name, clicked: false}},
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
                    {group: "nodes", data: {id: l2_sym[l2].sid, label: l2_sym[l2].name, clicked: false}},
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
                                {group: "nodes", data: {id: l3_sym[l3].sid, label: l3_sym[l3].name, clicked: false}},
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
            

            
        }


        //http://65.0.8.183/crops/1/symptom/level/1
        //http://65.0.8.183/crops/1/symptom/1/children/102
        
        React.useEffect(() => {            
             renderCytoscapeElement();
        },[])
        

    




    return (
        <div id="cy" style={{ width: "100%", height: "625px", display: "block", backgroundColor: "black"}}>
            <Button variant = "success" onClick = {handleClick}>Edit</Button>
        </div>
    )

}

export default Tree1
