import React from 'react'
import { Card } from './Card'
import './Cards.css'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'

const cards = [
    {
        id: 1,
        title: 'Maquinas Nuevas',
        image: image1,
        url: '',
        text: ''
    },
    {
        id: 2,
        title: 'Maquinas Usadas',
        image: image2,
        url: '',
        text: ''
    }
]

export const Cards = () => {
    return (
        <div className='cards'>
            <div className='container d-flex justify-content-center align-items-center'>
                <div className="row">
                    {
                        cards.map(card => (
                            <div className="col-md-4" key={card.id}>
                                <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}