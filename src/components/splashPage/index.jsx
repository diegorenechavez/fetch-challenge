export default function SplashPage(props) {


    return (
        <div id="splash">

            <main className="hero">
                <figure className="hero__image">
                    <img src="hero-banner.jpg" alt="" className="hero-banner" />
                    <div className="hero__call-to-action-wrapper">
                        <figcaption className="hero__call-to-action">
                            <h2 className="title">
                                Welcome to Fetch!
                            </h2>
                            <p className="hero__introduction">
                                Here at Fetch, we love dogs, and hope you do too! Our task is to help a dog-lover like yourself search through a database of shelter dogs, with the hope of finding a lucky dog a new home!
                            </p>
                        </figcaption>
                    </div>
                </figure>

            </main>
            <section className="below-the-fold">
                <h2 className="feature-intro title">What We Offer</h2>
                <div className="below-the-fold__feature-list">
                    <div className="below-the-fold__feature-item">
                        <img src="featureOne.jpg" alt="" className="feature-image" />
                        <h3 className="feature-title">Search By Your Favorite Breed</h3>
                    </div>
                    <div className="below-the-fold__feature-item">
                        <img src="featureTwo.jpg" alt="" className="feature-image" />
                        <h3 className="feature-title">Save Your Favorites</h3>
                    </div>
                    <div className="below-the-fold__feature-item">
                        <img src="featureThree.jpg" alt="" className="feature-image" />
                        <h3 className="feature-title">Get Matched With Your Perfect Pup</h3>
                    </div>
                </div>
            </section>
            <footer>
                <a href="https://github.com/diegorenechavez" target="_blank">gitHub</a>
                <a href="https://docs.google.com/document/d/1WK04X39biwsJXdm_JmcC0T5V5Dv1tTEAwPTd-YOEhIA/edit?usp=sharing" target="_blank">Resume</a>
                <a href="https://diegorenechavez.github.io/Portfolio/" target="_blank">Portfolio</a>

            </footer>
        </div>
    )
}
