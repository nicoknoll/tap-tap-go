import React from 'react';
import OrderItem from './OrderItem.js'
import { Grid, Row, Col } from 'react-flexbox-grid';

class OrderItems extends React.Component {

	constructor(props) {
		super()

		this.data = {
			items: props.items
		}

		this.state = {
			capacity: 0
		}

		this.capacityCallback = props.capacityChange
	}

	updateCapacity = (capacityChange) => {
		var newCapacity = this.state.capacity + capacityChange
		this.setState({
			capacity: newCapacity
		})

		this.capacityCallback(newCapacity)
	}

	render() {
		return (

			<Row style={{justifyContent: 'center', textAlign: 'center'}}>
				{
					this.data.items.map((item, index) => <Col xs={1} key={index}>
						<OrderItem capacityChange={this.updateCapacity.bind(this)} item={item}/>
					</Col>)
				}
			</Row>)
	}
}

export default OrderItems
