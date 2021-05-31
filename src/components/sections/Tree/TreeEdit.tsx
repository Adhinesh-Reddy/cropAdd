import React, {useState} from 'react'
import cytoscape from 'cytoscape'
import TreeAdd from './TreeAdd'
import { useHistory } from "react-router-dom";


var l1_sym = ["Bored Bolls"]


const TreeEdit = (props:any) => {

    const[flag,setFlag] = useState(0)
    // setFlag(props.flag)
    const history = useHistory();

  function handleClick() {
    history.push("/treeadd");
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

            var countId = 0
            cy.add([
                    {group: "nodes", data: {id: "root", label: "Cotton"}},
                ]);

            for(let l1 in l1_sym){
                cy.add([
                {group: 'nodes', data: {id: "l1"+countId,label: l1_sym[l1]}}, //clicked = false
                {group: 'edges', data: {source: "root", target: "l1"+countId++}}
            ])
            }  
            if(props.flag == 1){
                cy.add([
                    {group: 'nodes',data: {id: "demo", label: props.name}},
                    {group: 'edges', data: {source: "root", target: "demo"}}
                ])
            }          
            var layout = cy.layout({ name: 'breadthfirst', roots: ["root"], padding: 30 });
            layout.run();

            cy.on('tap','node',function(evt){
                var node = evt.target._private.data;
                console.log(node.label)
                
                
            })
            
        }


        //http://65.0.8.183/crops/1/symptom/level/1
        //http://65.0.8.183/crops/1/symptom/1/children/102
        
        React.useEffect(() => {            
             renderCytoscapeElement();
        },[])

    return (
        <>
    <div id="cy" style={{ width: "100%", height: "625px", display: "block", backgroundColor: "black"}}></div>
        <button type="button" onClick={handleClick}>
      Add
    </button>
    </>
    )
}

export default TreeEdit
