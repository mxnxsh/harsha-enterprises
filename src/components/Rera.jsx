import React from 'react'

export default function Rera() {

    function visible() {
        document.getElementById("qna_form").style.display = "block";
    }

    return (
        <>
            <section id="rera">
                <div className="container">
                    <div className="center pt-5">
                        <h1 className='section-title'>RERA Consultancy for individual Agents</h1>
                    </div>
                    <div className="row">
                        
                        <div className="col-md-6 text">
                            <p>Get Registered as a <b>Real Estate Agent</b> with RERA.GetYour Registration Certificate within 10 Days </p>
                            <p>Harsha Enterprises Files the Application and Prepares all Required Paper Work on yur Behalf to Make the Process Easy for You</p>
                        </div>

                        <div className="col-md-6">
                            <div class="mx-auto">
                                <img
                                src='./images/0eb1035379.png'
                                className='rounded mx-auto d-block home_image'
                                alt='home logo'
                                />
                            </div>
                        </div>
                        
                        <div className="d-block mx-auto">
                            <button className="btn btn-success">APPLY NOW</button>
                        </div>

                    </div>
                </div>
            </section>
            <svg className='gray' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'>
                <path fill='#e7e7de' fillOpacity='1' d='M0,0L1440,0L1440,0L0,80Z'></path>
            </svg>

            <section id="rera_process">
                <div className="container">
                    <div className="center pt-5">
                        <h1 className='section-title'>Process</h1>
                    </div>
                    
                    <div className="main_process">
                        <div className="process_round">
                            <h5>Share Basic Documents</h5>
                        </div>
                        <div className="process_round">
                            <h5>We file your application</h5>
                        </div>
                        <div className="process_round">
                            <h5>Pay fees through our payment page</h5>
                        </div>
                        <div className="process_round">
                            <h5>Get certificate in 10 days</h5>
                        </div>
                    </div>

                    <div className="p-5">
                        <button className="btn btn-success d-block mx-auto">APPLY NOW</button>
                    </div>
                </div>
            </section>

            <svg className="gray_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
                <path fill="#e7e7de" fill-opacity="1" d="M0,80L1440,0L1440,80L0,80Z"></path>
            </svg>

            <section id="rera_qna">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6 text">
                            <h3>Is RERA Registration Mandatory?</h3>
                            <p>Under the Real Estate (Regulation and Development) Act <b>(RERA)</b>, which came into force on <b>May 1, 2017</b>, it is mandatory for real estates agents to register themselves with RERA, to be able to facilitate any Transaction or Deal.</p>
                        </div>
                        <div className="col-md-6 text">
                            <h3>What is fees for filling RERA Application?</h3>
                            <p>At Harsha Enterprises we are committed to make processing leave and license agreements easy and hassle free. We also bring you RERA consultation, Digital Signature Registration... All under one roof</p>
                        </div>
                        <div className="col-md-12 text" style={{textAlign: "center"}}>
                            <h3>What is Validity of RERA Certificate?</h3>
                            <p className="mx-auto" style={{width: "530px"}}>Your RERA Certificate will have validity of <b>5 Years</b> starting from Date it is issued by the RERA Authority. </p>
                        </div>
                        <div className="col-md-6 text">
                            <h3>What documents are required?</h3>
                            <p>Your 1) Photo, 2) PAN Card, 3) Aadhar Card and basic documents required to fill RERA application</p>
                        </div>
                        <div className="col-md-6 text">
                            <div className="qna_form" id="qna_form">
                                <form>
                                    <div class="form-group row">
                                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputName" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputName" class="col-sm-2 col-form-label">Contact</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="inputName" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" id="inputEmail" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputName" class="col-sm-2 col-form-label">Service</label>
                                        <div class="col-sm-10">
                                            <input type="text" className="form-control" id="inputName" value="RERA" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
                                </form>
                            </div>    
                        </div>
                    </div>
                    <div className="p-5">
                        <button className="btn btn-success d-block mx-auto" onclick={visible}>APPLY NOW</button>
                    </div>
                </div>
            </section>
        </>
    )
}