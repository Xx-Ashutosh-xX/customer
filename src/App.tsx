import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';

const customersData = [
  { id:1, name: 'Customer 01', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id:2, name: 'Customer 02', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry' },
  { id:3, name: 'Customer 03', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:4, name: 'Customer 04', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:5, name: 'Customer 05', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:6, name: 'Customer 06', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:7, name: 'Customer 07', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:8, name: 'Customer 08', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:9, name: 'Customer 09', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:10, name: 'Customer 10', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id:11, name: 'Customer 11', details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];


const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<string>(customersData[0].name);

  const handleCustomerSelect = (name: string) => {
    setSelectedCustomer(name);
  };

  const selectedCustomerData = customersData.find(customer => customer.name === selectedCustomer)!;

  return (
    <div className="app-container">
      <header className="app-header" style={{ textAlign: "center" }}>
        <h1 >This here is the heading</h1>
      </header>
      <div className="app-content" style={{display:'flex', flexDirection: "row"}}>
        <div className="customer-list-container" >
          <CustomerList 
            customers={customersData} 
            selectedCustomer={selectedCustomer} 
            onCustomerSelect={handleCustomerSelect}
          />
        </div>
        <div className="customer-details-container" >
          <CustomerDetails customer={selectedCustomerData} />
        </div>
      </div>
    </div>
  );
};

export default App;
