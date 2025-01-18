
import "./Opinion.css";
export default function opinion() {
    return (
        <>
            <br />
            <br />
            <br />

            <main id="opin"  className="container "  >
                <div className="row" >
                    <div className="col-md-12 col-12" >


                        <swiper-container style={
                            {
                                "--swiper-navigation-color": "black",
                                "--swiper-pagination-color": "#fff"

                            }
                        }
                            pagination-clickable="true"
                            navigation="true"
                            className="mySwiper">




                            <swiper-slide lazy="true">
                                <img src={require('./client.jpg')} loading="lazy" alt="" />
                                <h4>Samantha Jonas</h4>
                                <p>It is a long established fact that a reader will be distracted
                                    by the readable cIt is a long established fact that a reader will be distracted by the readable c
                                </p>
                                <i class="fa-solid fa-quote-left"></i>
                            </swiper-slide>



                            <swiper-slide lazy="true">
                                <img src={require('./client.jpg')} loading="lazy" alt="" />
                                <h4>Samantha Jonas</h4>
                                <p>It is a long established fact that a reader will be distracted
                                    by the readable cIt is a long established fact that a reader will be distracted by the readable c
                                </p>
                                <i class="fa-solid fa-quote-left"></i>
                            </swiper-slide>



                            <swiper-slide lazy="true">
                                <img src={require('./client.jpg')} loading="lazy" alt="" />
                                <h4>Samantha Jonas</h4>
                                <p>It is a long established fact that a reader will be distracted
                                    by the readable cIt is a long established fact that a reader will be distracted by the readable c
                                </p>
                                <i class="fa-solid fa-quote-left"></i>
                            </swiper-slide>


                            <swiper-slide lazy="true">
                                <img src={require('./client.jpg')} loading="lazy" alt="" />
                                <h4>Samantha Jonas</h4>
                                <p>It is a long established fact that a reader will be distracted
                                    by the readable cIt is a long established fact that a reader will be distracted by the readable c
                                </p>
                                <i class="fa-solid fa-quote-left"></i>
                            </swiper-slide>

                        </swiper-container>


                    </div>
                </div>
            </main>
            <br />
            <br />

        </>
    )
}