import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";

const JoinLeaveGraph = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const getJoinLeaveCount = (date) => {
        const selectedDate = new Date(date);
      
        const joinCount = data.filter(
          (entry) =>
            entry.joinDate &&
            new Date(entry.joinDate).toDateString() === selectedDate.toDateString()
        ).length;
      
        const leaveCount = data.filter(
          (entry) =>
            entry.leaveDate &&
            new Date(entry.leaveDate).toDateString() === selectedDate.toDateString()
        ).length;
        
        return { date: selectedDate.toISOString().split("T")[0], joinCount, leaveCount };
      };
      
      

    if (selectedDate) {
      const updatedChartData = getJoinLeaveCount(selectedDate);
      setChartData([updatedChartData]);
    } else {
      // Show all joiners and leavers by default
      const allChartData = data.reduce((acc, entry) => {
        const existingEntry = acc.find((item) => item.date === entry.joinDate);
        if (existingEntry) {
          existingEntry.joinCount++;
        } else {
          acc.push({ date: entry.joinDate, joinCount: 1, leaveCount: 0 });
        }

        const leaveEntry = acc.find((item) => item.date === entry.leaveDate);
        if (leaveEntry) {
          leaveEntry.leaveCount++;
        } else {
          acc.push({ date: entry.leaveDate, joinCount: 0, leaveCount: 1 });
        }

        return acc;
      }, []);

      setChartData(allChartData);
    }
  }, [data, selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReset = () => {
    setSelectedDate("");
  };

  const options = {
    title: {
      text: "Joiners and Leavers",
    },
    data: chartData,
    series: [
      {
        type: "line",
        xKey: "date",
        yKey: "joinCount",
        title: "Joiners",
      },
      {
        type: "line",
        xKey: "date",
        yKey: "leaveCount",
        title: "Leavers",
      },
    ],
    legend: {
      position: "top",
    },
  };

  return (
    <div>
      <AgChartsReact options={options} />
      <div className="filterJoinerDate">
        <div className="joinerDetails">
        <label className="selectedDateLabel">Select Date: </label>
        <input
          className="formInput"
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          />
          </div>
        <button className="resetBtn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const LineChart = (props) => {
  const data = props.studentData;
  return (
    <div>
      <JoinLeaveGraph data={data} />
    </div>
  );
};

export default LineChart;
