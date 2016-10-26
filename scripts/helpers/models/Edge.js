/**
 * @module Edge
 */
export default class Edge {
	constructor(props) {
		this.from = props[0].id
		this.to = props[1].id
	}
}