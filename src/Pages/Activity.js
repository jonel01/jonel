import React, { Component } from 'react'
import Text from '../Components/Text';
import { MDBContainer } from 'mdbreact';
import { styles } from '../pagesStyle/Activity.css';
import { connect } from 'react-redux';
import Button from '../Components/Button';

class Activity extends Component {
    render() {
        const { onIncrementCounter, onDecrementCounter, onAddCounter, onSubtractCounter, ctr } = this.props        
        return (
            <MDBContainer style={styles.btnCounterContainer}>
                <Text
                    text='Counter Button Using Redux'
                    color='white'
                    fontSize='30px'
                    fontWeight='bold'
                    marginLeft='100px'
                />
                <Button 
                    onClickBtn={() => onIncrementCounter()}
                    color='primary'
                    btnText='Increment'
                />
                <Button 
                    onClickBtn={() => onDecrementCounter()}
                    color='danger'
                    btnText='Decrement'
                />
                <Button 
                    onClickBtn={() => onAddCounter()}
                    color='primary'
                    btnText='Add 5'
                />
                <Button 
                    onClickBtn={() => onSubtractCounter()}
                    color='danger'
                    btnText='Subtract 5'
                />
                <Text
                    text={ctr}
                    color='white'
                    fontSize='50px'
                    fontWeight='bold'
                    marginLeft='280px'
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
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Activity)
