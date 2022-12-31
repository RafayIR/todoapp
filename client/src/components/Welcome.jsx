import React from 'react'
import Navigation from './Navigation';
import { Navigate } from 'react-router-dom';

const Welcome =({ data })=> {

    if(data.length == 0){
        return < Navigate to="/" />
    }

    return (
        <div>
            <Navigation />
            <section className="welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {data.map((user, index) => {
                                return (
                                    <div className="userData" key={index}>
                                        <h1>{`Hi, greeting ${user.fullname} :)`}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome