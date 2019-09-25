/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { MDBContainer, MDBAnimation, MDBRow } from 'mdbreact';
import { connect } from 'react-redux';
import Text from '../Components/Text';
import { styles } from '../pagesStyle/Activity.css';

import * as actionCreators from '../store/actions/actions';

import Button from '../Components/Button';

class Activity extends PureComponent {
  render() {
    const {
      onIncrementCounter,
      onDecrementCounter,
      onAddCounter,
      onSubtractCounter,
      ctr,
      onStoreResult,
      onDeleteResult,
      storedResults,
    } = this.props;
    return (<MDBAnimation type="zoomIn" delay="0.5s">
      <MDBRow md="12">
        <MDBContainer style={styles.btnCounterContainer}>
          <Text text="Counter Button Using Redux" color="white" fontSize="30px" fontWeight="bold" marginLeft="100px" />
          <Button onClickBtn={() => onIncrementCounter()} color="primary" btnText="Increment" />
          <Button onClickBtn={() => onDecrementCounter()} color="danger" btnText="Decrement" />
          <Button onClickBtn={() => onAddCounter()} color="primary" btnText="Add 5" />
          <Button onClickBtn={() => onSubtractCounter()} color="danger" btnText="Subtract 5" />
          <Text text={ctr} color="white" fontSize="50px" fontWeight="bold" marginLeft="280px" />
          <Button onClickBtn={() => onStoreResult(this.props.ctr)} color="danger" btnText="Store Result" />
          <ul>{storedResults.map((strResult) => (<li key={strResult.id} onClick={() => onDeleteResult(strResult.id)}>
            {strResult.value}
          </li>))}
          </ul>
        </MDBContainer>
      </MDBRow>
    </MDBAnimation>);
  }
}
const mapStateToProps = (state) => ({
  ctr: state.ctr.counter,
  storedResults: state.res.results,
});
const mapDispatchToProps = (dispatch) => ({
  onIncrementCounter: () => dispatch(actionCreators.increment()),
  onDecrementCounter: () => dispatch(actionCreators.decrement()),
  onAddCounter: () => dispatch(actionCreators.add(5)),
  onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
  onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
  onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Activity);
