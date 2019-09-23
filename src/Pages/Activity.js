import React, { Component } from 'react'
import Text from '../Components/Text';
import { MDBContainer, MDBAnimation, MDBRow } from 'mdbreact';
import { styles } from '../pagesStyle/Activity.css';
import { connect } from 'react-redux';
import Button from '../Components/Button';

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
                        onClickBtn={() => onStoreResult()}
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
        ctr: state.counter,
        storedResults: state.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 5}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 5}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Activity)
