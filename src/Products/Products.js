import { requestFormReset } from "react-dom";
import "./Product.css";
export default function Product() {
    return (
        <>


            <section id="shopp"  className="container-fluid pro  p-2  " >
                <br />
                <h1 className="head2" >Latest Products</h1>

                <section className="container   pro-container" >

                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <div>
                            <img id="img1" className="p-5" src={require('./p1.png')} />
                        </div>
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $200</span></h6>
                        </div>

                    </div>


                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p2.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $300</span></h6>
                        </div>

                    </div>

                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p3.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $110</span></h6>
                        </div>

                    </div>

                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p4.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $200</span></h6>
                        </div>

                    </div>



                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p5.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $400</span></h6>
                        </div>

                    </div>

                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p6.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $130</span></h6>
                        </div>

                    </div>

                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p7.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $230</span></h6>
                        </div>

                    </div>

                    <div className="pro-box">
                        <div className="span1" >New</div>
                        <img id="img1" className="p-5" src={require('./p8.png')} />
                        <div className="information" >
                            <h6>Necklace</h6>
                            <h6>price <span> $250</span></h6>
                        </div>

                    </div>







                </section>
            </section>

        </>
    )
}