import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCategory from '../../actions/IndexActions';
class Home extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCategory(2));
    }

    render() {
        console.log(this.props.category);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        1 of 2
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 sidebar">
                        
                    </div>
                    <div className="col-8">
                        123
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps (state) {
  return {
    category: state.app.category
  }
}

export default connect(mapStateToProps)(Home)