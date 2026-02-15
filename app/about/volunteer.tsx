
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

const volunteers = [
    {
        id: 1,
        name: "Farzan Khan",
        role: "CEO & Founder",
        image: "/images/team/team-v1-1.jpg",
        fbLink: "https://www.facebook.com/",
        twitterLink: "https://twitter.com/",
        instaLink: "https://www.instagram.com/",
        youtubeLink: "https://www.youtube.com/"
    },
    {
        id: 2,
        name: "Faisal Khan",
        role: "Senior Officer",
        image: "/images/team/team-v1-7.jpg",
        fbLink: "https://www.facebook.com/",
        twitterLink: "https://twitter.com/",
        instaLink: "https://www.instagram.com/",
        youtubeLink: "https://www.youtube.com/"
    },
    {
        id: 3,
        name: "Talib Khan",
        role: "Senior Volunteer",
        image: "/images/team/team-v1-2.jpg",
        fbLink: "https://www.facebook.com/",
        twitterLink: "https://twitter.com/",
        instaLink: "https://www.instagram.com/",
        youtubeLink: "https://www.youtube.com/"
    },
    {
        id: 4,
        name: "Sabih Anwar",
        role: "Senior Volunteer",
        image: "/images/team/team-v1-8.jpg",
        fbLink: "https://www.facebook.com/",
        twitterLink: "https://twitter.com/",
        instaLink: "https://www.instagram.com/",
        youtubeLink: "https://www.youtube.com/"
    }
];

const Volunteer = () => {




    return (
        <section className="team-style1">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title center">
                        <h4>work & support charity with us</h4>
                        <div className="big-title">our Team</div>
                    </div>
                    <h2>Meet Our Volunteers</h2>
                </div>
                <div className="row">
                    {
                        volunteers.map((item) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                                    <div className="single-team-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <div className="img-holder">
                                            <div className="inner">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="overlay-content">
                                                <div className="team-social-link">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <Link href={item.fbLink}>
                                                                <FontAwesomeIcon icon={faFacebook} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={item.twitterLink}>
                                                                <FontAwesomeIcon icon={faTwitter} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={item.instaLink}>
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={item.youtubeLink}>
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box text-center">
                                            <h3>{item.name}</h3>
                                            <h5>{item.role}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Volunteer
