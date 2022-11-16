import React from 'react'

export default function ServiceItem({ mServiceData, serviceItemIdx }) {
    function setServiceIcon(key) {
        switch (key) {
            case 0:
                return <i className='fa fa-globe'></i>
            case 1:
                return <i className='fa fa-android'></i>
            case 2:
                return <i className='fa fa-apple'></i>
            default:
                return <i className='fa fa-globe'></i>
            }
    }
    return (

        <div className='service-item' key={mServiceData._id}>
            <div className='row'>
                <div className='col-md-2'>
                    <div className='service-icons'>
                        {
                            setServiceIcon(serviceItemIdx)
                        }
                    </div>
                </div>
                <div className='col-md-10'>
                    <div className='service-right-text'>
                        <h5>{mServiceData.title1}</h5>
                        <h4>{mServiceData.title2}</h4>
                        <p className='about-txt2'>{mServiceData.description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
