import React from 'react';
import OrderItem from './OrderItem.js'
import { Grid, Row, Col } from 'react-flexbox-grid';

class OrderItems extends React.Component {

	constructor(props) {
		super()

		this.state = {
			items: props.items
		}
	}

	render() {

		return (

			<Row>
				<Col xs={12}>
				{
					this.state.items.map((item, index) => <Col key={index}> <OrderItem item={item}/> </Col>)
				}
				</Col>
			</Row>)
	}
}

export default OrderItems