import React, { PureComponent } from 'react';
import { styles } from '../pagesStyle/Project.css';
import { MDBContainer } from 'mdbreact';
import ProgressBar from '../Components/ProgressBar';

class Projects extends PureComponent {
    state = {
        isLoading: true,
        load: 0,
        full: 100,
        intervalId: 0
        }
    componentDidMount = () =>{
        this.intervalId = setInterval(() => {
            let { load, full } = this.state
            if (load < full){
                console.log(load);
                this.setState({
                    load: load +1
                })   
            }
            if(load === full){
                console.log(load);
                this.setState({
                    isLoading: false,
                })
            }
        }, 1);
    }
    componentWillUnmount = () => {
        clearInterval(this.intervalId)
    }

    render(){
        const { isLoading, load } = this.state
        return(
            <MDBContainer>
                <h1 style={styles.project}>THIS IS MY PRACTICE</h1>
                {
                    isLoading === false ?
                    ""
                    : 
                    <MDBContainer style={styles.progContainer}>
                        <ProgressBar 
                            value={load}
                            percentage={`${load}%`}
                            height='40px'
                        />
                    </MDBContainer>
                }
                {
                    isLoading ? ""
                    :
                    <MDBContainer >
                        <h1>Done Loading</h1>
                    </MDBContainer>
                }
            </MDBContainer>
        )
    }
}

export default Projects