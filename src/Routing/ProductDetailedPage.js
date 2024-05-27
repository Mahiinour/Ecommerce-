import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./CSS/productDetail.css";

const ProductDetailedPage = () => {
  const { x } = useParams();
  const [products, setProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState({});

  function getProduct() {
    if (localStorage.getItem("product")) {
      setProducts(JSON.parse(localStorage.getItem("product")));
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDetailChange = (id, itemId) => {
    setSelectedDetails((prevDetails) => ({
      ...prevDetails,
      [id]: itemId,
    }));
  };

  const handleAddToCart = () => {
    // Add the product with selected details to the cart
    console.log("Added to cart:", { product: products, selectedDetails });
    handleCloseModal();
  };

  return (
    <Fragment>
      <div className="con">
        <div className="images">
          <Card.Img src={products?.gallery[0]} alt={products?.name} />
        </div>

        <div className="texts">
          <p>{products?.name}</p>

          {products?.attributes && products.attributes.length > 0 ? (
            <>
              {products.attributes.map((attribute, attrIndex) => (
                <Fragment key={attrIndex}>
                  <label>{attribute.id}:</label>
                  <Table>
                    <tbody>
                      {attribute.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Fragment>
              ))}
            </>
          ) : (
            <p>No available colors except the viewed one</p>
          )}

          <label>Price:</label>
          {`${products?.prices[0].currency.symbol} ${products?.prices[0].amount}`}

          <Button onClick={handleShowModal}>ADD TO CART</Button>
          <h6>{products?.description.slice(3, 50)}</h6>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {products?.attributes &&
                products.attributes.length > 0 &&
                products.attributes.map((attribute, attrIndex) => (
                  <Form.Group key={attrIndex}>
                    <Form.Label>{attribute.id}</Form.Label>
                    {attribute.items.map((item, index) => (
                      <Form.Check
                        key={index}
                        type="radio"
                        label={item.id}
                        name={attribute.id}
                        value={item.id}
                        onChange={() =>
                          handleDetailChange(attribute.id, item.id)
                        }
                      />
                    ))}
                  </Form.Group>
                ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal}>
              Close
            </Button>
            <Button onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default ProductDetailedPage;

// {/* <Row>{products?.gallery[1]}</Row>
//         <Row>{products?.gallery[2]}</Row>
//         <Row>{products?.gallery[3]}</Row>
//         <Row>{products?.gallery[4]}</Row> */}

// connection

// axios
// .get('http://127.0.0.1:8000/api/add-cart')
// .then((res) => setProducts(res.data))
// .catch((err) => console.log(err));
