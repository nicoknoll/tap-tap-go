import React from 'react';

import { Layout } from 'react-toolbox';

import FromToCard from './FromToCard';
import ResultCard from './ResultCard';
import AddressCard from './AddressCard';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1
        }
    }

    nextStep() {
        const state = this.state;
        state['step'] += 1;
        this.setState(state);
    }

    render() {
        return (
            <Layout
                style={{backgroundSize: 'cover', justifyContent: 'flex-start'}}>
                <FromToCard onSubmit={this.nextStep.bind(this)}/>

                <div style={{display: this.state.step > 1 ? 'block': 'none'}}>
                    <ResultCard onSubmit={this.nextStep.bind(this)}  />
                </div>

                <div style={{display: this.state.step > 2 ? 'block': 'none'}}>
                    <AddressCard />
                </div>
            </Layout>
        );

    }
}

export default App;
