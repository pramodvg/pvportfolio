import React from 'react'

export default function education() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <section id="home-education-section">
            <div id='education-section-box'>
                <div className='container'>
                    <div className='heading-horizontal text-center'>
                        <h5>Education Background</h5>
                        <h2>My Education</h2>
                        <div className='border-horizontal'>&nbsp;</div>
                    </div>
                    <div className='educationDetails'>
                        <div className="selectBox selectBox1">
                            <div class="clgBox" onClick={() => openInNewTab("https://www.conestogac.on.ca/")}>
                                <img src="/pvportfolio/Photos/appicon.png" alt="" />
                                <h3>Conestoga College</h3>
                            </div>
                            <div class="clgBox" onClick={() => openInNewTab("https://www.vnsgu.ac.in/")}>
                                <img src="/pvportfolio/Photos/vnsgu.jpg" alt="" />
                                <h3>V.N.S.G.U University</h3>
                            </div>
                        </div>
                        <div className='education-right-box'>
                            <div className="detailHeader">
                                <img src="/pvportfolio/Photos/appicon.png" alt="" />
                                <div>
                                    <h3> Conestoga Collage </h3>
                                    <span>(May 2021 - August 2022)</span>
                                </div>
                            </div>
                            <div className="detailBody">
                                <h3>Mobile Solutions Development</h3>
                                <h5>topics</h5>
                                <div class="topic">
                                    <div class="topicDiv"><span>Web Technology (MERN)</span></div>
                                    <div class="topicDiv"><span>Android Application</span></div>
                                    <div class="topicDiv"><span>Java/Kotlin</span></div>
                                    <div class="topicDiv"><span>Database development</span></div>
                                    <div class="topicDiv"><span>Swift</span></div>
                                    <div class="topicDiv"><span>C#</span></div>
                                    <div class="topicDiv"><span>Javascript</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
