import React, { useEffect, useState } from 'react'
import Axios from '../../../axios'
import ServiceItem from './ServiceItem'
import servicePageData from '../../../Model/ServicePageData'
import Lottie from 'react-lottie';
import animationData from './99312-developer-skills.json';

export default function Service() {
    const [serviceData, setService] = useState([])

    useEffect(() => {
        async function fetchData() {
            setService(servicePageData())
            // await Axios.get('/get/service')
            //     .then((result) => {
            //         setService(result.data)
            //     }).catch((err) => {
            //         console.log(err)
            //     })
        }
        fetchData()
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            className: "lottie-svg-class"
        }
    };
    return (
        <section id='home-service-section'>
            <div className='service-block'>
                <div className='container'>
                    <div className='heading-horizontal text-center'>
                        <h5>what I do</h5>
                        <h2>My Services</h2>
                        <div className='border-horizontal'>&nbsp;</div>
                    </div>
                    <div className='service-content'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='service-left-icon'>
                                    <Lottie
                                        options={defaultOptions}
                                        height={500}
                                        width={500}

                                    />
                                    {/* <img
                                        src='/pvportfolio/Photos/service.png'
                                        alt='service image'
                                        className='img-fluid'
                                    /> */}
                                    <div className='serviceIcon'>Lottie file made by
                                        <a
                                            href='https://lottiefiles.com/99312-developer-skills'
                                            title='Derek'
                                        >Derek-  developer-skills Anim</a>
                                        from
                                        <a
                                            href='https://lottiefiles.com/'
                                            title='Lottiefiles'
                                        >https://lottiefiles.com/</a></div>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='service-item-content'>
                                    {
                                        serviceData.map((data, index) => {
                                            return <ServiceItem mServiceData={data} key={index} serviceItemIdx={index} />
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
