import React from "react"

export const Card = ({ title, imageSource, url, text }) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nulla ducimus culpa, harum laudantium doloribus eius dicta beatae debitis accusamus tempore sequi cum, nobis voluptatum officia consequuntur! Ipsam, voluptas.'
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary" >
                    Ver
                </a>
            </div>
        </div>
    )
}