import {gql, useQuery} from "@apollo/client";

const PHASES = gql`
    query GetPhases {
        phases {
            isComplete
            items {
                id
                title
                order
                isComplete
                isCanComplete
                tasks {
                    id
                    title
                    order
                    isComplete
                }
            }
        }
    }
`;

function usePhasesQuery() {
  return useQuery(PHASES);
}

export default usePhasesQuery
