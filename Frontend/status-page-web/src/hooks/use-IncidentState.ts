
import { useState } from "react";
import { mergeDeepStates } from "@/utils/mergeDeepStates";

export interface IIncidentState {
    name: string;
    status: string;
    message: string;
    statusValue: number;
}

export const useIncidentState = () => {
    const [incidentState, setIncidentState] = useState<IIncidentState>();

    const updateIncidentState = (data: Partial<IIncidentState>) => {
        setIncidentState((prevData) => {
            if (!prevData) {
                // If prevData is undefined, initialize it with default values
                return { ...data } as IIncidentState;
            }

            // Merge the previous state with the new data
            const updatedData = mergeDeepStates(prevData, data);

            // Ensure the returned object matches the IIncidentState type
            return { ...prevData, ...updatedData };
        });
    };

    return { incidentState, updateIncidentState };
};