import React from 'react';
import CustomerCard from './CustomerCard';

interface CustomerListProps 
{
    customers: Array<{id:number, name: string, details: string }>;
    selectedCustomer: string;
    onCustomerSelect: (name: string) => void;
}



const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomer, onCustomerSelect }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <CustomerCard 
          id={customer.id} 
          name={customer.name} 
          details={customer.details} 
          onClick={() => onCustomerSelect(customer.name)} 
          isSelected={customer.name === selectedCustomer}
        />
      ))}
    </div>
  );
};

export default CustomerList;
