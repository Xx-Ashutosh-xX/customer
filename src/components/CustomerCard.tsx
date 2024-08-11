import React from 'react';

interface CustomerCardProps 
{
    id:number;
    name: string;
    details: string;
    onClick: () => void;
    isSelected: boolean;
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
  };

const CustomerCard: React.FC<CustomerCardProps> = ({id, name, details, onClick, isSelected }) => {
  return (
    <div onClick={onClick} className={`card ${isSelected ? 'selected' : ''}`}>
      <h3>{name}</h3>
      <p>{truncateText(details, 120)}</p>
    </div>
  );
};

export default CustomerCard;
