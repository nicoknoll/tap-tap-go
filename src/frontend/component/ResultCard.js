import React from 'react';
import { Button, IconButton } from 'react-toolbox/lib/button'; // Bundled component import
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from 'react-toolbox/lib/card';


class ResultCard extends React.Component {
    render() {
        const cardStyle = {
            overflow: 'visible',
            padding: '40px 0px'
        };

        const fullWidth = {
            width: '100%'
        };

        const textCenter = {
            textAlign: 'center'
        };

        return (
            <Card style={cardStyle}>
                <Grid fluid style={fullWidth}>
                    <Row>
                        <Col xs={12} style={textCenter}>
                            <IconButton icon='keyboard_arrow_left' />
                            <Button>13. Januar 2018</Button>
                            <IconButton icon='keyboard_arrow_right' />
                        </Col>
                    </Row>

                    <Grid fluid style={{width: '100%'}}>
                        <Row style={{textAlign: 'center', margin: '50px 0px'}}>
                            <Col xs={12}>
                                <span style={{color: '#777'}}>Aktuell:</span><br />
                                <span style={{fontSize: '80px'}}>50€</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} style={{textAlign: 'right'}}><span style={{color: '#777'}}>min.:</span><br/><b>10€</b></Col>
                            <Col xs={10}>
                                <div style={{marginTop: '10px', width: '100%', height: '35px', background: '#eee', borderRadius: '2px', overflow: 'hidden'}}>
                                    <div style={{width: '50%', height: '35px', background: '#5fb800'}} />
                                </div>
                            </Col>
                            <Col xs={1}><span style={{color: '#777'}}>max.:</span><br/><b>100€</b></Col>
                        </Row>
                    </Grid>

                    <Row style={{marginTop: '40px'}}>
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <Button label='Auswählen' onClick={this.props.onSubmit.bind(this)} primary raised />
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}

export default ResultCard;
