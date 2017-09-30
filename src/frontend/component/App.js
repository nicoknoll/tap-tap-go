import React from 'react';
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Layout } from 'react-toolbox';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Autocomplete from 'react-toolbox/lib/autocomplete';

const source = {
    'Berlin': 'Berlin',
    'Leipzig': 'Leipzig',
    'Essen': 'Essen'
};

class AutocompleteTest extends React.Component {
    state = {
        from: '',
        to: ''
    }

    handleChange = (value) => {
        this.setState({countries: value});
    };

    render () {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={6}>
                            <Autocomplete
                                direction="down"
                                selectedPosition="above"
                                label="Von"
                                onChange={this.handleChange}
                                source={source}
                                value={this.state.from}
                                multiple={false}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <Autocomplete
                                direction="down"
                                selectedPosition="above"
                                label="Nach"
                                onChange={this.handleChange}
                                source={source}
                                value={this.state.to}
                                multiple={false}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const App = () => (
    <Layout>
      <h1>Tap Tap Go</h1>
    <section style={{ padding: 20 }}>
        <AutocompleteTest />
      <SuccessButton label='Success' primary raised />
      <Button label='Primary Button' primary />
    </section>
  </Layout>
);

export default App;
