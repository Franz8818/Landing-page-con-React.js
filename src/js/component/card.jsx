import React from "react";
const Card = () => {
    return (
        <div className="card mx-auto mt-2 p-0" style={{ width: 12 + "rem" }}>
            <img
                src="https://picsum.photos/200"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title ">
                    Card title
                </h5>
                <p className="card-text ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum modi eius sit nobis quasi.
                </p>
                <a
                    href="#"
                    className="btn bg-primary text-white d-flex justify-content-center">
                    Find Out More!
                </a>
            </div>
        </div>
    );
};
export default Card;