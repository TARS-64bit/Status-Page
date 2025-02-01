"use server"
import { ILoginRequest } from "@/modules/auth/data/models/ILoginRequest";
import { getLoginEndpoint, IAuthEndpoints } from "@/modules/auth/config/endpoints";
import { ILoginResponse } from "@/modules/auth/data/models/ILoginResponse";

export const LoginService = async ({ request }: Readonly<{ request: ILoginRequest }>) => {
    const apiEndpint = getLoginEndpoint(IAuthEndpoints.Login);
    const requestInit: RequestInit = { method: "POST", cache: "no-store", body: JSON.stringify(request), headers: {} }
    try {

        console.log("apiEndpint.url", apiEndpint.url);
        console.log("requestInit", requestInit);
        const res = await fetch(apiEndpint.url, requestInit);
        const data: ILoginResponse = await res.json();

        return { ok: res.ok, data: data };

    } catch (error) {
        return { ok: false, data: null };
    }
}