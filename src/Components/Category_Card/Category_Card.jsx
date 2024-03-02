import React, { useContext } from 'react';
import { IoLogoAndroid as IoLogoAndroid5, IoLogoApple, IoLogoWindows, IoLogoReact, IoLogoVue, IoLogoAngular, IoLogoNodejs, IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLaptop, IoCamera } from 'react-icons/io5';
import { IoLogoAndroid as IoLogoAndroidOld } from 'react-icons/io';
import MyContext from '../../ContextApi/myContext';

const Category_Card = () => {
  const { data } = useContext(MyContext);
console.log(data)
  const categories = new Set();
  data.forEach(obj => {
    if (obj.hasOwnProperty("category")) {
      categories.add(obj.category.toLowerCase()); // Store categories in lowercase for case-insensitive comparison
    }
  });

  const categoryItems = Array.from(categories);

  const categoryIconMapping = {
    'android': <IoLogoAndroid5 size={50} />,
    'ios': <IoLogoApple size={50} />,
    'windows': <IoLogoWindows size={50} />,
    'react': <IoLogoReact size={50} />,
    'vue.js': <IoLogoVue size={50} />,
    'angular': <IoLogoAngular size={50} />,
    'node.js': <IoLogoNodejs size={50} />,
    'python': <IoLogoPython size={50} />,
    'javascript': <IoLogoReact size={50} />, // Use React icon for JavaScript as an example
    'html5': <IoLogoHtml5 size={50} />,
    'css3': <IoLogoCss3 size={50} />,
    'laptop': <IoLaptop size={50} />,
    'camera': <IoCamera size={50} />,
  };

  return (
    <>
      {categoryItems.map((category, index) => (
       <a href={`/products/${category}`}>
         <div className="bg-primary text-light font-weight-bold w-100 p-4 d-flex flex-column justify-content-center align-items-center" key={index}>
          <div className="icon text-info">
            {categoryIconMapping[category] }
          </div>
          <h6 className='font-weight-bold'>{category.charAt(0).toUpperCase() + category.slice(1)}</h6>
        </div>
       </a>
      ))}
    </>
  );
};

export default Category_Card;
