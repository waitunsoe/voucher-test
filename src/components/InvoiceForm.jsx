import React, { useEffect } from "react";
import InputText from "./InputText";

const InvoiceForm = ({
  invoice,
  setInvoice,
  invoiceItem,
  setInvoiceItem,
  invoiceItems,
  setInvoiceItems,
}) => {
  const handleInvoiceFormSubmit = (e) => {
    e.preventDefault();

    const updateInvoiceItem = {
      id: invoiceItems.length + 1,
      itemName: invoiceItem.itemName,
      quantity: invoiceItem.quantity,
      price: invoiceItem.price,
      amount: invoiceItem.quantity * invoiceItem.price,
    };

    setInvoiceItems((prevInvoiceItems) => [
      ...prevInvoiceItems,
      updateInvoiceItem,
    ]);

    setInvoice({
      ...invoice,
      invoiceItems: [...invoiceItems, updateInvoiceItem],
    });

    setInvoiceItem({
      id: invoiceItems.length + 1,
      itemName: "",
      quantity: "",
      price: "",
      amount: "",
    });
  };


  return (
    <div className="">
      <form onSubmit={handleInvoiceFormSubmit}>
        <fieldset className="border rounded p-4">
          <legend className="text-lg text-gray-500 font-bold mb-2">
            Invoice Information
          </legend>
          <InputText
            placeholder={"Enter Item Name"}
            name={"itemName"}
            value={invoiceItem.itemName}
            onChange={(e) =>
              setInvoiceItem({ ...invoiceItem, itemName: e.target.value })
            }
          />
          <InputText
            placeholder={"Enter Item Quantity"}
            name={"quantity"}
            value={invoiceItem.quantity}
            onChange={(e) =>
              setInvoiceItem({
                ...invoiceItem,
                quantity: parseInt(e.target.value),
              })
            }
          />
          <InputText
            placeholder={"Enter Item Price"}
            name={"price"}
            value={invoiceItem.price}
            onChange={(e) =>
              setInvoiceItem({ ...invoiceItem, price: parseInt(e.target.value) })
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

export default InvoiceForm;
