import React from 'react'
import { SlOptions } from "react-icons/sl";

const School1 = ({schoolCode,schoolName,domain,contactName,EmailId,Phone,Location,i}) => {
  return (
    <>
    {/* {data &&
          data.map((el) => ( */}
            <tr className="h-[50px] text-center border border-gray-500" key={i} >
              <td className="border-r-2  border-gray-500">{schoolCode}</td>
              <td className="border-r-2  border-gray-500">{schoolName}</td>
              <td className="border-r-2  border-gray-500">{domain}</td>
              <td className="border-r-2  border-gray-500">{contactName}</td>
              <td className="border-r-2  border-gray-500">{EmailId}</td>
              <td className="border-r-2  border-gray-500">{Phone}</td>
              <td className="border-r-2  border-gray-500">{Location}</td>
              <td className=" m-auto   items-center text-[22px] justify-center box-border">
                <div className=" text-center ml-3">
                  <SlOptions className=' cursor-pointer' />
                </div>
                
              </td>
            </tr>
          {/* ))} */}
          </>
  )
}

export default School1