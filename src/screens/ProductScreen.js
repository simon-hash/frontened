import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import products from '../products'
import {Link, useParams} from 'react-router-dom'
import Product from "../components/Product";




function ProductScreen() {
    const c = useParams()
    //const product = products.getElementById((p) => p._id === c)

    /*function getObjectByID(c) {
        return products.filter(function(products){
                return products.id === c }
        );
    }
    var product = getObjectByID(c);*/

    /*let wantedData = products.filter(function(i) {
    return i._id === c
    });
    console.log(wantedData)*/

    /*let data = products.filter((a)=>{if(a._id == c){return a}});
    console.log(data);*/

    let filteredPeople = products.filter(function (currentElement) {
      // the current value is an object, so you can check on its properties
      return currentElement._id === c;
    });


    return(
        <div>
            <h2>Product Screen</h2>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

                <Row>

                   <Col>

                       <Image src={filteredPeople.image} fluid></Image>

                   </Col>


                </Row>

                {/*<Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}></Col>
                </Row>*/}
        </div>
    )
}
export default ProductScreen