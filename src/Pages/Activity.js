import React, { Component } from 'react'
import Text from '../Components/Text';
import { MDBContainer, MDBAnimation, MDBRow } from 'mdbreact';
import { styles } from '../pagesStyle/Activity.css';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import * as actionTypes from '../store/action';

class Activity extends Component {
    render() {
        const { onIncrementCounter, onDecrementCounter, onAddCounter, onSubtractCounter, ctr, onStoreResult, onDeleteResult } = this.props        
        return (
            <MDBAnimation type='zoomIn' delay='0.5s'>
                <MDBRow md='12'>
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
                    <Button 
                        onClickBtn={() => onStoreResult(this.props.ctr)}
                        color='danger'
                        btnText='Store Result'
                    />
                    <ul>
                        {this.props.storedResults.map(strResult => (
                            <li key={strResult.id} onClick={() => onDeleteResult(strResult.id)}>{strResult.value}</li>
                        ))}
                    </ul>
                    </MDBContainer>
                </MDBRow>
            </MDBAnimation>
        )
    }
}
const mapStateToProps = state => {
    return{
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 5}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Activity)
