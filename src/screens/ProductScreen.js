import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import products from '../products'
import {Link, useParams} from 'react-router-dom'
import Product from "../components/Product";




function ProductScreen() {
  // param to match to post
  const match = useParams();
  const product = products.find((p) => p._id == match.id);

  return <div>

            <Link to='/' className='btn btn-light my-3'>Go Back</Link>

            <Col md={6}>
                <p>{product.name}</p>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>

         </div>;
}

export default ProductScreen
