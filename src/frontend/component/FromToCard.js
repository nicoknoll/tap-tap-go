import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import { Button } from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';
import OrderItems from './OrderItems'
require("../images/bottle.png")
require("../images/keg.png")
require("../images/can.png")

class FromToRow extends React.Component {
    constructor() {
        super();

        this.possibleValues = {
            'Berlin': 'Berlin',
            'Leipzig': 'Leipzig',
            'Essen': 'Essen'
        }

        this.state = {
            from: '',
            to: ''
        }
    }

    handleChange(key, value) {
        const state = this.state;
        state[key] = value;
        this.setState(state);
    }

    render () {
        return (
            <Row>
                <Col xs={6} md={6}>
                    <Autocomplete
                        direction="down"
                        selectedPosition="above"
                        label="From"
                        onChange={this.handleChange.bind(this, 'from')}
                        source={this.possibleValues}
                        value={this.state.from}
                        multiple={false}
                    />
                </Col>
                <Col xs={6} md={6}>
                    <div>
                        <Autocomplete
                            direction="down"
                            selectedPosition="above"
                            label="To"
                            onChange={this.handleChange.bind(this, 'to')}
                            source={this.possibleValues}
                            value={this.state.to}
                            multiple={false}
                        />
                    </div>
                </Col>
            </Row>
        );
    }
}

class FromToCard extends React.Component {
    constructor(props) {
        super()

        this.orderItems = [
            { symbol: '../images/bottle.png', capacity: 0.031, tooltip: 'Crate with 0,3L bottles.' },
			{ symbol: '../images/bottle.png', capacity: 0.031, tooltip: 'Crate with 0,5L bottles.' },
			{ symbol: '../images/bottle.png', capacity: 0.023, tooltip: 'Crate with 1L bottles.' },
			{ symbol: '../images/keg.png', capacity: 0.032, tooltip: 'Small keg.' },
			{ symbol: '../images/keg.png', capacity: 0.041, tooltip: 'Medium keg.' },
			{ symbol: '../images/keg.png', capacity: 0.062, tooltip: 'Big keg.' },
			{ symbol: '../images/can.png', capacity: 0.013, tooltip: 'Pallet with 0.3L cans.' },
			{ symbol: '../images/can.png', capacity: 0.018, tooltip: 'Pallet with 0.5L cans.' },
        ]
    }

    render() {
        const cardStyle = {
            background: '#eee',
            overflow: 'visible',
            padding: '40px 0px'
        };

        const fullWidth = {
            width: '100%'
        };

        const textCenter = {
            textAlign: 'center'
        };

        const headlineStyle = {
            fontFamily: 'Arbutus Slab'
        };

        return (
            <Card style={cardStyle}>
                <Grid fluid style={fullWidth}>
                    <Row>
                        <Col xs={12} style={textCenter}>
                            <h1 style={headlineStyle}>Tap Tap Go</h1>
                        </Col>
                    </Row>

                    <FromToRow />

                    <OrderItems items={this.orderItems}/>

                    <Row>
                        <Col xs={12} style={textCenter}>
                            <Button label='Find transporter' onClick={this.props.onSubmit.bind(this)} raised />
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}

export default FromToCard;
