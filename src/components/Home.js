import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { NavLink} from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import AliceCarousel from 'react-alice-carousel';
import CardProduct from './CardProduct';
import Slides from './Slides';
import "react-alice-carousel/lib/alice-carousel.css";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMounted : false,
            men : [],
            couple  : [],
            women : []
        };
    }

    responsive = {
        0: { items: 2 },
        700: {items : 3},
        991: {items: 4},
        1024: { items: 6 },
    }

    componentDidMount(){
        this.setState({
            isMounted : true
        });
        this.getAPI('couple');
        this.getAPI('men');
        this.getAPI('women');
    }

    componentWillUnmount(){
        this.setState({
            isMounted : false
        })
    }

    async getAPI(main){
        try {
            let res = await axios.get(`https://thefashion.asia/mobile/Producttype/getLimit/${main}/shirt/1/18`);
            if(this.state.isMounted){
                switch(main){
                    case 'couple' : this.setState({ couple : res.data.mydata }); break;
                    case 'men' : this.setState({ men : res.data.mydata }); break;
                    case 'women' : this.setState({ women : res.data.mydata }); break;
                    default : break;
                }
            }
        }catch(error) {
            console.log(`😱 Axios request failed: ${error}`);
        };
    }

    render(){
        const {couple, men, women} = this.state;
        // console.log(this.state);
        const productsCouple = couple.map(product => <CardProduct key={product.id} item={product} isChange={false} />);
        const productsMen = men.map(product => <CardProduct key={product.id} item={product} isChange={false}/>);
        const productsWomen = women.map(product => <CardProduct key={product.id} item={product} isChange={false}/>);
        return (
            <div>
                <Slides/>
                <h4>
                    <NavLink to="/new" className="text-dark">new | see all</NavLink>
                </h4>
                {
                    couple.length <= 0 ? <Row className="ml-5 mb-5"><Loader type="Oval" color="#000" width={50} /></Row> : 
                    <Row className="no-topMargin">
                    {
                        <AliceCarousel
                            items={productsCouple}
                            responsive={this.responsive}
                            buttonsDisabled={true}
                            dotsDisabled={false}
                            mouseDragEnabled={true}
                        />
                    }
                    </Row>
                }
                
                <h4>
                    <NavLink to="/men" className="text-dark">men | see all</NavLink>
                </h4>
                {
                    men.length <= 0 ? <Row className="ml-5 mb-5"><Loader type="Oval" color="#000" width={50} /></Row> : 
                    <Row className="no-topMargin">
                    {
                        <AliceCarousel
                            items={productsMen}
                            responsive={this.responsive}
                            buttonsDisabled={true}
                            dotsDisabled={false}
                            mouseDragEnabled={true}
                        />
                    }
                    </Row>
                }
    
                <h4>
                    <NavLink to="/women" className="text-dark">women | see all</NavLink>
                </h4>
                {
                    women.length <=0 ? <Row className="ml-5 mb-5"><Loader type="Oval" color="#000" width={50} /></Row> :
                    <Row className="no-topMargin"> 
                    {
                        <AliceCarousel
                            items={productsWomen}
                            responsive={this.responsive}
                            buttonsDisabled={true}
                            dotsDisabled={false}
                            mouseDragEnabled={true}
                        />
                    }
                    </Row>
                }
            </div>
        );
    }   
}