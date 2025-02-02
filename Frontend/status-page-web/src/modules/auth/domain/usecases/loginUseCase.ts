"use server"
import { LoginRequestMapper } from "@/modules/auth/data/mappers/loginRequestMapper";
import { ILoginState } from "@/hooks/use-loginState";
import { LoginRepository } from "@/modules/auth/data/repository/loginRepository";

export const LoginUseCase = async ({ loginState }: Readonly<{ loginState: ILoginState | undefined }>) => {
    if (!loginState) return;

    const request = LoginRequestMapper({ loginState });

    const data = LoginRepository.login({ request });

    return data;
}