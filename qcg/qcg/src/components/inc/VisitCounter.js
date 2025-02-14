import React, { useEffect, useState } from 'react';

function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {

    let isMounted = true;

    if (isMounted) {

      const currentCount = localStorage.getItem('visitCount');
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;

      localStorage.setItem('visitCount', newCount);


      setVisitCount(newCount);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="visit-counter">
      <p>You visited us {visitCount} times. Keep it coming!</p>
    </div>
  );
}

export default VisitCounter;