import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import { Button } from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';


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
