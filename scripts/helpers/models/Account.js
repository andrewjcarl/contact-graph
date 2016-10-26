import Entity from './Entity'

export default class Account extends Entity {
	constructor(props) {
		super(props)

		this.label = `${props.accountType}: ${props.accountID} \n \
			${props.accountName || ''}`
			
		this.id = props.accountID;

		switch (props.accountType) {
			case 'Legal':
				this.color = '#E43137'
				this.level = 0
				break;

			default:
				this.color = '#1466A8'
				this.level = 1
				break;
		}

		console.log(this)
	}
}