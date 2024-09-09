import React, { useEffect, useState } from 'react';
import PageA from './PageA/index';
import PageB from './PageB/index';
import PageC from './PageC/index';

const DisplayComponent = () => {
  const [pageToDisplay, setPageToDisplay] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (userInfo && userInfo.departmentId === 1) {
      setPageToDisplay(<PageA />);
    } else if (userInfo && userInfo.businessCore) {
      setPageToDisplay(<PageC />);
    } else {
      setPageToDisplay(<PageB />);
    }
  }, []);

  return (
    <div>
      {pageToDisplay}
    </div>
  );
};

export default DisplayComponent;