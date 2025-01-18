
import "./About.css";
export default function About() {
    return (
        <>
            <section id="aboutt"  className="container-fluid  aboutContainer  " >
                <br />
                <br />

                <section className="about-box container" >


                    <div className="about-image " >
                        <img src={require("./about-img.jpg")} className="" />
                    </div>

                    <div className="about-content" >
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.

                        </p>
                        <button> Read More</button>
                        <br />
                        <br />

                    </div>


                </section>
            </section>

        </>
    )
}