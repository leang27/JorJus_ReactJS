import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class AboutUs extends Component {
    render() {
        window.scrollTo(0,0);
        return (
            <div>
                <Row className="mt-5 pl-3">
                    <Col sm="12" lg="4">
                        <h5><strong>About Us</strong></h5>
                    </Col>
                </Row>
                <hr className="pb-2"/>
                <Row>
                    <Col sm="12" lg="3">
                        <p style={{textAlign : "justify",textTransform : "initial"}}>
                        Olive is a British contemporary clothing brand with its operational headquarters and flagship womenswear store in Regency Cheltenham. Our large choice of styles, conceived in collaboration with our network of independent designers, 
                        combines heritage with modernity, simplicity with playfulness, and street style with understated elegance. We enjoy a vibrant, 
                        international customer community, and ship to every country in the world. We're conscious that we are a part of a chain that begins with farming and yarn production, 
                        </p>
                    </Col>
                    <Col sm="12" lg="3">
                        <p style={{textAlign : "justify",textTransform : "initial"}}>
                        and ends with style; we take our own responsibilities within that chain seriously, and are forging forward sensitive to the ethical considerations that preoccupy us and many of our customers alike. 
                        Olive is owned and operated by family-owned company Olive Clothing Limited, of Units 11B-D St George's Business Park, Alstone Lane, Cheltenham, GL51 8HF, United Kingdom (Registered in England No: 08529775; VAT No: GB171647890).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <hr />
                        <p>
                            Womenswear Store: 7 Pittville Street, Cheltenham.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <img src="https://cdn11.bigcommerce.com/s-bbcd5/content/img/about-us/AU_02.jpg" alt="" style={{width: "100%"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <p className="pt-3">
                            Cheltenham Headquarters, home to our offices, studio, and warehouse.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <img src="https://cdn11.bigcommerce.com/s-bbcd5/content/img/about-us/AU_01.jpg" alt="" style={{width: "100%"}}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutUs;