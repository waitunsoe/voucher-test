import React, { useEffect } from "react";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

const CustomerInfoForm = ({
  customerInfo,
  setCustomerInfo,
  customerInfos,
  setCustomerInfos,
}) => {
  const handleCustomerInfoFormSubmit = (e) => {
    e.preventDefault();
    setCustomerInfos((prevCustomerInfos) => [
      ...prevCustomerInfos,
      customerInfo,
    ]);
    setCustomerInfo({ name: "", phone: "", address: "" });
  };

  return (
    <div>
      <form onSubmit={handleCustomerInfoFormSubmit}>
        <fieldset className="border rounded py-2 px-5">
          <legend className="text-lg text-gray-500 font-bold mb-2">
            Customer Information
          </legend>
          <div className="grid grid-cols-2 gap-5">
            <InputText
              placeholder={"Enter Customer Name"}
              name="name"
              value={customerInfo.name}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, name: e.target.value })
              }
            />

            <InputText
              placeholder={"Enter Customer Phone"}
              name="phone"
              value={customerInfo.phone}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, phone: e.target.value })
              }
            />
          </div>
          <InputTextArea
            placeholder={"Enter Customer Address"}
            value={customerInfo.address}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, address: e.target.value })
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

export default CustomerInfoForm;
