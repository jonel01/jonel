import React, { PureComponent } from 'react';
import { styles } from '../ComponentStyle/Links.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavItem, MDBNavLink} from 'mdbreact';

class Links extends PureComponent {
    
    render(){
        return(
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
                
            <MDBNavbarBrand to="/">
            <MDBNavLink style={styles.navLink} exact to='/'>My Portfolio</MDBNavLink>
            </MDBNavbarBrand>

              <MDBNavbarNav right style={styles.pos}>
                <MDBNavItem>
                <MDBNavLink style={styles.navLink} exact to='/' activeStyle={{ color: 'yellow' }}>Profile</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink style={styles.navLink} exact to='/About' activeStyle={{ color: 'yellow' }}>About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink style={styles.navLink} exact to='/Skills' activeStyle={{ color: 'yellow' }}>Skills</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
           
          </MDBNavbar>
        );
    }
}

export default Links;