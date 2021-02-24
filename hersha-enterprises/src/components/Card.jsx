import React from "react";
import data from "../data";

function Card(){
    return(
        <>
            {data.products.map((product) => (
                <div key={product._id} className="card mx-auto main_card" style={{width: "18rem"}}>
                    <img src={product.image} style={{height: "190px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                            Price: {product.price}
                        </p>
                        <button className="btn btn-success">Buy Now</button>
                    </div>
              </div>
            ))}
        </>
    );
}
export default Card;