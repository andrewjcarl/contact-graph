import Entity from './Entity'

export default class AccountContact extends Entity {
	constructor(props) {
		super(props)

		this.color = '#00AD68'
		this.label = `AccountContact: ${props.Id}`
		this.id = `accountcontact__${props.Id}`

		this.child = `contact__${props.ContactId}`
		this.parent = `account__${props.AccountId}`
	}
}