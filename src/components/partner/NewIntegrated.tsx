import React from 'react';
import NewMember from './NewMember';
import NewRefer from './NewRefer';

function NewIntegrated() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* First Column - NewMember */}
      <div className="flex-1">
        <NewRefer />
      </div>
      
      {/* Second Column - NewRefer */}
      <div className="flex-1">
        <NewMember />
      </div>
    </div>
  );
}

export default NewIntegrated;