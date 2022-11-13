import React from "react";
import Icon, {
  StarFilled,
  CloseCircleFilled,
  HeartFilled,
  FilterFilled,
  HomeFilled,
  MessageFilled,
  SmileFilled,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-white text-center text-white">
      {/* Grid container */}
      <div
        className="container p-4"
        style={{ backgroundColor: "#BBEEFF", width: "40%" }}
      >
        <section>
          <div className="row">
            {" "}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <CloseCircleFilled />
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <StarFilled />
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <HeartFilled />
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <FilterFilled />
              </h5>
            </div>
          </div>
        </section>
      </div>
      <div
        className="container p-4"
        style={{ backgroundColor: "#F8F9FA", width: "40%" }}
      >
        <section>
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <HomeFilled />
              </h5>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <MessageFilled />
              </h5>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">
                <SmileFilled />
              </h5>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
