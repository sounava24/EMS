import { createContext, useContext, useState, useEffect } from "react";
import { produce } from "immer";

const LeaveContext = createContext();

export function LeaveProvider({ children }) {
  const [leaves, setLeaves] = useState(() => {
    const saved = localStorage.getItem("leaves");
    return saved ? JSON.parse(saved) : [];
  });

  const applyForLeave = (leaveRequest) => {
    const newLeaves = [...leaves, leaveRequest];
    setLeaves(newLeaves);
    localStorage.setItem("leaves", JSON.stringify(newLeaves));
  };

  const updateLeaveStatus = (leaveId, status) => {
    console.log('Updating leave status:', { leaveId, status, currentLeaves: leaves });
    
    setLeaves(currentLeaves => {
      const updatedLeaves = produce(currentLeaves, draftLeaves => {
        const leaveIndex = draftLeaves.findIndex(leave => leave.id === leaveId);
        if (leaveIndex !== -1) {
          draftLeaves[leaveIndex] = { ...draftLeaves[leaveIndex], status };
        }
      });
      
      // Save to localStorage after state update is complete
      localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
      console.log('Leaves state updated:', updatedLeaves);
      return updatedLeaves;
    });
  };
  
  // Debug effect to log changes to leaves
  useEffect(() => {
    console.log('Leaves state updated:', leaves);
  }, [leaves]);

  return (
    <LeaveContext.Provider value={{ leaves, applyForLeave, updateLeaveStatus }}>
      {children}
    </LeaveContext.Provider>
  );
}

export const useLeaves = () => useContext(LeaveContext);
