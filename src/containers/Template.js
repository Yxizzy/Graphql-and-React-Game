import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';


class Template extends Component {

    render() {
        return (
            <MuiThemeProvider>
            <div>
            <header>
                <h1> TicTac</h1>
            </header>
            <main>
                {this.props.children}
            </main>
            </div>
            </MuiThemeProvider>
        )
    }
}

export default Template;