import React from 'react';
import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Carousel, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [services, setServices] = useState([]);

    // load data from json 

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])

    return (
        <>
            <div>
               
                    {
                        services.map(service => 
                                
                           
                           <div className="text-center container">
                            <h1>Name: {service.name}</h1>
                            <img src={service.img} alt="" />
                            <p className="warning">Rating: {service.rating}*</p>
                           </div>
                            )
                            
                        }
                </div>
                <div className="text-center">

                </div>
        </>
    );
};

export default Reviews;