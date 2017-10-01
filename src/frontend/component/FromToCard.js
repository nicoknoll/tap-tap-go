import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import { Button } from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';
import OrderItems from './OrderItems'
require("../images/bottle_s.png")
require("../images/bottle_m.png")
require("../images/bottle_l.png")
require("../images/keg_s.png")
require("../images/keg_m.png")
require("../images/keg_l.png")
require("../images/can_m.png")
require("../images/can_l.png")
require("../images/logo.png")

class FromToRow extends React.Component {
    constructor() {
        super();

        this.possibleValues = {
            'Berlin': 'Berlin',
			'Hamburg': 'Hamburg',
            'München': 'München',
            'Köln': 'Köln',
            'Stuttgart': 'Stuttgart',
            'Düsseldorf': 'Düsseldorf',
            'Dortmund': 'Dortmund',
            'Essen': 'Essen',
            'Leipzig': 'Leipzig',
            'Bremen': 'Bremen'
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
            { symbol: '../images/bottle_s.png', capacity: 0.031, tooltip: 'Crate with 0,3L bottles.' },
			{ symbol: '../images/bottle_m.png', capacity: 0.031, tooltip: 'Crate with 0,5L bottles.' },
			{ symbol: '../images/bottle_l.png', capacity: 0.023, tooltip: 'Crate with 1L bottles.' },
			{ symbol: '../images/keg_s.png', capacity: 0.032, tooltip: 'Small keg.' },
			{ symbol: '../images/keg_m.png', capacity: 0.041, tooltip: 'Medium keg.' },
			{ symbol: '../images/keg_l.png', capacity: 0.062, tooltip: 'Big keg.' },
			{ symbol: '../images/can_m.png', capacity: 0.013, tooltip: 'Pallet with 0.3L cans.' },
			{ symbol: '../images/can_l.png', capacity: 0.018, tooltip: 'Pallet with 0.5L cans.' },
        ]
        this.props = props

        this.state = {
            orderCapacity: 0
        }
    }

    updateCapacity(capacity) {
        this.props.onCapacityChange(capacity);
        this.setState({
			orderCapacity: capacity
        });
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
                            <img src='../images/logo.png' style={{height: 'auto', width: '500px'}} />
                        </Col>
                    </Row>

                    <FromToRow />

                    <OrderItems capacityChange={this.updateCapacity.bind(this)} items={this.orderItems}/>

                    <Row style={{marginTop: '40px'}}>
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
