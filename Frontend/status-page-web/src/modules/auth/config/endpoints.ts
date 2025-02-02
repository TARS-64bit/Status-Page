export enum IAuthEndpoints {
    Login,

    CreateService,
    GetService,
    DeleteService,

}

export const getApiEndpoint = (api: IAuthEndpoints) => {
    const BASE_URL = process.env.API_BASE_URL;

    const urls = {
        [IAuthEndpoints.Login]: { url: `${BASE_URL}auth/login` },
        [IAuthEndpoints.CreateService]: { url: `${BASE_URL}services` },
        [IAuthEndpoints.GetService]: { url: `${BASE_URL}services` },
        [IAuthEndpoints.DeleteService]: {
            url: `${BASE_URL}services`
        }
    }

    return urls[api];
}