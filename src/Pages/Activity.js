import React, { Component } from 'react'
import Text from '../Components/Text';
import { MDBContainer } from 'mdbreact';
import { styles } from '../pagesStyle/Activity.css';
import { connect } from 'react-redux';
import Button from '../Components/Button';

class Activity extends Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <MDBContainer style={styles.pos}>
                <Button 
                    onClickBtn={this.increaseHandler}
                    color='primary'
                    btnText='Increment'
                />
                <Button 
                    onClickBtn={this.increaseHandler}
                    color='primary'
                    btnText='Decrement'
                />
                <Button 
                    onClickBtn={this.increaseHandler}
                    color='primary'
                    btnText='Add 5'
                />
                <Button 
                    onClickBtn={this.increaseHandler}
                    color='primary'
                    btnText='Subtract 5'
                />
            </MDBContainer>
        )
    }
}
const mapStateToProps = state => {
    return{
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(Activity)
