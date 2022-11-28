import React from 'react'
export default function home() {
    return (
        <section id='home-section'>
            <div className='home-section-box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='home-section-textctr'>
                                <p className='home-txt1'>Hello, I am Pramod</p>
                                <p className='home-txt2' id='sentdata'>Full Stack
                                    <br /><strong>Developer</strong></p>
                                <p className='home-txt3'>Android Application And <br />Web Developer</p>
                                <form action='/contact' name='submit' method='POST'>
                                    <button
                                        className='home-btn-hire'
                                        id='hirebtn'
                                        name='submit'
                                        type='submit'
<<<<<<< HEAD
                                    >hello</button>
=======
                                    ></button>
>>>>>>> 6ed3e50bec21660f2850629f09aa48e934d7f419
                                </form>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='home-imgctr' >
                                <img
                                    src='/pvportfolio/Photos/avtarround.png'
                                    alt='Pramod Vaghasia Profile Photo'
                                    id='home-myavtar'
                                    className='img-fluid'
                                />
                            </div>
                            <div className='home-btn-download text-center'>
                                <a
                                    href='/pvportfolio/files/Pramod Vaghasia Resume.pdf'
                                    download='Pramod_Vaghasia_Resume'
                                >Resume</a>
                                <i className='fa fa-download'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
