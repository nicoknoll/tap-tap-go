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
            activeDialog: false
        }

        this.actions = [
            {
                label: "Close",
                onClick: this.reloadPage.bind(this)
            },
        ]
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
        return (
            <Layout
                style={{backgroundSize: 'cover', justifyContent: 'flex-start'}}>
                <FromToCard onSubmit={this.nextStep.bind(this, 2)}/>

                <div style={{display: this.state.step > 1 ? 'block': 'none'}}>
                    <ResultCard
                        date="13. Januar 2018"
                        max={100.21}
                        min={10.47}
                        current={51.25}
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
