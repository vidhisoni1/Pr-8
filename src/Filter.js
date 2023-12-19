import React, { useState } from 'react';

const Filter = () => {
  const initialData = [
    { id: 1, name: 'sakshi', age: 25 },
    { id: 2, name: 'jay', age: 30 },
    { id: 3, name: 'vidhi', age: 22 },
    { id: 4, name: 'vishwa', age: 18 },
    { id: 5, name: 'vruti', age: 30 },
    { id: 6, name: 'shrut', age: 18 },
    { id: 7, name: 'sankesh', age: 25 },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedField, setSortedField] = useState(null);


  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const sortedData = sortedField
    ? [...filteredData].sort((a, b) => a[sortedField] - b[sortedField])
    : filteredData;

 
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSort = field => {
    setSortedField(field);
  };

  return (
    <center>
    <div>
     <h1>search form </h1> 
     <br />
      <input type="text" placeholder="Search..." onChange={handleSearch} /> 

    <br />
    <br />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
          </tr>
        </thead>
        <tbody>
         
          {sortedData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default Filter;
