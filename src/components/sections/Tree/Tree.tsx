import React from 'react'
import cytoscape from 'cytoscape'
import {useEffect} from 'react'
import axios from 'axios'

var l1_sym = ["Bored Bolls", "Premature shedding of bolls","Premature opening of bolls","Fed bolls but holes not visible","Spots on bolls","Colour of bolls changing","Delay in maturity","Retarded growth of bolls","Bolls failed to opened","Presence of larvae/ insects on bolls"]
var l2_sym = [[
            {name: "Yellow or white spots on bolls", parent: "Bored Bolls"},
            {name: "Spherical or elliptical purple spots on bolls", parent: "Bored Bolls"},
            {name: "Small water soaked circular reddish brown depressed spots appear on the bolls", parent: "Bored Bolls"},
            {name: "Dark black irregular spots", parent: "Bored Bolls"}
        ],
        [
            {name: "l2_sym21", parent: "Premature shedding of bolls"},
            {name: "l2_sym22", parent: "Premature shedding of bolls"},
            {name: "l2_sym23", parent: "Premature shedding of bolls"},
            {name: "l2_sym24", parent: "Premature shedding of bolls"}
        ]
        ]

function Tree() {
    
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

        // level1
        var countId = 0;
        cy.add([

            { group: 'nodes', data: {id: "root", label: 'Bolls'}},
            
        ]);

        for(let l1 in l1_sym){
            cy.add([
                {group: 'nodes', data: {id: "l1"+countId,label: l1_sym[l1]}}, //clicked = false
                {group: 'edges', data: {source: "root", target: "l1"+countId++}}
            ])
        }

            var layout = cy.layout({ name: 'breadthfirst', roots: ["root"], padding: 30 });
            layout.run();
        console.log(countId)
            
        //level1

        //level2
        var flag = [0,0,0,0,0,0,0,0,0,0];
        cy.on('tap','node',function(evt){
            var node = evt.target._private.data.label;
            console.clear();
            // console.log(node); 

            var count = 0;
            for(let l1 in l1_sym){
                if(l1_sym[l1] != node){
                    count+=1;
                }
                else{

                    switch(node+flag[count]){
                        case l1_sym[count]+"0":
                            for(let l2 in l2_sym[count]){
                                cy.add({
                                    group: 'nodes',
                                    data: {id: "l2"+count+l2,label: l2_sym[count][l2].name}
                            })
                            }
                            for (let l2 in l2_sym[count]) {
                            cy.add({
                            group: 'edges',
                            data: {source: "l1"+count, target: "l2"+count+l2}
                            })
                            }
                            var layout = cy.layout({ name: 'breadthfirst' });
                            layout.run()
                            flag[count] = 1;
                            break;
            //                 case l1_sym[count]+"1":
            //                 for(let l2 in l2_sym[count]){
            //                     cy.remove('#'+l2_sym[count][l2].name)
            //                 }
            //                 console.log(count)
            //                 flag[count] = 0;
            //                 break;
                            default:
                            console.log("bad work");
                    }
                    count = 0;
                    break;
                }
            }
        })
        //level2

    }



    useEffect(()=>{
        renderCytoscapeElement();
    },[]);



    return (
        <div id="cy" style={{ width: "100%", height: "625px", display: "block", backgroundColor: "white"}}></div>
    
    )
}

export default Tree
