// CircleLoader.js

import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import MyContext from '../../ContextApi/myContext';

const CircleLoader = () => {
    const { data, productQuantityManager,cardItems,setCardItems } = useContext(MyContext);

  const { r } = useSpring({
    from: { r: 0 },
    to: async next => {
      while (1) {
        await next({ r: 1 });
        await next({ r: 0 });
      }
    },
    config: { duration: 1000 },
    reset: true,
  });

  return (
    <div className="circle-loader-overlay">
      <animated.div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: r.interpolate(scale => `translate(-50%, -50%) scale(${1 + scale})`),
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#007BFF',
        }}
      />
    </div>
  );
};

export default CircleLoader;
