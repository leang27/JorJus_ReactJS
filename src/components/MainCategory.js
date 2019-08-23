import React, { Component } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import CardProduct from './CardProduct';

class MainCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMounted : false,
            activePage: 1,
            products : [],
            pagination : [],
            isError : false
        };
    }

    componentDidMount(){
        this.setState({
            isMounted : true
        });
        this.getAPI();
    }

    componentDidUpdate(props,state){
        this.getAPI();
    }

    componentWillUnmount(){
        this.setState({
            isMounted : false,
            products : [],
            pagination : []
        })
    }

    async getAPI(){
        try {
            let res = await axios.get(`https://thefashion.asia/mobile/Producttype/getLimit/${this.props.match.url}/shirt/${this.state.activePage}/36`);
            if(this.state.isMounted){
                this.setState({
                    products: res.data.mydata,
                    pagination : res.data.pagination[0]
                });
            }
        }
        catch(error) {
            console.log(`😱 Axios request failed: ${error}`);
            this.setState({
                isError : true
            });
        };
    }

    handlePageClick = data => {
        let activePage = data.selected + 1; 
        this.setState({ 
            activePage 
        });
        window.scrollTo(0, 0);
    };

    style = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height : "78vh"
    }

    render() {
        const { products, pagination, isError} = this.state;
        // console.log(this.state);
        return (
            <div>
            {
                products.length <= 0 ? isError ? <h5>no data</h5> : <div style={this.style}><Loader type="Watch" color="#000" width={50} /></div> :
                <div>
                    <Row>
                    {
                        products.map(product => <CardProduct key={product.id} item={product} isChange={true}  xs='6' sm='6' md='4' lg='4' />)
                    }
                    </Row> 
                    <Row>
                        <ReactPaginate
                            previousLabel={<i className="fas fa-chevron-left"></i>}
                            nextLabel={<i className="fas fa-chevron-right"></i>}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pagination.totalPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </Row>
                </div>
            }
            </div>
        );
    }
}

export default MainCategory;