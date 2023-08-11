import React from "react";
import InputText from "./InputText";

const ServiceForm = ({ invoice, setInvoice, invoiceItems }) => {
  const handleInvoiceSubmit = (e) => {
    e.preventDefault();
    setInvoice({
      ...invoice,
      installationFees: invoice.installationFees,
      transportationCharges: invoice.transportationCharges,
      total:
        totalAmount + invoice.installationFees + invoice.transportationCharges,
    });
  };
  const totalAmount = invoice.invoiceItems
    .map((invoiceItem) => invoiceItem.amount)
    .reduce((pv, cv) => pv + cv, 0);
  console.log(totalAmount);
  return (
    <div>
      <form onSubmit={handleInvoiceSubmit}>
        <fieldset className="border rounded p-4">
          <legend className="text-lg text-gray-500 font-bold mb-2">
            Other Charges
          </legend>
          <InputText
            placeholder={"Enter Installation Fees"}
            name={"installationFees"}
            value={invoice.installationFees}
            onChange={(e) =>
              setInvoice({
                ...invoice,
                installationFees: parseInt(e.target.value),
              })
            }
          />
          <InputText
            placeholder={"Enter Transportation Charges"}
            name={"transportationCharges"}
            value={invoice.transportationCharges}
            onChange={(e) =>
              setInvoice({
                ...invoice,
                transportationCharges: parseInt(e.target.value),
              })
            }
          />
          <button className="border rounded-md px-5 py-2 w-3/4 mx-auto block">
            ADD
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ServiceForm;
