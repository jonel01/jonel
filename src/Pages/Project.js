import React, { PureComponent } from 'react';
import { styles } from '../pagesStyle/Project.css';
import { MDBContainer, MDBRow, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import ProgressBar from '../Components/ProgressBar';
import Card from '../Components/Card';
import easytrip from '../assets/image/easytrip.png';
import replacement from '../assets/image/replacement.jpeg';
import vwinreplacement from '../assets/image/vwinreplacement.jpg';
import bliimo from '../assets/image/bliimo.jpg';

import Modal from '../Components/Modal';

class Projects extends PureComponent {
    state = {
        isLoading: true,
        load: 0,
        full: 100,
        intervalId: 0,
        modals: 0
    }
    componentDidMount = () =>{
        this.intervalId = setInterval(() => {
            let { load, full } = this.state
            if (load < full){
                this.setState({
                    load: load +1
                })   
            }
            if(load === full){
                this.setState({
                    isLoading: false,
                })
            }
        }, 50);
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalId)
    }
    
    modal = (modalNum) => {
        this.setState({
            modals: modalNum
        })
    }

    render(){
        const { isLoading, load, modals } = this.state
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
                                        {
                                            modals === 1 ?
                                                <MDBContainer>
                                                <Modal 
                                                    isOpen={modals}
                                                    toggleModal={this.modal}
                                                    toggleHeader={this.modal}
                                                    modalTitle='Easytrip Project'
                                                    modalBodyText='Easytrip Mobile is my first project in company of Bliimo Technology Inc.'
                                                    firstBtnColor='primary'
                                                    firstBtnOnClick={this.modal}
                                                    btnFirst='Close'
                                                    secondBtnColor='secondary'
                                                    secondBtnOnCick={this.modal}
                                                    btnSecond='Save Changes'
                                                />
                                                <Card
                                                    type='zoomOut'
                                                    md='4'
                                                    imgSrc={easytrip}
                                                    cardTitle='Easytrip Mobile App'
                                                    cardText= 'The Easytrip tag provides an interoperable service for payment of toll fees in NLEX. It also comes with an Easytrip Card to be used for electronic payment for road merchant services such as restaurants, car parks and gasoline stations.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(1)}
                                                />
                                                </MDBContainer>
                                                :
                                                <Card
                                                    type='zoomIn'
                                                    delay='1.2s'
                                                    border='solid 15px darkslategray'
                                                    borderRadius= '20px'
                                                    height= '557px'
                                                    md='4'
                                                    imgSrc={easytrip}
                                                    cardTitle='Easytrip Mobile App'
                                                    cardText= 'The Easytrip tag provides an interoperable service for payment of toll fees in NLEX. It also comes with an Easytrip Card to be used for electronic payment for road merchant services such as restaurants, car parks and gasoline stations.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(1)}
                                                />
                                        }
                                        {
                                            modals === 2 ?
                                                <MDBContainer>
                                                    <Modal 
                                                        isOpen={modals}
                                                        toggleModal={this.modal}
                                                        toggleHeader={this.modal}
                                                        modalTitle='Easytrip Project'
                                                        modalBodyText='Easytrip Web Admin is my third project in company of Bliimo Technology Inc.'
                                                        firstBtnColor='primary'
                                                        firstBtnOnClick={this.modal}
                                                        btnFirst='Close'
                                                        secondBtnColor='secondary'
                                                        secondBtnOnCick={this.modal}
                                                        btnSecond='Save Changes'
                                                    />
                                                    <Card
                                                        type='zoomOut'
                                                        style={styles.paddingCardCenter}
                                                        md='4'
                                                        imgSrc={easytrip}
                                                        cardTitle='Easytrip Web Admin'
                                                        cardText= 'The Easytrip tag provides an interoperable service for payment of toll fees in NLEX. It also comes with an Easytrip Card to be used for electronic payment for road merchant services such as restaurants, car parks and gasoline stations.'
                                                        btnText= 'View More'
                                                        onBtnCardClick={() => this.modal(2)}
                                                    />
                                                </MDBContainer>
                                                :
                                                <Card
                                                    type='zoomIn'
                                                    delay='1.3s'
                                                    border='solid 15px darkslategray'
                                                    borderRadius= '20px'
                                                    height= '557px'
                                                    style={styles.paddingCardCenter}
                                                    md='4'
                                                    imgSrc={easytrip}
                                                    cardTitle='Easytrip Web Admin'
                                                    cardText= 'The Easytrip tag provides an interoperable service for payment of toll fees in NLEX. It also comes with an Easytrip Card to be used for electronic payment for road merchant services such as restaurants, car parks and gasoline stations.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(2)}
                                                />
                                        }
                                        {
                                            modals === 3 ?
                                                <MDBContainer>
                                                    <Modal 
                                                        isOpen={modals}
                                                        toggleModal={this.modal}
                                                        toggleHeader={this.modal}
                                                        modalTitle='MSAP Project'
                                                        modalBodyText='MSAP is my fifth project in company of Bliimo Technology Inc.'
                                                        firstBtnColor='primary'
                                                        firstBtnOnClick={this.modal}
                                                        btnFirst='Close'
                                                        secondBtnColor='secondary'
                                                        secondBtnOnCick={this.modal}
                                                        btnSecond='Save Changes'
                                                    />
                                                    <Card
                                                        type='zoomOut'
                                                        style={styles.paddingCardRight}
                                                        md='4'
                                                        imgSrc={replacement}
                                                        cardTitle='MSAP'
                                                        cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                        btnText= 'View More'
                                                        onBtnCardClick={() => this.modal(3)}
                                                    />
                                                </MDBContainer>
                                                :
                                                <Card
                                                    type='zoomIn'
                                                    delay='1.4s'
                                                    border='solid 15px darkslategray'
                                                    borderRadius= '20px'
                                                    height= '557px'
                                                    style={styles.paddingCardRight}
                                                    md='4'
                                                    imgSrc={replacement}
                                                    cardTitle='MSAP'
                                                    cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(3)}
                                                />
                                        }
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                    {
                                            modals === 4 ?
                                                <MDBContainer>
                                                    <Modal 
                                                        isOpen={modals}
                                                        toggleModal={this.modal}
                                                        toggleHeader={this.modal}
                                                        modalTitle='VwinBaby Project'
                                                        modalBodyText='Vwin Baby Admin is my second project in company of Bliimo Technology Inc.'
                                                        firstBtnColor='primary'
                                                        firstBtnOnClick={this.modal}
                                                        btnFirst='Close'
                                                        secondBtnColor='secondary'
                                                        secondBtnOnCick={this.modal}
                                                        btnSecond='Save Changes'
                                                    />
                                                    <Card
                                                        type='zoomOut'
                                                        md='4'
                                                        imgSrc={vwinreplacement}
                                                        cardTitle='Vwin Baby Admin'
                                                        cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                        btnText= 'View More'
                                                        onBtnCardClick={() => this.modal(4)}
                                                    />
                                                </MDBContainer>
                                                :
                                                <Card
                                                    type='zoomIn'
                                                    delay='1.2s'
                                                    border='solid 15px darkslategray'
                                                    borderRadius= '20px'
                                                    height= '557px'
                                                    md='4'
                                                    imgSrc={vwinreplacement}
                                                    cardTitle='Vwin Baby Admin'
                                                    cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(4)}
                                                />
                                    }
                                    {
                                            modals === 5 ?
                                                <MDBContainer>
                                                    <Modal 
                                                        isOpen={modals}
                                                        toggleModal={this.modal}
                                                        toggleHeader={this.modal}
                                                        modalTitle='VwinBaby Project'
                                                        modalBodyText='Vwin Baby Mobile is my fourth project in company of Bliimo Technology Inc.'
                                                        firstBtnColor='primary'
                                                        firstBtnOnClick={this.modal}
                                                        btnFirst='Close'
                                                        secondBtnColor='secondary'
                                                        secondBtnOnCick={this.modal}
                                                        btnSecond='Save Changes'
                                                    />
                                                    <Card
                                                        type='zoomOut'
                                                        style={styles.paddingCardCenter}
                                                        md='4'
                                                        imgSrc={vwinreplacement}
                                                        cardTitle='Vwin Baby Mobile'
                                                        cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                        btnText= 'View More'
                                                        onBtnCardClick={() => this.modal(5)}
                                                    />
                                                </MDBContainer>
                                                :
                                                <Card
                                                    type='zoomIn'
                                                    delay='1.3s'
                                                    border='solid 15px darkslategray'
                                                    borderRadius= '20px'
                                                    height= '557px'
                                                    style={styles.paddingCardCenter}
                                                    md='4'
                                                    imgSrc={vwinreplacement}
                                                    cardTitle='Vwin Baby Mobile'
                                                    cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(5)}
                                                />
                                    }
                                    {
                                            modals === 6 ?
                                                <MDBContainer>
                                                    <Modal 
                                                        isOpen={modals}
                                                        toggleModal={this.modal}
                                                        toggleHeader={this.modal}
                                                        modalTitle='Bliimo Project'
                                                        modalBodyText='Bliimo Website is my project while I am an intern in company of Bliimo Technology Inc.'
                                                        firstBtnColor='primary'
                                                        firstBtnOnClick={this.modal}
                                                        btnFirst='Close'
                                                        secondBtnColor='secondary'
                                                        secondBtnOnCick={this.modal}
                                                        btnSecond='Save Changes'
                                                    />
                                                    <Card
                                                        type='zoomOut'
                                                        style={styles.paddingCardRight}
                                                        md='4'
                                                        imgSrc={replacement}
                                                        cardTitle='Bliimo Website'
                                                        cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                        btnText= 'View More'
                                                        onBtnCardClick={() => this.modal(6)}
                                                    />
                                                </MDBContainer>
                                                :
                                                <Card
                                                    type='zoomIn'
                                                    delay='1.4s'
                                                    border='solid 15px darkslategray'
                                                    borderRadius= '20px'
                                                    height= '557px'
                                                    style={styles.paddingCardRight}
                                                    md='4'
                                                    imgSrc={replacement}
                                                    cardTitle='Bliimo Website'
                                                    cardText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                                    btnText= 'View More'
                                                    onBtnCardClick={() => this.modal(6)}
                                                />
                                    }
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