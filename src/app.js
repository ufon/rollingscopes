import React from 'react';
import ReactDOM from 'react-dom';
import './www/scss/main.scss';

class Hello extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        1 of 2
                    </div>
                    <div className="col">
                        1 of 2
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col">
                        1 of 3
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
