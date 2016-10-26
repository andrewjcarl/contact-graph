/**
 * @module  Entity
 *
 * Basic structure for a node
 */
export default class Entity {
	constructor(properties) {
		this.properties = properties

		this._id 			= null;
		this._parent 	= null;
		this._child 	= null;
		this._color 	= 'blue';
		this._font 		= {
			color: 'white'
		}
		this._level 	= 0;
	}

	//	Node properties
	set color(c) { this._color = c }
	get color() { return this._color }

	//	label
	set label(l) { this._label = l }
	get label() { return this._label }

	//	font
	set font(f) { this._font = f}
	get font() {return this._font}

	//	level 
	set level(val) { this._level = val }
	get level() { return this._level }

	//	id
	set id(id) { this._id = id }
	get id() { return this._id }

	get Node() {
		return {
			id: this._id,
			label: this._label,
			color: this._color,
			font: this._font,
			level: this._level,
			shape: 'box',
			shapeProperties: {
				borderRadius: 2
			}
		}
	}
}