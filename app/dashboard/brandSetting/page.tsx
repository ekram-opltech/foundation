"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditBrand from "./edit-brand";
import { useEffect, useState } from "react";
import { GetSiteSetting } from "@/app/services/dashboard-services";

const BrandSetting = () => {

    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const [siteSetting, setSiteSetting] = useState<any>(null);

    useEffect(() => {
        const fetchSiteSetting = async () => {
            try {
                const data = await GetSiteSetting();
                setSiteSetting(data);
            } catch (error) {
                console.error("Failed to fetch site setting:", error);
            }
        };
        fetchSiteSetting();
    }, []);

    const toggleEditForm = () => {
        setShowEditForm((prev) => !prev);
    };

    return (
        <div className="cause-details-content">
            <div className="single-sidebar-box">
                <div className="sidebar-title">
                    <h3>Brand Settings</h3>
                </div>
                <div className="sidebar-cause-post">
                    <ul className="clearfix">
                        <li>
                            <div className="inner brand_content">
                                <div className="img-box">
                                    <img src={siteSetting?.brandLogo} alt="Awesome Image" />
                                    <div className="overlay-content"></div>
                                </div>
                                <div className="title-box">
                                    <h4>{siteSetting?.brandName || "No Brand Name Set"}</h4>
                                    <div className="">
                                        <p>{siteSetting?.contactEmail || "No Contact Email Set"}</p>
                                        <p>{siteSetting?.contactPhone || "No Contact Phone Set"}</p>
                                        <p>{siteSetting?.address || "No Address Set"}</p>
                                    </div>
                                    <div className="btn-box">
                                        <button className="btn-one" onClick={toggleEditForm}>
                                            <span className="txt">
                                                <FontAwesomeIcon icon={faPenToSquare} className="me-1" />
                                                Update Now
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {showEditForm && <EditBrand siteSetting={siteSetting} />}
            </div>
        </div>
    )
}

export default BrandSetting
