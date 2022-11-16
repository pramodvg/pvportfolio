import React, { useEffect, useState } from 'react'
import Axios from '../../../axios'
import PortfolioItem from './PortfolioItem'
import portfolioPageData from '../../../Model/PortFolioData'
export default function Portfolio() {
    const [portfolioData, setPortfolio] = useState([])

    useEffect(()=>{
        async function fetchData() {
            setPortfolio(portfolioPageData())
            // await Axios.get('/get/portfolio')
            //     .then((result) => {
            //         console.log(result.data)
            //         setPortfolio(result.data)
            //     }).catch((err) => {
            //         console.log(err)
            //     })
        }
        fetchData()
    },[])

  return (
      <section id='home-portfolio-section'>
          <div className='container'>
              <div className='heading-horizontal text-center'>
                  <h5>FIND MY WORK</h5>
                  <h2>My WORK</h2>
                  <div className='border-horizontal'>&nbsp;</div>
              </div>
              <div className='row'>
                  {
                      portfolioData.map((data, index) => {
                          return <PortfolioItem props={data} key={index} />
                      })
                  }
            
              </div>
          </div>
      </section>
  )
}
