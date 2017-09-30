import React from 'react';

class OrderItem extends React.Component {

	constructor(props) {
		super()

		this.state = {
			count: 0,
			symbol: props.symbol
		}
	}

	increase() {
		this.setState({
			count: this.state.count + 1
		});
	}

	decrease() {
		if (this.state.count === 0) return

		this.setState({
			count: this.state.count - 1
		});
	}

	render() {
		return (<div>
			<img src={this.state.symbol}/>
			<button onClick={this.decrease.bind(this)}>-</button>
			{this.state.count}
			<button onClick={this.increase.bind(this)}>+</button>
		</div>)
	}
}

export default OrderItem