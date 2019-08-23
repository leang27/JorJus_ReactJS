import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            product : JSON.parse(localStorage.getItem('item')),
            baseImage : JSON.parse(localStorage.getItem('item')).image
        };
    }
    changeBaseImg(item){
        this.setState({
            baseImage : item.image
        })
    }

    render(){
        const {product, baseImage} = this.state;
        // console.log(product);
        return (
            <div>
                <Row style={{textTransform : 'initial'}}>
                    <Col xs="12" lg="6" className="text-center">
                        <img className="img-fluid" src={baseImage} alt="base"/>
                    </Col>
                    <Col xs="12" lg="6">
                        <h4 className="mt-5 mt-lg-0">{product.title}</h4>
                        
                        <hr/>
                        <p>
                            <span style={{textDecoration : "line-through"}}>$ {product.promotePrice}</span> &nbsp;
                            <span>$ {product.price}</span>
                        </p>
                        <p>
                            Product Code: <span>{product.code}</span><br />
                            Product Title: <span>{product.title}</span>
                        </p>
                        <div className="py-3 text-uppercase" id="colors"><strong>color</strong></div>
                        {
                            product.colors.length <= 0 ? <h5>no more color</h5> : 
                            product.colors.map((item,index)=>{
                                return(
                                    <img key={index} className="rounded-0 color_img mr-2" src={item.image} alt="" data-toggle="tooltip" data-placement="top" title={item.color} onClick={() => this.changeBaseImg(item)} style={{width: "50px"}}/>
                                );
                            })     
                        }
                        <div className="text-uppercase py-3" id="size"><strong>size</strong></div>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        {
                            product.sizes.length <= 0 ? <h5>no more size</h5> :
                            product.sizes.map((item,index)=>{
                                return(
                                    <label className="btn btn-sm btn-light" key={index} style={{width: "40px"}}>
                                        <input type="radio" name="sizes" id={item.size} />{item.size}
                                    </label>
                                );
                            })
                        }
                        </div>
                        <Row className="mt-4">
                            <Col xs="12" sm="4">
                                <button className="btn btn-sm btn-outline-dark text-uppercase px-4 py-2">
                                    add to cart
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Product;