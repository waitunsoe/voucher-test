import React, { useState } from "react";
import CustomerInfo from "./components/CustomerInfo";
import InvoiceTable from "./components/InvoiceTable";
import InvoiceForm from "./components/InvoiceForm";
import CustomerInfoForm from "./components/CustomerInfoForm";
import ServiceForm from "./components/ServiceForm";

const App = () => {
  const [customerInfos, setCustomerInfos] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
  });

  const [invoice, setInvoice] = useState({
    invoiceItems: [],
    installationFees: "",
    transportationCharges: "",
    total: "",
  });
  
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceItem, setInvoiceItem] = useState({
    id: "",
    itemName: "",
    quantity: "",
    price: "",
    amount: "",
  });

  return (
    <div className=" mx-auto p-10">
      <div className="grid grid-cols-2 gap-10">
        <div className=" flex flex-col gap-5">
          <CustomerInfoForm
            customerInfo={customerInfo}
            setCustomerInfo={setCustomerInfo}
            customerInfos={customerInfos}
            setCustomerInfos={setCustomerInfos}
          />
          <InvoiceForm
            invoice={invoice}
            setInvoice={setInvoice}
            invoiceItem={invoiceItem}
            setInvoiceItem={setInvoiceItem}
            invoiceItems={invoiceItems}
            setInvoiceItems={setInvoiceItems}
          />
          <ServiceForm invoiceItems={invoiceItems} invoice={invoice} setInvoice={ setInvoice} />
        </div>
        <div className=" fixed right-10 border border-blue-300 rounded-md p-5">
          {customerInfos.map((customerInfo) => (
            <CustomerInfo key={customerInfo.id} customerInfo={customerInfo} />
          ))}
          <InvoiceTable invoiceItems={invoiceItems} invoice={invoice} />
        </div>
      </div>
    </div>
  );
};

export default App;
