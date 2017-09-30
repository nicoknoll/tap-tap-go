import React from 'react';
import OrderItem from './OrderItem.js'

class OrderItems extends React.Component {

	constructor(props) {
		super()

		this.state = {
			items: props.items
		}
	}

	render() {
		return (<div>
			{
				this.state.items.map((item) => <OrderItem symbol={item.symbol}/>)
			}
			</div>)
	}
}

export default OrderItems