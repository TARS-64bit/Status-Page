
import { ILoginState } from "@/utils/useLoginState"



export const LoginRequestMapper = ({ loginState }: Readonly<{ loginState: ILoginState }>) => {
    return {
        email: loginState?.email,
        password: loginState?.password
    }
}