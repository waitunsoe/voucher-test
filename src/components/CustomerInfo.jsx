import React, { useState } from "react";

const CustomerInfo = ({ customerInfo }) => {


  return (
    <div className="flex justify-end my-5">
      <table>
        <tbody>
          <tr>
            <th className=" font-normal p-1 text-left">Date</th>
            <td className=" p-1 text-left pl-8">
              {Date()}
            </td>
          </tr>
          <tr>
            <th className=" font-normal p-1 text-left">Name</th>
            <td className=" p-1 text-left pl-8">{customerInfo.name}</td>
          </tr>
          <tr>
            <th className=" font-normal p-1 text-left">Phone</th>
            <td className=" p-1 text-left pl-8">{customerInfo.phone}</td>
          </tr>
          <tr>
            <th className=" font-normal p-1 text-left">Address</th>
            <td className=" p-1 text-left pl-8">{customerInfo.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerInfo;
