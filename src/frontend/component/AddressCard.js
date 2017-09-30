import React from 'react';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';

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
                        <Col xs={6}>
                            <Row>
                                <Col xs={12}>
                                    <h2>Abholadresse</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input label="Absender"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input
                                        label="Straße und Hausnummer"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Input label="PLZ"></Input>
                                </Col>
                                <Col xs={6}>
                                    <Input label="Stadt"></Input>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={6}>
                            <Row>
                                <Col xs={12}>
                                    <h2>Empfängeradresse</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input label="Empfänger"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Input
                                        label="Straße und Hausnummer"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Input label="PLZ"></Input>
                                </Col>
                                <Col xs={6}>
                                    <Input label="Stadt"></Input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '40px'}}>
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <Button label='Kostenpflichtig Reservieren'
                                    primary raised/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}

export default AddressCard;
