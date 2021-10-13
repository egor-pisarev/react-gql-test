import React from "react"
import Tasks from "./Tasks";
import { FaCheck } from 'react-icons/fa';

function Phase({phase}) {
  return (<div className={`Phase ${!phase.isCanComplete? 'disabled':''}`}>
    <div className="Phase__Title">
      <div className="Phase__Title__Label">
        {phase.order}
      </div>
      {phase.title}
      {phase.isComplete?<FaCheck size={24} className="Phase__Title__Check"/>:``}
    </div>
    <Tasks tasks={phase.tasks}/>
  </div>)
}

export default Phase
