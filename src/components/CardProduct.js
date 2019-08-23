import React, {Component} from 'react';
import { Col, Card, CardImg, CardText, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

class CardProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            img : ''
        }
    }
    static defaultProps = {
        lg : '12',
        md : '12',
        sm : '12',
        xs : '12'
    }

    componentWillReceiveProps() {
        this.setState({
            img : this.props.item.image
        })
    }

    addToLocalStorage(item){
        localStorage.setItem('item',JSON.stringify(item));
    }

    // handleMouseOver(item, isChange){
    //     if(item.colors.length > 0 && isChange){
    //         this.setState({
    //             img : item.colors[0].image
    //         })
    //     }
    // }

    // handleMouseLeave(item, isChange){
    //     if(item.colors.length > 0 && isChange){
    //         this.setState({
    //             img : item.image
    //         })
    //     }
    // }

    // onMouseOver={() => this.handleMouseOver(item, isChange)} onMouseLeave={() => this.handleMouseLeave(item, isChange)} 

    render(){
        const {item, md, lg, sm, xs, isChange} = this.props;
        const { img } = this.state;
        return (
            <Col xs={xs} sm={sm} md={md} lg={lg} className={isChange ? "px-2 mb-5" : "px-2 mb-2"} >
                <Card className="shadow-sm text-center rounded border-0">
                    <Link to={`/product/${item.id}`} >
                        { img == '' ? <Loader type="Oval" color="#000" width={30} /> : <CardImg className="rounded-0 img-fluid" src={this.state.img}  onClick={() => this.addToLocalStorage(item)}/>}
                    </Link>
                    <CardBody className="pt-2">
                        <CardText className="mb-1" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{item.title}</CardText>
                        <span>$ {parseFloat(item.price).toFixed(2)}</span>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default CardProduct;