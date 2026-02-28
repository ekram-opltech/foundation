"use client"
import { useEffect, useState } from "react";
import { GetAboutUs } from "@/app/services/dashboard-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditAbout from "./EditAbout";

const About = () => {

  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAboutUs();
        setData(data);
        localStorage.setItem("aboutUsData", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to fetch about us data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleEditForm = () => {
    setShowEditForm((prev) => !prev);
  };

  return (
    <div className="cause-details-content">
      <div className="single-sidebar-box">
        <div className="sidebar-title">
          <h3>About Us</h3>
        </div>
        <div className="sidebar-cause-post">
          <ul className="clearfix">
            <li>
              <div className="">
                <div className="row">
                  <div className="col-md-4">
                    <div className="img-box aboutImg">
                      <img src={data?.imageUrl} alt="about Image" />
                      <div className="overlay-content"></div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="">
                      <h4>{data?.title || "No Title Set"}</h4>
                      <div className="">
                        <h6 className="mt-2">{data?.subTitle || "No Subtitle Set"}</h6>
                        <p className="mt-2">{data?.description || "No Description Set"}</p>
                      </div>
                      <div className="btn-box mt-4">
                        <button className="btn-one" onClick={toggleEditForm}>
                          <span className="txt">
                            <FontAwesomeIcon icon={faPenToSquare} className="me-1" />
                            Update Now
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {showEditForm && <EditAbout data={data} />}
      </div>
    </div>
  )
}

export default About
