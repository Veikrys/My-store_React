import React from 'react';
import mod from './welcome.module.css';
import Header from './header/header.jsx';
import Welcome2 from './welcome/welcome.jsx';
import Agit from './agitka/agitka.jsx';
import Sale from './sale/sale.jsx';
import Reviewss from './reviews/reviews.jsx';
import Faq from './f.a.q/faq.jsx';
import Footer from './footer/footer.jsx'

function Welcome () {

    return (
        <section className= {mod.main}>
            <Header />
            <Welcome2 />
            <Agit />
            <Sale />
            <Reviewss />
            <Faq />
            <Footer />
        </section>
    )
}

export default Welcome
