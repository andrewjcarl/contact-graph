import Entity from './Entity'

export default class Contact extends Entity {
	constructor(props) {
		super(props)

		this.color = '#FBB01B'
		this.label = `Contact: ${props.FirstName}`
		this.id = `contact__${props.Id}`
	}
}