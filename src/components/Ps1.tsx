import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-lightBlue dark:text-dark-lightBlue02">
        {config.ps1_username}
        {/* Smit */}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-white dark:text-dark-white">
        {config.ps1_hostname}
        {/* Butle */}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:~$</span>
    </div>
  );
};

export default Ps1;
