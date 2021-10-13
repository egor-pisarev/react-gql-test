import React, {useEffect, useState} from "react"
import Phase from "./Phase";
import usePhasesQuery from "../hooks/usePhasesQuery";

function Phases() {
  const {loading, error, data} = usePhasesQuery();
  const [randomText, setRandomText] = useState();

  async function fetchRandomText() {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json');
    const responseJson = await response.json();
    setRandomText(responseJson.text);
  }

  //TODO Extract to custom hook
  useEffect(() => {
    if (data && data.phases.isComplete) {
      fetchRandomText();
    }
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<div className="Phases">
    {!randomText ?
      (<div>
        <div className="Phases__Title">My startup progress</div>
        {data.phases.items.map((phase) => <Phase phase={phase} key={phase.id}/>)}</div>)
      :
      randomText}
  </div>)
}

export default Phases
