import React from 'react'
import './home.css'
import Product from '../Products/Product.jsx'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
                <div className="home__row">
                    <Product
                        id={1}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, consequuntur itaque velit minima tempore modi perspiciatis debitis magnam nobis, placeat, ex omnis nemo rem dolore at blanditiis doloremque quia consequatur?
                        "
                        price={29.99}
                        imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL320_.jpg"
                        ratting={5} />
                    <Product
                        id={2}
                        title="the lean up"
                        price={21.99}
                        imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL321_.jpg"
                        ratting={2} />

                </div>
                <div className="home__row">
                    <Product
                        id={3}
                        title="the lean up"
                        price={21.99}
                        imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL323_.jpg"
                        ratting={1} />
                    <Product
                        id={4}
                        title="the lean up"
                        price={11.99}
                        imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL324_.jpg"
                        ratting={4} />
                    <Product
                        id={5}
                        title="the lean up"
                        price={221.99}
                        imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL325_.jpg"
                        ratting={3} />

                </div>
                <div className="home__row">
                <Product 
                    id={6}
                    title="the lean up"
                    price={123.99}
                    imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL326_.jpg"
                    ratting={2}/>

                </div>
            </div>
        </div>
    )
}

export default Home