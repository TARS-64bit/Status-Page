import { useState } from "react";
import { mergeDeepStates } from "@/utils/mergeDeepStates";

export interface ILoginState {
    email: string;
    password: string;
}

export const useLoginState = () => {
    const [loginState, setLoginState] = useState<ILoginState>();

    const updateLoginState = (data: Partial<ILoginState>) => {
        setLoginState((prevData) => {
            if (!prevData) {
                // If prevData is undefined, initialize it with default values
                return { ...data } as ILoginState;
            }

            // Merge the previous state with the new data
            const updatedData = mergeDeepStates(prevData, data);

            // Ensure the returned object matches the ILoginState type
            return { ...prevData, ...updatedData };
        });
    };

    return { loginState, updateLoginState };
};