import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

class OrderItem extends React.Component {

	constructor(props) {
		super()

		this.data = {
			symbol: props.item.symbol,
			capacity: props.item.capacity || 0,
			tooltip: props.item.tooltip || "BEER"
		}

		this.state = {
			count: 0,
			summedCapacity: 0
		}

		this.updateCapacity = props.capacityChange
	}

	increase() {
		this.setState({
			count: this.state.count + 1,
			summedCosts: this.state.summedCapacity + this.data.capacity
		});

		this.updateCapacity(this.data.capacity)
	}

	decrease() {
		if (this.state.count === 0) return

		this.setState({
			count: this.state.count - 1,
			summedCosts: this.state.summedCapacity - this.data.capacity
		});

		this.updateCapacity((-1) * this.data.capacity)
	}

	render() {
		const imageStyle = {
			width: '50px',
			height: '50px'
		}

		return (<div>
			<div  style={{display: 'block', margin: '15px 0px'}}>
				<Tooltip content={this.data.tooltip}>
					<img style={imageStyle} src={this.data.symbol}/>
				</Tooltip>
			</div>
			<button onClick={this.decrease.bind(this)}>-</button>
			<span> {this.state.count} </span>
			<button onClick={this.increase.bind(this)}>+</button>
		</div>)
	}
}

export default OrderItem
