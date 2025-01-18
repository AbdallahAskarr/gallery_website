import "./Team.css";
// import { motion } from "motion/react"
// import { useScroll } from "motion/react";

// import { gsap } from "gsap";


export default function Team() {
    // const { scrollYProgress } = useScroll()

    return (
        <div>



            <h1 id="blogg" className="head2" >Latest From Blog</h1>
            <section  className="container parent" >



                <div className="child_three" >

                    <img id="image_three" src={require("./b1.jpg")} alt="" />
                    <div className="aha" > <span>  14 <br /> July </span> </div>
                    <div className="card-body" >
                        <h3 className="card-title" >Molestiae ad reiciendis dignissimos</h3>
                        <p className="card-text" >alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable.</p>

                        <button>Read More</button>
                    </div>

                </div>

                <div className="child_three" >

                    <img id="image_three" src={require("./b2.jpg")} alt="" />
                    <div className="aha" > <span>  15 <br /> July </span> </div>
                    <div className="card-body" >
                        <h3 className="card-title" >Dolores vel maiores voluptatem enim</h3>
                        <p className="card-text"  >alteration in some form, by injected humour, or randomised words which
                            don't look even slightly believable.</p>

                        <button>Read More</button>

                    </div>
                </div>


              
            </section>
        </div >
    )
}