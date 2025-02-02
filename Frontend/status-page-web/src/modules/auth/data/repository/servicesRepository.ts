
import { PostApiService } from "@/modules/auth/data/source/postApiService"
import { getApiEndpoint, IAuthEndpoints } from "@/modules/auth/config/endpoints";
import { IServiceState } from "@/hooks/use-ServiceState";

export namespace ServicesRepository {
    const apiEndpoint = getApiEndpoint(IAuthEndpoints.CreateService);
    export const createService = async ({ request }: Readonly<{ request: IServiceState }>) => {
        return PostApiService({ request, apiEndpoint })
    }
}