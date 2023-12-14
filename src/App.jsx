import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Calculator from './components/Calculator'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App() {
    const [tema, setTema] = useState('Light')

    const ct = (nuevoTema) => {
        setTema(nuevoTema)
    }

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href={`./src/statics/${tema}.css`}
                />
            </Helmet>
            <Header />
            <Navbar ct={ct} />
            <Calculator />
            <Footer />
        </>
    )
}

export default App
