import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [studentInfoHeader, setStudentInfoHeader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const downloadPDF = () => {
    props?.clickDownloadPDF();
  };

  // Access the current pathname
  const currentPathname = location.pathname;

  useEffect(() => {
      if (currentPathname == "/student-info") {
        setStudentInfoHeader(true);
      }
  },[])

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="header">
      <div className="headerConatiner">
        {!studentInfoHeader ? (
          <div className="headerTitle">Student Information</div>
        ) : (
          <div className="headerTitle goBack" onClick={goBack}>
            <span>&#8592;</span> Student Information
          </div>
        )}
        {!studentInfoHeader ? (
          <div>
            <button className="studentExportBtn" onClick={downloadPDF}>
              Export Report
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
