"use server";
import { cookies } from "next/headers"; // Import Next.js cookies utility
import { redirect } from "next/navigation";

export const PostApiService = async ({ request, apiEndpoint }: Readonly<{
    request: { [x: string]: any }, apiEndpoint: { url: string; }
}>) => {

    // Retrieve token from cookies
    const cookiesC = await cookies();
    const token = cookiesC.get("authToken")?.value;

    const requestInit: RequestInit = {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify(request),
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}), // Attach token if available
        },
    };

    try {
        const res = await fetch(apiEndpoint.url, requestInit);
        console.log("apiEndpoint", apiEndpoint);
        console.log("requestInit", requestInit);

        const data = await res.json();
        console.log("data", data);

        // Save token in cookies and remove it from the response data
        if (res.ok && data?.token) {
            cookiesC.set("authToken", data.token, { httpOnly: true, secure: true });
            delete data.token; // Remove token from response before returning
        }

        return { ok: res.ok, data: data };

    } catch (error) {
        console.log("error", error);
        return { ok: false, data: null };
    }
};