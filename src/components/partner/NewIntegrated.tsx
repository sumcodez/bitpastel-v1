import React from 'react';
import NewMember from './NewMember';
import NewRefer from './NewRefer';

function NewIntegrated() {
  return (
    <div className='relative parent-container'>
    <div className="container px-4 lg:gap-8 mx-auto flex flex-col lg:flex-row">
      {/* First Column - NewMember */}
      <div className="lg:flex-1">
        <NewRefer />
      </div>
      
      {/* Second Column - NewRefer */}
      <div className="lg:flex-1">
        <NewMember />
      </div>
    </div>
        </div>
  );
}

export default NewIntegrated;