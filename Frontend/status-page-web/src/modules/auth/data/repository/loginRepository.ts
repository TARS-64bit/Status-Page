
import { ILoginRequest } from "@/modules/auth/data/models/ILoginRequest"
import { PostApiService } from "@/modules/auth/data/source/postApiService"
import { getApiEndpoint, IAuthEndpoints } from "@/modules/auth/config/endpoints";

export namespace LoginRepository {
    const apiEndpoint = getApiEndpoint(IAuthEndpoints.Login);
    export const login = async ({ request }: Readonly<{ request: ILoginRequest }>) => {
        return PostApiService({ request, apiEndpoint })
    }
}