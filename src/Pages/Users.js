/* eslint-disable react/state-in-constructor */
import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Text from '../Components/Text';
import { styles } from '../pagesStyle/Users.css';

class Users extends PureComponent {
    state = {
      users: [],
    }

    async componentDidMount() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const user = await res.json();
      this.setState({
        users: user,
      });
    }

    render() {
      const { users } = this.state;
      console.log(users);
      return (
        <MDBContainer style={styles.dataContainer}>
          <MDBRow md="12">
            <MDBRow md="12">
              <Text
                text="Fetching Users Data"
                color="white"
                marginLeft="425px"
                fontWeight="bold"
                fontSize="28px"
              />
            </MDBRow>
            <MDBRow md="12">
              <MDBCol md="3">
                <Text
                  text="Name"
                  color="white"
                  marginLeft="-555px"
                  marginTop="60px"
                  fontWeight="bold"
                  fontSize="20px"
                />
              </MDBCol>
              <MDBCol md="3">
                <Text
                  text="Username"
                  color="white"
                  marginLeft="-385px"
                  marginTop="60px"
                  fontWeight="bold"
                  fontSize="20px"
                />
              </MDBCol>
              <MDBCol md="3">
                <Text
                  text="Email"
                  color="white"
                  marginLeft="-140px"
                  marginTop="60px"
                  fontWeight="bold"
                  fontSize="20px"
                />
              </MDBCol>
              <MDBCol md="3">
                <Text
                  text="City"
                  color="white"
                  marginLeft="45px"
                  marginTop="60px"
                  fontWeight="bold"
                  fontSize="20px"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow md="12" style={styles.dataUsersContainer}>
              <MDBCol md="3">
                {
                  users.map((userItem) => (
                    <Text
                      text={userItem.name}
                      color="white"
                      marginLeft="20px"
                    />
                  ))
                }
              </MDBCol>
              <MDBCol md="3">
                {
                  users.map((userItem) => (
                    <Text
                      text={userItem.username}
                      color="white"
                      marginLeft="20px"
                    />
                  ))
                }
              </MDBCol>
              <MDBCol md="3">
                {
                  users.map((userItem) => (
                    <Text
                      text={userItem.email}
                      color="white"
                      marginLeft="20px"
                    />
                  ))
                }
              </MDBCol>
              <MDBCol md="3">
                {
                  users.map((userItem) => (
                    <Text
                      text={userItem.address.city}
                      color="white"
                      marginLeft="20px"
                    />
                  ))
                }
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      );
    }
}

export default Users;
