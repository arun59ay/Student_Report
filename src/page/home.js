import React, { useRef } from "react";
import StudentTable from "../component/studentTable";
import getStudentList from "../studentData/studentMockData.json";
import PieChart from "../component/pieChart";
import LineChart from "../component/lineChart";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import Header from "../component/header";

const Home = ({ dispatch }) => {
  const pdfRef = useRef();

  // Access the history object
  const navigate = useNavigate();

  const getStudentDataItem = (data) => {
    dispatch({ type: "SET_DATA_ASYNC", payload: data });
    goToNextRoute();
  };

  // Function to navigate to the next route
  const goToNextRoute = () => {
    // Use history.push to navigate to the next route
    navigate("/student-info");
  };

  const downloadPDF = () => {
    const input = pdfRef.current;
    domtoimage
      .toPng(input)
      .then((dataUrl) => {
        // Create a new jsPDF instance
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (input.clientHeight * imgWidth) / input.clientWidth;

        // Add the image to the PDF
        pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);

        // Download the PDF
        pdf.save("studentListData.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <div>
      <Header clickDownloadPDF={downloadPDF} />
      <div className="homeContainer" ref={pdfRef}>
        <div className="homeContent">
          <div className="chartsContainer">
            <div className="pieChartBlock">
              <PieChart studentData={getStudentList} />
            </div>
            <div className="lineChartBlock">
              <LineChart studentData={getStudentList} />
            </div>
          </div>
          <div className="studentTableContainer">
            <StudentTable
              studentData={getStudentList}
              studentDataClicked={getStudentDataItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Home);
