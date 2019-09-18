import React, { PureComponent } from 'react';
import { styles } from '../pagesStyle/Links.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavItem, MDBNavLink} from 'mdbreact';

class Links extends PureComponent {
    
    render(){
        return(
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
                
              <MDBNavbarBrand to="/">
                  <MDBNavLink style={styles.navLink} exact to='/'><strong>My Portfolio</strong></MDBNavLink>
              </MDBNavbarBrand>

              <MDBNavbarNav right style={styles.pos}>
                  <MDBNavItem>
                      <MDBNavLink style={styles.navLink} exact to='/' activeStyle={{ color: 'yellow' }}>Profile</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink style={styles.navLink} exact to='/about' activeStyle={{ color: 'yellow' }}>About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink style={styles.navLink} exact to='/skills' activeStyle={{ color: 'yellow' }}>Skills</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink style={styles.navLink} exact to='/projects' activeStyle={{ color: 'yellow' }}>Projects</MDBNavLink>
                  </MDBNavItem>
              </MDBNavbarNav>
           
          </MDBNavbar>
        );
    }
}

export default Links;