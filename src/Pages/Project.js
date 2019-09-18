import React, { PureComponent } from 'react';
import { styles } from '../pagesStyle/Project.css';

class Projects extends PureComponent {
    render(){
        return(
            <h1 style={styles.project}>My Projects</h1>
        )
    }
}

export default Projects