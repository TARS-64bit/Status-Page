"use server"

import { IServiceState } from "@/hooks/use-ServiceState";
import { ServicesRepository } from "@/modules/auth/data/repository/servicesRepository";

export const CreateServiceUseCase = async ({ serviceState }: Readonly<{ serviceState: IServiceState | undefined }>) => {
    if (!serviceState) return;

    const data = ServicesRepository.createService({ request: serviceState });

    return data;
}