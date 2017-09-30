import React from 'react';

import { Layout } from 'react-toolbox';

import FromToCard from './FromToCard';
import ResultCard from './ResultCard';
import AddressCard from './AddressCard';
import CreditCardCard from './CreditCardCard';

import Dialog from 'react-toolbox/lib/dialog';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            activeDialog: false,
            capacity: 0,
        }

        this.actions = [
            {
                label: "Close",
                onClick: this.reloadPage.bind(this)
            },
        ]
    }

    handleChange(key, value) {
        const state = Object.assign({}, this.state);
        state[key] = value;
        console.log(state)
        this.setState(state);
    }

    reloadPage() {
        window.location.reload();
    }

    toggleDialog() {
        this.setState({activeDialog: !this.state.activeDialog});
    }

    getFinalDialog() {
        return (
            <Dialog
                actions={this.actions}
                active={this.state.activeDialog}
                onEscKeyDown={this.toggleDialog.bind(this)}
                onOverlayClick={this.toggleDialog.bind(this)}
                title='Thank you for your order!'
            >
                <p>We will let you know the final price as soon as possible.</p>
            </Dialog>
        );
    }

    nextStep(moveTo) {
        const state = this.state;

        if(moveTo) {
            state['step'] = moveTo;
        } else {
            state['step'] += 1;
        }

        this.setState(state);
    }

    render() {
        const truckSize = 2.5;
        const truckPrice = 259;

        const truckLoad = 0.1;
        let newTruckLoad = truckLoad + this.state.capacity;

        const min = truckPrice / truckSize * this.state.capacity;
        const max = truckPrice;
        const current = truckPrice / newTruckLoad * this.state.capacity;

        const percent =  truckPrice / newTruckLoad;

        return (
            <Layout
                style={{backgroundSize: 'cover', justifyContent: 'flex-start'}}>
                <FromToCard
                    onSubmit={this.nextStep.bind(this, 2)}
                    onCapacityChange={this.handleChange.bind(this, 'capacity')}
                />


                <div style={{display: this.state.step > 1 ? 'block': 'none'}}>
                    <ResultCard
                        date="13. Januar 2018"
                        max={max}
                        min={min}
                        current={current}
                        percent={percent}
                        onSubmit={this.nextStep.bind(this, 3)} />
                </div>

                <div style={{display: this.state.step > 2 ? 'block': 'none'}}>
                    <AddressCard onSubmit={this.nextStep.bind(this, 4)} />
                </div>

                <div style={{display: this.state.step > 3 ? 'block': 'none'}}>
                    <CreditCardCard onSubmit={this.toggleDialog.bind(this)} />
                </div>

                {this.getFinalDialog()}
            </Layout>
        );

    }
}

export default App;
