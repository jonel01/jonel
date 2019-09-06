import React, {Component} from 'react';
import { styles } from '../layout/Navbar.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Links extends Component {
    render(){
    return(
        <div style={styles.container}>
            <ul style={styles.ul}>
                <li style={Object.assign({},styles.li, styles.pos)}><NavLink style={styles.link} exact to='/'>Profile</NavLink></li>
                <li style={styles.li}><NavLink style={styles.link} exact to='/About'>About</NavLink></li>
                <li style={styles.li}><NavLink style={styles.link} exact to='Skills'>Skills</NavLink></li>
            </ul>
        </div>
    );
}
}

export default Links;