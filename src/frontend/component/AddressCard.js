import React from 'react';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';

class AddressFormCol extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            street: '',
            code: '',
            city: '',
        }
    }

    handleChange(key, value) {
        const state = this.state;
        state[key] = value;
        this.setState(state);
    }


    render() {
        return (
            <Col xs={6}>
                <Row>
                    <Col xs={12}>
                        <h2>{this.props.label}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Input label="Name / Company"  onChange={this.handleChange.bind(this, 'name')} value={this.state.name}></Input>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Input
                            label="Street" onChange={this.handleChange.bind(this, 'street')} value={this.state.street}></Input>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Input label="Postal Code" onChange={this.handleChange.bind(this, 'code')} value={this.state.code}></Input>
                    </Col>
                    <Col xs={6}>
                        <Input label="City" onChange={this.handleChange.bind(this, 'city')} value={this.state.city}></Input>
                    </Col>
                </Row>
            </Col>
        );
    }
}



class AddressCard extends React.Component {
    render() {
        return (
            <Card style={{
                background: '#eee',
                overflow: 'visible',
                padding: '40px 0px'
            }}>
                <Grid fluid style={{width: '100%'}}>
                    <Row>
                        <AddressFormCol label="Sender address" />
                        <AddressFormCol label="Receiver address" />
                    </Row>

                    <Row style={{marginTop: '40px'}}>
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <Button label='Continue' onClick={this.props.onSubmit.bind(this)} primary raised/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}

export default AddressCard;
