import React from "react";
const Card = () => {
    return (
        <div className="card mx-auto mt-2 p-0" style={{ width: 12 + "rem" }}>
            <img
                // src="https://www.softzone.es/app/uploads-softzone.es/2021/05/Error-de-pantalla-negra-con-el-cursor-a-la-vista.jpg?x=480&y=375&quality=40"
                src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
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