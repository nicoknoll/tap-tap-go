import React from 'react';

class OrderItem extends React.Component {

	constructor(props) {
		super()

		this.data = {
			symbol: props.symbol,
			capacity: props.capacity || 0,
			tooltip: props.tooltip || "BEER"
		}

		this.state = {
			count: 0,
			summedCapacity: 0
		}
	}

	increase() {
		this.setState({
			count: this.state.count + 1,
			summedCosts: this.state.summedCapacity + this.data.capacity
		});
	}

	decrease() {
		if (this.state.count === 0) return

		this.setState({
			count: this.state.count - 1,
			summedCosts: this.state.summedCapacity - this.data.capacity
		});
	}

	render() {
		return (<div>
			<img style={{display: 'block'}} src={this.data.symbol}/>
			<button onClick={this.decrease.bind(this)}>-</button>
			{this.state.count}
			<button onClick={this.increase.bind(this)}>+</button>
		</div>)
	}
}

export default OrderItem