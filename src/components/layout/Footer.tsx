const Footer: React.FC<{}> = () => {
    return (
        <footer>
            {/* Footer ==== */}
            <div className="footer-top">
                <div className="pt-exebar">
                    <div className="container">
                        <div className="row d-flex align-items-center footer-logo-bar">
                            <div className="row col-12 col-md-8 justify-content-center pt-4 pb-3 footer-logos">
                                <div className="col-3">
                                    <a rel="noopener" href="https://www.dbit.in/" target="_blank" aria-label="Dbit website"><img
                                        src="/assets/images/DBIT.png" alt="DBIT LOGO" className="img-fluid my-1 mx-4" /></a>
                                </div>
                                <div className="col-3">
                                    <a href="https://dbit.acm.org/" aria-label="Home Page" rel="noopener"><img src="/assets/images/acm.png"
                                        className="img-fluid my-1 mx-4" alt="ACM DBIT LOGO" /></a>
                                </div>

                                <div className="col-3">
                                    <a rel="noopener" href="index.astro" aria-label="Teknack website"><img
                                        src="/assets/images/teknack.png" alt="Teknack Logo" className="img-fluid my-1 mx-4" /></a>
                                </div>
                                <div className="col-3">
                                    <a rel="noopener" href="https://dbit.acm.org/flockflair" aria-label="Flockflair website"><img
                                        src="/assets/images/ff.png" alt="Flockflair Logo" className="img-fluid my-1 mx-4" /></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="pt-social-link justify-content-center text-center py-4">
                                    <ul className="list-inline m-a0 justify-content-center text-center">
                                        <li>
                                            <a rel="noopener" href="https://www.instagram.com/acmdbit/" target="_blank" aria-label="instagram"
                                                className="btn-link"><i className="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a rel="noopener" href="https://www.linkedin.com/company/acm-dbit/" target="_blank"
                                                aria-label="linkedin" className="btn-link"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a rel="noopener" href="https://github.com/acm-dbit" target="_blank" aria-label="github"
                                                className="btn-link"><i className="fa fa-github"></i></a>
                                        </li>
                                        <li>
                                            <a rel="noopener" href="https://twitter.com/acmdbit?lang=en" target="_blank" aria-label="twitter"
                                                className="btn-link"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a rel="noopener" href="https://www.youtube.com/channel/UC58zaYJo0LL_aJXvqLDJGLA"
                                                aria-label="youtube" target="_blank" className="btn-link"><i className="fa fa-youtube-play"></i></a>
                                        </li>
                                        <li>
                                            <a rel="noopener" href="https://www.facebook.com/ACMDBIT/" aria-label="facebook" target="_blank"
                                                className="btn-link"><i className="fa fa-facebook"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-3" style={{ fontSize: "0.9em" }}>
                        &copy;
                        {new Date().getFullYear() + " ACM DBIT Student Chapter"}.<br />Developed by <a
                            href="https://grejo.in/" target="_blank" rel="noopener">Grejo Joby</a>
                        & <a href="https://hayden.co.in/" target="_blank" rel="noopener">Hayden Cordeiro.</a>
                    </div>
                </div>
            </div>
            {/* Footer END ==== */}
        </footer>
    )
}

export default Footer;