import React, { useEffect, useState } from 'react'
import axios from '../../../axios'
import AboutItem from './AboutItem'
import aboutPageData from '../../../Model/AboutPageData'
export default function About() {
    const [aboutData, setAboutData] = useState([])

    useEffect(() => {
        setAboutData(aboutPageData())
        // async function fetchData() {
        //     const req = await axios.get("/get/about")
        //     setAboutData(req.data)
        // }
        // fetchData()
    }, [])

    return (
        <div>
            <section id='home-about-section'>
                <div className='about-section-box'>
                    <div className='container text-center'>
                        <div className='heading-horizontal'>
                            <h5>Get To Know</h5>
                            <h2>About Me</h2>
                            <div className='border-horizontal'>&nbsp;</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='about-section-textctr'>
                                    <div className='container'>
                                        <div className='row'>
                                            {
                                                aboutData.map((data, index) => {
                                                    return <AboutItem key={index} mData={data} />
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
