import Entity from './Entity'

export default class Deal extends Entity {
	constructor(props) {
		super(props)

		this.label = `Deal: ${props.dealID}`
		this.id = props.dealID
		this.color = '#00AD68'
		this.level = 2
	}
}