import "./Home.css";

export default function Home() {

    const head1 = `Best Jeweller Collection`;

    const text1 = `It is a long established fact that a reader will be
     distracted by the readable content of a page when looking at its layout. The point of using Lorem `

    const btn1 = 'Shop Now';


    return (

        <>

            <section className="home container-fluid " id="home" >

                <div className="home-content" >

                    <h1>{head1}</h1>
                    <p>{text1}</p>
                    <button>{btn1}</button>
                </div>
                <div className="home-image" >

                </div>

            </section>

        </>
    )
}