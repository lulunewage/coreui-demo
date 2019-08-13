import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PageFooter extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.callApi();
    }
    handlePageChange = (e) => {
        this.props.onPageChange(e.target.value);
    }
    handleChange = (e) =>{
        this.props.onChangePageSize(e.target.value)
    }

    render() {
        return (
            <div>
                <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
                <form onSubmit={this.handleSubmit}>
                    {/* porps屬性，定義改變input值的事件 */}
                    <input value={this.props.page} onChange={this.handlePageChange} />
                    <button>Go</button>
                </form>
                <select className="PageSize" 
                    onChange={this.handleChange} 
                    value={this.props.pageSize}
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
        )
    }
}
