import React, { PureComponent } from 'react';
import { styles } from '../pagesStyle/Project.css';
import { MDBContainer, MDBRow, MDBCol, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import ProgressBar from '../Components/ProgressBar';
import Card from '../Components/Card';
import easytrip from '../assets/image/easytrip.png';
import replacement from '../assets/image/replacement.jpeg';

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
        }, 50);
    }
    componentWillUnmount = () => {
        clearInterval(this.intervalId)
    }

    render(){
        const { isLoading, load } = this.state
        return(
            <MDBContainer>
                {
                    isLoading === false ?
                    ""
                    : 
                    <MDBContainer style={styles.progContainer}>
                    <h1 style={styles.color}>Please Wait.......</h1>
                        <ProgressBar 
                            value={load}
                            percentage={`${load}%`}
                            height='40px'
                            width='20px'
                        />
                    </MDBContainer>
                }
                {
                    isLoading ? ""
                    :
                    <MDBContainer style={styles.cardContainer}>
                        <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
                            <MDBCarouselInner >
                                <MDBRow md='12'>
                                    <MDBCarouselItem itemId="1">
                                            <Card
                                                type='bounceInLeft'
                                                delay='1.2s'
                                                md='4'
                                                imgSrc={easytrip}
                                                cardTitle='Easytrip Mobile App'
                                                cardText= 'The Easytrip tag provides an interoperable service for payment of toll fees in NLEX. It also comes with an Easytrip Card to be used for electronic payment for road merchant services such as restaurants, car parks and gasoline stations.'
                                                btnText= 'View More'
                                            />
                                            <Card
                                                type='bounceInDown'
                                                delay='1.4s'
                                                style={styles.paddingCardCenter}
                                                md='4'
                                                imgSrc={easytrip}
                                                cardTitle='Easytrip Web Admin'
                                                cardText= 'The Easytrip tag provides an interoperable service for payment of toll fees in NLEX. It also comes with an Easytrip Card to be used for electronic payment for road merchant services such as restaurants, car parks and gasoline stations.'
                                                btnText= 'View More'
                                            />
                                            <Card
                                                type='bounceInRight'
                                                delay='1.2s'
                                                style={styles.paddingCardRight}
                                                md='4'
                                                imgSrc={replacement}
                                                cardTitle='MSAP'
                                                cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                btnText= 'View More'
                                            />
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                            <Card
                                                type='bounceInLeft'
                                                delay='1.2s'
                                                md='4'
                                                imgSrc={replacement}
                                                cardTitle='Vwin Baby Admin'
                                                cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                btnText= 'View More'
                                            />
                                            <Card
                                                type='bounceInDown'
                                                delay='1.4s'
                                                style={styles.paddingCardCenter}
                                                md='4'
                                                imgSrc={replacement}
                                                cardTitle='Vwin Baby Mobile'
                                                cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                btnText= 'View More'
                                            />
                                            <Card
                                                type='bounceInRight'
                                                delay='1.2s'
                                                style={styles.paddingCardRight}
                                                md='4'
                                                imgSrc={replacement}
                                                cardTitle='Bliimo Website'
                                                cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                btnText= 'View More'
                                            />
                                    </MDBCarouselItem>
                                </MDBRow>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBContainer>
                }
            </MDBContainer>
        )
    }
}

export default Projects