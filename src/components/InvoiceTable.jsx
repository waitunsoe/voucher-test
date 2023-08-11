import React from "react";

const InvoiceTable = ({ invoiceItems, invoice }) => {
  return (
    <div className="w-full">
      <table className="w-full border rounded">
        <thead className=" border">
          <tr className=" text-left">
            <th className=" border-r p-5 w-[10%]">NO</th>
            <th className=" border-r p-5 w-[30%]">Item Name</th>
            <th className=" border-r text-right p-5 w-[20%]">Quantity</th>
            <th className=" border-r text-right p-5 w-[20%]">Price</th>
            <th className=" border-r text-right p-5 w-[30%]">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((invoiceItem) => (
            <tr key={invoiceItem.id} className=" border">
              <td className=" border-r p-5 w-[10%]">{invoiceItem.id}</td>
              <td className=" border-r p-5 w-[30%]">{invoiceItem.itemName}</td>
              <td className=" border-r text-right p-5 w-[20%]">
                {invoiceItem.quantity}
              </td>
              <td className=" border-r text-right p-5 w-[20%]">
                {invoiceItem.price}
              </td>
              <td className=" border-r text-right p-5 w-[30%]">
                {invoiceItem.amount}
              </td>
            </tr>
          ))}
          <tr className=" border text-right">
            <td colSpan={4} className=" p-5 border-r">
              Installation fees
            </td>
            <td className="p-5">{invoice.installationFees}</td>
          </tr>
          <tr className=" border text-right">
            <td colSpan={4} className=" p-5 border-r">
              Transportation charges
            </td>
            <td className="p-5">{invoice.transportationCharges}</td>
          </tr>
          <tr className=" border text-right">
            <td colSpan={2} className=" border-none"></td>
            <td colSpan={2} className=" p-5 border-r">
              Total
            </td>
            <td className="p-5">{invoice.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
