export enum IAuthEndpoints {
    Login,

}

export const getLoginEndpoint = (api: IAuthEndpoints) => {
    const BASE_URL = process.env.API_BASE_URL;

    const urls = {
        [IAuthEndpoints.Login]: { url: `${BASE_URL}auth/register` }
    }

    return urls[api];
}