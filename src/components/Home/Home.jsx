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
                    title="the lean up"
                    price={29.99}
                    imageUrl="https://m.media-amazon.com/images/I/81vfzNUAXEL._AC_UL320_.jpg"
                    ratting={5}/>
                    <Product price={29.99}/>
                </div>
                <div className="home__row">
                <Product />
                <Product />
                <Product />

                </div>
                <div className="home__row">
                <Product />

                </div>
            </div>
        </div>
    )
}

export default Home