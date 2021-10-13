import {gql, useApolloClient, useMutation} from '@apollo/client';
import {useEffect} from "react";

const COMPLETE_TASK = gql`
    mutation CompleteTask($id: Int!, $isComplete: Boolean!) {
        completeTask(id: $id, isComplete: $isComplete) {
            isComplete
            phase {
                title
                id
                order
                isComplete
            }
        }
    }
`;

function usePhasesMutation() {

  const [mutate, {loading, data, error}] = useMutation(COMPLETE_TASK);
  const client = useApolloClient();

  useEffect(() => {
    if (data) {
      const {phase, isComplete} = data.completeTask;
      client.writeQuery({
        query: gql`
            query WritePhase($id: Int!) {
                phases {
                    isComplete
                }
                phase(id: $id) {
                    isComplete
                }
            }`,
        data: {
          phases: {
            isComplete
          },
          phase: {
            __typename: 'Phase',
            ...phase
          },
        },
        variables: {
          id: phase.id,
        }
      });

    }
  }, [data, client])

  return [mutate, {loading, data, error}]
}

export default usePhasesMutation;
