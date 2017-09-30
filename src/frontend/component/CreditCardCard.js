import React from 'react';

import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';

import CreditCard from 'react-credit-card';

class CreditCardCard extends React.Component {
    constructor() {
        super();
        this.state = {
            cvc: '',
            name: '',
            number: '',
            expiryMonth: '',
            expiryYear: '',
        }
    }

    handleChange(key, value) {
        const state = this.state;
        state[key] = value;
        this.setState(state);
    }

    render() {
        return (
            <Card style={{
                background: '#eee',
                overflow: 'visible',
                padding: '40px 0px'
            }}>
                <Grid fluid style={{width: '100%'}}>
                    <Row>
                        <Col xs={12}>
                            <h2>Payment details</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <CreditCard
                                cvc = {this.state.cvc}
                                name = {this.state.name}
                                expiry = {`${this.state.expiryMonth}/${this.state.expiryYear}`}
                                number = {this.state.number}
                                focused = {'name'} />
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={12}>
                                    <Input label="Name on Card" onChange={this.handleChange.bind(this, 'name')} value={this.state.name}></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input label="Card Number" onChange={this.handleChange.bind(this, 'number')} value={this.state.number}></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Input label="Expiry Month" maxLength={2} onChange={this.handleChange.bind(this, 'expiryMonth')} value={this.state.expiryMonth}></Input>
                                </Col>
                                <Col xs={6}>
                                    <Input label="Expiry Year" maxLength={4} onChange={this.handleChange.bind(this, 'expiryYear')} value={this.state.expiryYear}></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4}>
                                    <Input label="CVC" onChange={this.handleChange.bind(this, 'cvc')} value={this.state.cvc}></Input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '40px'}}>
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <Button label='Confirm Order'
                                    onClick={this.props.onSubmit.bind(this)} primary raised/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}

export default CreditCardCard;
