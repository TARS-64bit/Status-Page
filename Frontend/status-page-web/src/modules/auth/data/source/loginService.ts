"use server"
import { ILoginRequest } from "@/modules/auth/data/models/ILoginRequest";
import { getLoginEndpoint, IAuthEndpoints } from "@/modules/auth/config/endpoints";
import { ILoginResponse } from "@/modules/auth/data/models/ILoginResponse";

export const LoginService = async ({ request }: Readonly<{ request: ILoginRequest }>) => {
    const apiEndpint = getLoginEndpoint(IAuthEndpoints.Login);
    const requestInit: RequestInit = { method: "POST", cache: "no-store", body: JSON.stringify(request), headers: {} }
    try {
        const res = await fetch(apiEndpint.url, requestInit);
        console.log("apiEndpint", apiEndpint);
        console.log("requestInit", requestInit);
        const data: ILoginResponse = await res.json();
        console.log("data", data);
        return { ok: res.ok, data: data };

    } catch (error) {
        console.log("error", error);
        return { ok: false, data: null };
    }
}