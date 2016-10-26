import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Graph from './Graph';
import Transformer from './helpers/Transformer'
import Data from './helpers/Data'

var data, transformer, nodes, edges

data = Data.getData()

transformer = new Transformer(data);
nodes = transformer.getNodes()
edges = transformer.getEdges()

export default class App extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<Graph nodes={ nodes } edges={ edges } />
  		</div>
    );
  }
}
