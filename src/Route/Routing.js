import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from '../Component/Profile';
import { About } from '../Component/About';
import Skills from '../Component/Skills';
import Links from '../Component/Links';

class Routing extends PureComponent {
    render() {
        return(
            <Router>
                <Links />
                    <Route exact path='/' component={Profile} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/skills' component={Skills} />
            </Router>
        )
}
}


export default Routing