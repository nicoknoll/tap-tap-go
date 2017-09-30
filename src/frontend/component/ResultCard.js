import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button'; // Bundled component import
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card} from 'react-toolbox/lib/card';


class ResultCard extends React.Component {
    getColorByPercent(percent) {
        var a = (100 - percent) / 100,
            b = 120 * a,
            c = b;

        return 'hsl(' + c + ', 100%, 50%)';
    }

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

        const barWrapperStyle = {
            marginTop: '10px',
            width: '100%',
            height: '35px',
            background: '#eee',
            borderRadius: '2px',
            overflow: 'hidden'
        };

        const barFilled =100 - (this.props.current / (this.props.max - this.props.min)  * 100);

        const barStyle = {
            width: `${barFilled}%`,
            height: '35px',
            background: this.getColorByPercent(barFilled)
        };

        return (
            <Card style={cardStyle}>
                <Grid fluid style={fullWidth}>
                    <Row>
                        <Col xs={12} style={textCenter}>
                            <IconButton icon='keyboard_arrow_left'/>
                            <Button>{this.props.date}</Button>
                            <IconButton icon='keyboard_arrow_right'/>
                        </Col>
                    </Row>

                    <Grid fluid style={fullWidth}>
                        <Row style={{textAlign: 'center', margin: '50px 0px'}}>
                            <Col xs={12}>
                                <span
                                    style={{color: '#777'}}>Aktuell:</span><br />
                                <span style={{fontSize: '80px'}}>{Math.round((this.props.current * 100))/100}€</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} style={{textAlign: 'right'}}>
                                <span style={{color: '#777'}}>min.:</span><br/>
                                <b>{Math.round((this.props.min * 100))/100}€</b>
                            </Col>
                            <Col xs={10}>
                                <div style={barWrapperStyle}>
                                    <div style={barStyle}/>
                                </div>
                            </Col>
                            <Col xs={1}>
                                <span style={{color: '#777'}}>max.:</span><br/>
                                <b>{Math.round((this.props.max * 100))/100}€</b>
                            </Col>
                        </Row>
                    </Grid>

                    <Row style={{marginTop: '40px'}}>
                        <Col xs={12} style={{textAlign: 'center'}}>
                            <Button label='Auswählen'
                                    onClick={this.props.onSubmit.bind(this)}
                                    primary raised/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}

export default ResultCard;
