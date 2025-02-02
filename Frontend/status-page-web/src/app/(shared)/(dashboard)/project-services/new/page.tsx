'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useServiceState } from "@/hooks/use-ServiceState";
import { CreateServiceUseCase } from "@/modules/auth/domain/usecases/createServiceUseCase";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Page() {
  const { serviceState, updateServiceState } = useServiceState();

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await CreateServiceUseCase({ serviceState });

    if (res?.ok) {
      router.push("/project-services")
    } else if (res?.data?.error == "Invalid token") {
      router.push("/");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex  items-center flex-col">

      <div className=" flex flex-col gap-2 w-1/2 m-8">

        <div className=" text-2xl">
          Create Service
        </div>

        <div className="mt-4">

          <Label className="">
            Service name
          </Label>
          <Input onChange={(e) => {
            updateServiceState({ name: e.target.value })
          }} className="mt-1">
          </Input>
        </div>

        <div className="mt-4">

          <Label className="">
            Description
          </Label>
          <Textarea onChange={(e) => {
            updateServiceState({ description: e.target.value })
          }} className="mt-1">

          </Textarea>
          {/* <Label className="text-xs text-gray-400">This incident will be posted to status page</Label> */}
        </div>

        <Button className="w-min mt-4 self-end">Create</Button>

      </div>


    </form>
  )
}
