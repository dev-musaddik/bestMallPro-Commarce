import React from 'react';

const SpecificationTable = ({ specification }) => {
  const renderSpecificationTable = () => {
    return Object.keys(specification)?.map((section, index) => (
      <div key={index} className='d-flex flex-column w-100 '>
       <div className="d-flex">
       <h5 className='bg-light text-info font-weight-bold p-3  rounded d-flex flex-wrap'>{section}</h5>
       </div>
        <table className="table w-100" border={0} >
          <tbody  className=' w-100'>
            {Object.entries(specification[section]).map(([key, value], i) => (
              <tr key={i} className=' d-flex  flex-column flex-lg-row w-100 align-items-center border rounded'>
                <td className='w-100 p-3 border-0 '><strong>{key}:</strong></td>
                <td className='w-100 p-3 border-0 text-secondary'>{value || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div>
      {specification ? (
        renderSpecificationTable()
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SpecificationTable;
