
import { ILoginState } from "@/hooks/use-loginState"



export const LoginRequestMapper = ({ loginState }: Readonly<{ loginState: ILoginState }>) => {
    return {
        email: loginState?.email,
        password: loginState?.password
    }
}