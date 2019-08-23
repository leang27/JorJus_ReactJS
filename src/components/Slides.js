import React, { Component } from 'react';
import { Row } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import denim from '../image/denim-wallpapers.jpg';
import jeans from '../image/jeans-origem.jpg';
import unzip from '../image/Unzipped-Hero.png';
import "react-alice-carousel/lib/alice-carousel.css";

const items = [ unzip, jeans, denim];

export default class Slides extends Component{
    slide = items.map(item => <img className="shadow-sm" src={item} alt="" style={{width : "100%"}} /> );
    render(){
        return(
            <Row className="w-75 w-md-50 mx-auto my-4">
                <AliceCarousel
                    items={this.slide}
                    buttonsDisabled={true}
                    dotsDisabled={false}
                    fadeOutAnimation={true}
                    autoPlayInterval={5000}
                    autoPlayDirection="ltr"
                    autoPlay={true}
                    disableAutoPlayOnAction={true}
                />
            </Row>
        );
    }
}