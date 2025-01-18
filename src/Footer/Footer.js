
import "./Footer.css";
export default function Footer() {
    return (
        <>
            <section id="con"  className="container-fluid  parentFooter " >
                <section className="container   " >
                    <div className="row secondParent" >
                        <div className=" col-md-8 col-9 ahaa" >
                            <input type="email" className="inputone" placeholder="Enter your email" />

                        </div>
                        <div className="col-md-3 col-9 ahaa "  >
                            <div className="social_media" >
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>

                            </div>
                        </div>


                        <div className="col-md-3 col-4 " id="footerlink" >
                            <h5 style={{ marginBottom: "12px" }} id="hh5" >Menu</h5>
                            <a href="#" >Home</a>
                            <a href="#" >About</a>
                            <a href="#" >Shop</a>
                            <a href="#" >Blog</a>


                        </div>



                        <div className="col-md-3 col-6" id="footerlink" >
                            <h5 id="hh5">Instagram</h5>
                            <div className="photoFooter" >
                                <img src={require("./p1.png")} />
                                <p>long established fact that a reader</p>
                            </div>

                            <div className="photoFooter" >
                                <img src={require("./p2.png")} />
                                <p>long established fact that a reader</p>
                            </div>

                        </div>

                        <div className="col-md-3 col-9  " id="footerlink" >
                            <h5 id="hh5" style={{ position: "relative", left: "12px" }}  >About Us</h5>
                            <p style={{ position: "relative", left: "12px" }}  >when looking at its layout. The point of using Lorem Ipsum is that
                                it has a more-or-less normal distribution of letters, as opposed to</p>
                        </div>

                        <div   className="col-md-3 col-9" id="footerlinkk" >
                            <h5 className="text-center" >Contact Us</h5>
                            <div style={{position:"relative",left:"30px"}}  className="loc"  >
                                <i  class="fa-solid fa-location-dot"></i>
                                <h6>Location</h6>
                            </div>

                            <div style={{ position: "relative", left: "30px" }}  className="locc"  >
                                <i class="fa-solid fa-phone"></i>
                                <h6>Call +011234567890</h6>
                            </div>

                            <div style={{ position: "relative", left: "30px" }} className="loccc"  >
                                <i class="fa-solid fa-envelope"></i>
                                <h6>demo@gamil.com </h6>
                            </div>

                        </div>




                    </div>
                </section>
            </section>
        </>
    )
}