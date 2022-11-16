import React, { useEffect, useState } from 'react'
import Axios from '../../../axios'
import ServiceItem from './ServiceItem'
import servicePageData from '../../../Model/ServicePageData'

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
                                    <img
                                        src='/pvportfolio/Photos/service.png'
                                        alt='service image'
                                        className='img-fluid'
                                    />
                                    <div className='serviceIcon'>Icons made by
                                        <a
                                            href='https://www.flaticon.com/authors/itim2101'
                                            title='itim2101'
                                        >itim2101</a>
                                        from
                                        <a
                                            href='https://www.flaticon.com/'
                                            title='Flaticon'
                                        >www.flaticon.com</a></div>
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
