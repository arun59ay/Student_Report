import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";


const PieChart = (props) => {


  const [students] = useState(props?.studentData);

  const [users] = useState(students);

  // Filter users based on grade
  const filterUsersByGrade = (grade) => {
    return users.filter((user) => user.grade === grade);
  };

  // Count total number of users
  const totalUsers = users.length;

  // Count users with each grade
  const gradeACount = filterUsersByGrade("A").length;
  const gradeBCount = filterUsersByGrade("B").length;
  const gradeCCount = filterUsersByGrade("C").length;


  const studentsData = [
    {
        studentGradeData: "Grade A Students", studentGrade: gradeACount
    },
    {
        studentGradeData: "Grade B Students", studentGrade: gradeBCount
    },
    {
        studentGradeData: "Grade C Students", studentGrade: gradeCCount
    },    
];

  const [options] = useState({
    data: studentsData,
    title: {
      text: "Students Grade",
    },
    series: [
      {
        type: "pie",
        angleKey: 'studentGrade',
        legendItemKey: 'studentGradeData',
        sectorLabelKey: "studentGradeData",
        sectorLabel: {
            color: "white",
            fontWeight: "bold",
            formatter: 'studentGrade',
        }
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

export default PieChart;
