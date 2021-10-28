import React, { Component } from 'react';
import {row,Col} from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../categories/ProductList";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList/>
                    </Col>
                    <Col xs="9">
                        <ProductList/>
                    </Col>
                </Row>
            </div>
        )
    }
}
