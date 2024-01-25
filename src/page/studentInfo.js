import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "../component/header";

const StudentInfo = ({ receivedData }) => {
  const [studentInfoData] = useState(receivedData);

  return (
    <>
      <Header  />
      <div className="studentContainer">
        <div className="studentPageTitle">Student Profile Information</div>
        <div className="studentInfoContainer">
          <div className="studentinfo">
            <div className="studentProfileCard card">
              <div className="studentProfilePicture">
                <img
                  className="studentImage"
                  src={require(`../assets/image/${studentInfoData?.studentImg}.png`)}
                  alt="User Profile"
                />
              </div>
              <div className="studentName">{studentInfoData?.userName}</div>
              <div className="studentLinePartition"></div>
              <div className="studentInfoContent">
                <div>Student ID: {studentInfoData?.userId}</div>
              </div>
            </div>
            <div className="studentGeneralContainer">
              <div className="studentGeneralInfoCard card">
                <div className="StudentCardInfoTitle">General Information</div>
                <div className="studentTableDetailsContainer">
                  <div className="studentTableDetailsContent">
                    <div className="studentTableRow">
                      <div className="studentTableTitle">Student ID</div>
                      <div className="studentTableTitleSpacing">:</div>
                      <div className="studentTableTitleData">
                        {studentInfoData?.userId}
                      </div>
                    </div>
                    <div className="studentTableRow">
                      <div className="studentTableTitle">Student Name</div>
                      <div className="studentTableTitleSpacing">:</div>
                      <div className="studentTableTitleData">
                        {studentInfoData?.userName}
                      </div>
                    </div>
                    <div className="studentTableRow">
                      <div className="studentTableTitle">Grade</div>
                      <div className="studentTableTitleSpacing">:</div>
                      <div className="studentTableTitleData">
                        {studentInfoData?.grade}
                      </div>
                    </div>
                    <div className="studentTableRow">
                      <div className="studentTableTitle">Joining Date</div>
                      <div className="studentTableTitleSpacing">:</div>
                      <div className="studentTableTitleData">
                        {studentInfoData?.joinDate
                          ? studentInfoData?.joinDate
                          : "-- --"}
                      </div>
                    </div>
                    <div className="studentTableRow">
                      <div className="studentTableTitle">Leaving Date</div>
                      <div className="studentTableTitleSpacing">:</div>
                      <div className="studentTableTitleData">
                        {studentInfoData?.leaveDate
                          ? studentInfoData?.leaveDate
                          : "-- --"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="studentOtherInfoCard card">
                <div className="StudentCardInfoTitle">Other Information</div>
                <div className="studentDescriptionData">
                  {studentInfoData?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  receivedData: state.data,
});

export default connect(mapStateToProps)(StudentInfo);
