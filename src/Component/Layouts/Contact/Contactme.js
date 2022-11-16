import React from 'react'

export default function Contactme() {
    return (
        <section id='home-contact-section'>
            <div className='card-container'>
                <div className='container'>
                    <div class='heading-horizontal text-center'>
                        <h5>Who i am</h5>
                        <h2>Get In Touch</h2>
                        <div class='border-horizontal'>&nbsp;</div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='aboutus-details'>
                                <h2>Get In Touch</h2>
                                <p>Reach out to me on below addresses.
                                </p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='about-datalist'>
                                            <h5><i className='fa fa-dote'></i>Gujarat, India</h5>
                                            <ul>
                                                <li><i className='fa fa-mobile'></i>+918980538584</li>
                                                <li><i className='fa fa-envelope'></i>pramodv997.com</li>
                                                <li>
                                                    <i className='fa fa-map-marker'></i><span>Varachha, surat
                                                        <br />
                                                        gujarat india</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className='about-datalist'>
                                            <h5>North York, Canada</h5>
                                            <ul>
                                                <li><i className='fa fa-mobile'></i>+1 519-259-9710</li>
                                                <li><i className='fa fa-envelope'></i>pramodv997@gmail.com</li>
                                                <li>
                                                    <i className='fa fa-map-marker'></i><span>North York
                                                        <br />
                                                        Ontario, Canada</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='about-scoicon'>
                                    <ul className='socialicon'>
                                        <li>
                                            <a href='#'><i className='fa fa-facebook'></i></a>
                                        </li>
                                        <li>
                                            <a href='#'><i className='fa fa-google-plus'></i></a>
                                        </li>
                                        <li>
                                            <a href='#'><i className='fa fa-twitter'></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-box'>
                                <h3 id='mdatax'>Contact Me</h3>
                                <p>
                                    Fill below form to get in touch with me.
                                </p>
                                <form action='/' id='submit-form' method='POST'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <input
                                                    name='mName'
                                                    className='form-control form-control-sm'
                                                    type='text'
                                                    placeholder='Your Name'
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <input
                                                    className='form-control form-control-sm'
                                                    type='email'
                                                    placeholder='Your Email'
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <input
                                                    className='form-control form-control-sm'
                                                    type='text'
                                                    placeholder='Your Company Name'
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <input
                                                    className='form-control form-control-sm'
                                                    type='email'
                                                    placeholder='Your Contact Number'
                                                />
                                            </div>
                                            <div className='col-md-12'>
                                                <textarea
                                                    className='form-control'
                                                    placeholder='Write Description'
                                                    id='exampleFormControlTextarea1'
                                                    rows='8'
                                                ></textarea>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-btn'>
                                                    <button type='submit' className='btn btn-general'>
                                                        &nbsp; Submit &nbsp;
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
