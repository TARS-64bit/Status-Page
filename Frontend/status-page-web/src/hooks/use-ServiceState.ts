
import { useState } from "react";
import { mergeDeepStates } from "@/utils/mergeDeepStates";

export interface IServiceState {
    name: string;
    description: string;
}

export const useServiceState = () => {
    const [serviceState, setServiceState] = useState<IServiceState>();

    const updateServiceState = (data: Partial<IServiceState>) => {
        setServiceState((prevData) => {
            if (!prevData) {
                // If prevData is undefined, initialize it with default values
                return { ...data } as IServiceState;
            }

            // Merge the previous state with the new data
            const updatedData = mergeDeepStates(prevData, data);

            // Ensure the returned object matches the IServiceState type
            return { ...prevData, ...updatedData };
        });
    };

    return { serviceState, updateServiceState };
};