const {gql} = require("apollo-server");
const typeDefs = gql`

    type Task {
        id: Int
        title: String
        isComplete: Boolean
        order: Int
    }

    type Phase {
        id: Int
        title: String
        isComplete: Boolean
        isCanComplete: Boolean
        order: Int
        tasks: [Task]
    }

    type Phases {
        items: [Phase],
        isComplete: Boolean
    }

    type Query {
        phases: Phases
    }

    type CompleteTask {
        isComplete: Boolean
        phase: Phase
    }

    type Mutation {
        completeTask(id: Int, isComplete: Boolean): CompleteTask,
    }

    type AdminQuery {
        phases: Phases
    }

    input PhaseInput {
        title: String
    }

    type AdminMutation {
        addPhase(phase: PhaseInput!): Phase,
    }
`;
module.exports = {typeDefs}
