import React, { useState } from 'react';

const HoverNestedDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      label: 'Option 1',
      subOptions: [
        {
          label: 'SubOption 1.1',
          subSubOptions: ['SubSubOption 1.1.1', 'SubSubOption 1.1.2', 'SubSubOption 1.1.3'],
        },
        'SubOption 1.2',
        'SubOption 1.3',
      ],
    },
    {
      label: 'Option 2',
      subOptions: [
        {
          label: 'SubOption 2.1',
          subSubOptions: ['SubSubOption 2.1.1', 'SubSubOption 2.1.2', 'SubSubOption 2.1.3'],
        },
        'SubOption 2.2',
        'SubOption 2.3',
      ],
    },
    {
      label: 'Option 3',
      subOptions: [
        {
          label: 'SubOption 3.1',
          subSubOptions: ['SubSubOption 3.1.1', 'SubSubOption 3.1.2', 'SubSubOption 3.1.3'],
        },
        'SubOption 3.2',
        'SubOption 3.3',
      ],
    },
  ];

  const handleOptionChange = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  const handleSubOptionChange = (subOption) => {
    setSelectedOptions((prevOptions) => [...prevOptions, subOption]);
  };

  const handleSubSubOptionChange = (subSubOption) => {
    // Handle sub-sub-option selection if needed
    console.log('Selected sub-sub-option:', subSubOption);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {options.map((option, index) => (
          <div key={index} className="col-md-4 hover-dropdown">
            <div className="option" onMouseEnter={() => handleOptionChange(option.label)}>
              {option.label}
            </div>

            {selectedOptions.includes(option.label) && (
              <div className="sub-options">
                {option.subOptions.map((subOption, subIndex) => (
                  <div
                    key={subIndex}
                    className="option"
                    onMouseEnter={() => handleSubOptionChange(subOption.label || subOption)}
                  >
                    {subOption.label || subOption}
                  </div>
                ))}
              </div>
            )}

            {selectedOptions.includes(option.label) &&
              typeof option.subOptions[0] === 'object' &&
              option.subOptions[0].label &&
              selectedOptions.includes(option.subOptions[0].label) && (
                <div className="sub-sub-options">
                  {option.subOptions[0].subSubOptions.map((subSubOption, subSubIndex) => (
                    <div
                      key={subSubIndex}
                      className="option"
                      onMouseEnter={() => handleSubSubOptionChange(subSubOption)}
                    >
                      {subSubOption}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverNestedDropdown;
