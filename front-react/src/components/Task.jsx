import React from "react"
import Checkbox from "./Checkbox";
import usePhaseMutation from "../hooks/usePhasesMutation"

function Task({task}) {

  const [mutate, {loading, error}] = usePhaseMutation()

  if(error){
    alert(error)
  }

  const onChange = (event) => {
    mutate({
      variables: {
        id: task.id,
        isComplete: event.target.checked
      }
    })
  }

  return (<div className="Task">
    <Checkbox defaultChecked={task.isComplete} onChange={onChange} disabled={loading}/> {task.title}
  </div>)
}

export default Task
