import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import "./CSS/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState("");
  function handleSingleProduct(product) {
    localStorage.setItem("product", JSON.stringify(product));
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://file.notion.so/f/f/196736dd-250f-45b1-ac1f-c4302855a2f9/f3b6db2e-5509-4b3e-9fe2-6e4044b7ff94/data.json?id=6cac81a9-c4d1-40eb-b7f8-31319a4fcada&table=block&spaceId=196736dd-250f-45b1-ac1f-c4302855a2f9&expirationTimestamp=1716602400000&signature=Yy5R002SyNm-xS91PstkcJ6dxIfOmW6fASzer6fDLAg&downloadName=data.json"
        );
        setProducts(response.data.data.products);
        setCategory(response.data.data.categories);
        // console.log(response.data.data.products[0].prices.map((price)=>console.log(price)))
        console.log(response.data.data.products);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //     axios
  //         .get('https://file.notion.so/f/f/196736dd-250f-45b1-ac1f-c4302855a2f9/f3b6db2e-5509-4b3e-9fe2-6e4044b7ff94/data.json?id=6cac81a9-c4d1-40eb-b7f8-31319a4fcada&table=block&spaceId=196736dd-250f-45b1-ac1f-c4302855a2f9&expirationTimestamp=1713420000000&signature=442yh-YlB-KbNY-pjC0unZ-2uMsOHX9v0xO_VcGQG7I&downloadName=data.json')
  //         .then((res) =>setData(res.data))
  //         .catch((err) => console.log(err));
  // }, []);

  return (
    <Fragment>
      <div className="container">
        {/* <h1>Women</h1> */}
        {products?.map((el) => (
          <Link
            onClick={() => handleSingleProduct(el)}
            key={el.id}
            to={`${el.id}`}
          >
            <Card
              className="card p-2 border-0"
              key={el.id}
              style={{ width: "18rem" }}
            >
              {el.inStock ? (
                <div>
                  <Card.Img variant="top" src={el.gallery[0]} alt={el.name} />
                </div>
              ) : (
                <div>
                  <div className="layer">
                    <p>OUT OF STOCK</p>
                  </div>
                  <Card.Img variant="top" src={el.gallery[0]} alt={el.name} />
                </div>
              )}

              <Card.Body>
                {el.inStock ? (
                  <div>
                    <Card.Title className="title">
                      {el.name.split(" ").slice(0, 2).join(" ")}
                    </Card.Title>
                    <Card.Text className="text">{`${el.prices[0].currency.symbol}${el.prices[0].amount} `}</Card.Text>
                    {/* <input className="home" type="submit" value="Add to Cart" />{" "} */}
                  </div>
                ) : (
                  <div>
                    <Card.Title className="title outstock ">
                      {el.name.split(" ").slice(0, 2).join(" ")}
                    </Card.Title>
                    <Card.Text className="text outstock">{`${el.prices[0].currency.symbol}${el.prices[0].amount} `}</Card.Text>
                    {/* <input className="home" type="submit" value="Add to Cart" />{" "} */}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
