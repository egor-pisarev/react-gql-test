import React from "react"

function Checkbox({defaultChecked, onChange}) {
  return <input type="checkbox" defaultChecked={defaultChecked} onChange={onChange}/>
}

export default Checkbox
