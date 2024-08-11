import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface CustomerDetailsProps 
{
    customer: { id: number, name: string, details: string };
}

interface Image 
{
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
};

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetchPhotos(customer.id);

    // Set up an interval to fetch new photos every 10 seconds
    const interval = setInterval(() => {
      fetchPhotos(customer.id);
    }, 10000);

    return () => clearInterval(interval);
  }, [customer.id]);

  const fetchPhotos = async (id: number) => {
    try {
      let num = Math.floor((Math.random() * 100) + 1);
      const response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=9`);
      const data: Image[] = response.data;
      const imageURLList = data.map((item) => item.download_url);
      setPhotos(imageURLList);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.details}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Customer ${customer.name} photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
