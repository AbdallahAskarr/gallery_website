
import "./Navbar.css";
export default function Nav() {

    return (
        <>
            <nav class="navbar navbar-expand-lg " id="navv">
                <div class="container-fluid">
                    <a id="logo" class="navbar-brand" href="#">
                        <span style={{ position: 'relative', top: "3px", left: "8px" }}>HEALET</span>  </a>
                    <button style={{ border: "none" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler" style={{ border: "none" }}><i style={{ fontWeight: "bolder", color: "black" }} class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2  ms-auto   mb-lg-0 ">
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link " aria-current="page" href="#home">Home</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start ">
                                <a id="a" class="nav-link" href="#aboutt">About</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#shopp">shop</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#parent_two">offer</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#blogg">blog</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#opin">opinion </a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item text-start">
                                <a id="a" class="nav-link" href="#con">contact us </a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>


    )
}