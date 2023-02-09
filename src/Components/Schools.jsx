import React, { useState } from "react";
import "./School.css";
import logo from "./Image/logo.png";
import SchoolIcon from "./Image/Schoolicon.png";
import { BiSearch } from "react-icons/bi";
import School1 from "./School1";
const data = [
  {
    id: "1",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "abc",
    contactName: "abc",
    emailId: "abc",
    phone: "abc",
    location: "abc",
  },
  {
    id: "2",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "3",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "4",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "5",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "6",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "7",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "8",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "9",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "10",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "11",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "12",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "13",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "14",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "15",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
  {
    id: "16",
    schoolCode: "0025",
    schoolName: "St. Johns International",
    domain: "",
    contactName: "",
    emailId: "",
    phone: "",
    location: "",
  },
];
function School() {
  const [schoolData, setSchoolData] = useState(data);
  return (
    <div className="bg-[#F2F6FF] h-[100vh]">
      <div className="header">
        <div>
          <img className="logoHeader" src={logo} alt="" />
        </div>
        <div>
          <img src="" className="userImg" alt="" />
        </div>
      </div>
      <div
        className="h-[80px] w-[100%] bg-[#e2e0e0] 
       "
      >
        <div
          className="h-[100%] w-[15%]  justify-center items-center 
         flex m-auto "
        >
          <img
            className="w-[40px] h-[50%] "
            src={SchoolIcon}
            alt="SchoolIcon"
          />
          <p className="text-[25px]  ml-[10px] ">Schools</p>
        </div>
      </div>
      <div className="h-[130px] w-[100vw]     ">
        <div className=" block sm:flex h-[100px] sm:h-[40px] bg-transparent w-[full]  lg:w-[90%] m-auto mt-[20px] sm:mt-[40px] justify-start ">
          <div className="flex w-[90%] sm:w-[40%] lg:w-[25%] ml-[5px] mb-5 sm:mb-0 ">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-500 border-r-none w-[85%] rounded-l-md pl-[20px] "
            />
            <div className="border border-orange-500 w-[10%] sm:w-[13%] bg-orange-500 text-white h-[100%] text-[25px] box-border p-[7px] rounded-r-md ">
              <BiSearch />
            </div>
          </div>
          <div className="w-[40%] sm:w-[20%]">
            <button className="ml-[40px] h-[40px] text-center text-white w-[100%] rounded-md bg-orange-500 border border-red-500 ">
              Add School
            </button>
          </div>
        </div>
        <div className="border relative  mt-[50px] h-[60vh] w-[100%]">
          <div className="w-[100%] lg:w-[90%] overflow-y-scroll border overflow-x-scroll  m-auto mt-4 h-[93%] ">
            <table className="relative w-[100%] h-[50vh]  m-auto ">
              <thead className="sticky top-0 bg-[#E3E3E3]">
                <tr className=" justify-between  h-[50px]   text-gray-700 ">
                  <th className="border-r-2  border-gray-500">School Code</th>
                  <th className="border-r-2  border-gray-500">School Name</th>
                  <th className="border-r-2  border-gray-500">Domain</th>
                  <th className="border-r-2  border-gray-500">Contact Name</th>
                  <th className="border-r-2  border-gray-500">Email ID</th>
                  <th className="border-r-2  border-gray-500">Phone</th>
                  <th className="border-r-2  border-gray-500">Location</th>
                  <th className="">More</th>
                </tr>
              </thead>
              <tbody className=" ">
                {/* <div className=" border border-red-900 w-[100%]"> */}
                {schoolData &&
                  schoolData.map((el) => (
                    <>
                      {/* {console.log(el)} */}
                      <School1
                        key={el.id}
                        i={el.id}
                        schoolCode={el.schoolCode}
                        schoolName={el.schoolName}
                        domain={el.domain}
                        contactName={el.contactName}
                        EmailId={el.emailId}
                        Phone={el.phone}
                        Location={el.location}
                      />
                    </>
                  ))}
                {/* </div> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default School;
