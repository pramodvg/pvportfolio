import React from 'react'

export default function PortfolioItem({ props }) {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const formatDes = descriptionData => {
        if (descriptionData !== undefined && descriptionData !== "") {
            return descriptionData.split("●")
        }else{
            return [""]
        }
    }

    return (

        <div className='col-md-4 col-sm-4' onClick={() => openInNewTab(props.author)}>
            <div className='portfolio_card'>
                <div className='port-content'>
                    <img src={props.imglink} className='img-fluid' />
                </div>
                <div className='portfolio_card_title'>
                    <h4><b>{props.title}</b></h4>
                    <div className='border-horizontal'>&nbsp;</div>
                </div>
               
                <ul>
                {

                    formatDes(props.description).map((data)=>{
                        if(data !== "")
                            return <li><p className='about-txt2'>{data}</p></li>
                    })
                }
                </ul>
            </div>
        </div>
    )
}       
