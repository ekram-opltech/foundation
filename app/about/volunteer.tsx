"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import { useEffect, useState } from "react";
import { GetVolunteers } from "../services/dashboard-services";


const Volunteer = () => {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _data = await GetVolunteers();
                setData(_data);
            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, []);


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
                        data.map((item) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={item._id}>
                                    <div className="single-team-style1 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <div className="img-holder">
                                            <div className="inner">
                                                <img src={item.imageUrl} alt={item.firstName} />
                                            </div>
                                            <div className="overlay-content">
                                                <div className="team-social-link">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <Link target="_blank" href={item.facebookUrl}>
                                                                <FontAwesomeIcon icon={faFacebook} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link target="_blank" href={item.twitterUrl}>
                                                                <FontAwesomeIcon icon={faTwitter} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link target="_blank" href={item.instaUrl}>
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link target="_blank" href={item.youtubeUrl}>
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title-box text-center">
                                            <h3>{item.firstName} {item.lastName}</h3>
                                            <h5>{item.post}</h5>
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
