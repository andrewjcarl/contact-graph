import React, {Component} from 'react';
import vis from 'vis'

export default class Graph extends Component {
	constructor(props) {	
		super(props);

		var nodes = new vis.DataSet(props.nodes)
		var edges = new vis.DataSet(props.edges)

		this.data = {
			nodes: nodes,
			edges: edges
		}

		this.container = null;

		//	levels: http://visjs.org/examples/network/layout/hierarchicalLayoutUserdefined.html
		this.graphOptions = {
			edges: {
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.4
        }
      },
			layout: {
				hierarchical: {
					direction: "UD"
				}
			}
		}
	}

	componentDidMount() {
		this.container = document.getElementById('graph_root');
		var network = new vis.Network(this.container, this.data, this.graphOptions);
	}

	render() {
		return (
			<div>
				<h3>Hi</h3>
				<div id="graph_root"></div>
			</div>
		)
	}
}