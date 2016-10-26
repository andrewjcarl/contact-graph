import Contact from './models/Contact'
import Deal from './models/Deal'
import Account from './models/Account'
import Edge from './models/Edge'

/**
 * @module  Data Models
 */
export default class {
	constructor(data) {
		this.root = data;

		this.entities = this.createEntites(this.root);
		this.edges = this.createEdges(this.root.relationships);

		this.flatEntities = {};
		this.nodes = [];
	}

	/**
	 * arrayToEntities
	 * Maps an array of data to an array of
	 * typed entities
	 */
	arrayToEntities(arr, entity) {
		return arr.map(item => new entity(item))
	}

	/**
	 * Takes the API model and maps to an array
	 * of multiple entity arrays
	 */
	createEntites(data) {
		var entities = {
			'accounts': [],
			'deals': []
		};

		var pushToArr = function(type, entity) {
			entities[type].push.apply(entities[type], this.arrayToEntities(data[type], entity))
		}.bind(this)

		for(var type in data) {
			switch (type) {
				case 'deals':
					pushToArr(type, Deal)
					break;
				case 'accounts':
					pushToArr(type, Account)
					break;
			}
		}
		return entities;
	}

	getNodes() {
		if (this.nodes.length > 0) {
			return this.nodes
		} else {
			this.flattenAndSetNodes()
			return this.nodes
		}
	}

	flattenAndSetNodes() {
		for(var type in this.entities) {
			this.nodes.push.apply(this.nodes, this.entities[type].map((entity) => {
				//	while we are retrieving nodes, we will add to flattened
				this.flatEntities[entity.Node.id] = entity;
				return entity.Node
			}))
		}
		return this.nodes;
	}

	createEdges(relationships) {
		var ret = [], i = relationships.length - 1
		while(i >= 0) {
			ret.push(
				new Edge(relationships[i])
			)
			i--;
		}
		return ret
	}

	getEdges() {
		return this.edges
	}
}
