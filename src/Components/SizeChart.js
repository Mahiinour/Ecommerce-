import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SizeChart = () => {
  return (
    <Container>
      <Row>
        <Col>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SIZE</td>
                <td>XS</td>
                <td>S</td>
                <td>M</td>
                <td>L</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default SizeChart;