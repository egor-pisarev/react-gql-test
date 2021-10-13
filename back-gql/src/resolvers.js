const data = require("./data");

const completePhases = () => {
  if(data.phases.findIndex(phase => !phase.isComplete) === -1){
    data.isComplete = true
  } else {
    data.isComplete = false
  }
}

const completePhase = (phase, index) => {
  if(phase.tasks.findIndex(task => !task.isComplete) === -1){
    phase.isComplete = true
    if(data.phases[index+1]){
      data.phases[index+1].isCanComplete = true
    }
  } else {
    phase.isComplete = false
    if(data.phases[index+1]){
      data.phases[index+1].isCanComplete = false
    }
  }
  completePhases()
}

const completeTask = (id, isComplete) => {
  for (let i = 0; i < data.phases.length; i++) {

    const j = data.phases[i].tasks.findIndex(task => task.id === id);

    if (j>=0) {

      if(data.phases[i-1] && !data.phases[i-1].isComplete){
        throw new Error('Previous phase is not complete')
      }

      data.phases[i].tasks[j].isComplete = isComplete
      completePhase(data.phases[i], i);
      return {
        isComplete: data.isComplete,
        phase: data.phases[i]
      };
    }
  }
  throw new Error('Task not found')
}

const resolvers = {
  Query: {
    phases: () => ({
      isComplete: data.isComplete,
      items: data.phases
    }),
  },
  Mutation: {
    completeTask: (_,{id, isComplete}) => {
      return completeTask(id, isComplete)
    }
  },
};

module.exports = {resolvers}
