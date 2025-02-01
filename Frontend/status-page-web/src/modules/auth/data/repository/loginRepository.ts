
import { ILoginRequest } from "@/modules/auth/data/models/ILoginRequest"
import { LoginService } from "@/modules/auth/data/source/loginService"

export namespace LoginRepository {
    export const login = async ({ request }: Readonly<{ request: ILoginRequest }>) => {
        return LoginService({ request })
    }
}