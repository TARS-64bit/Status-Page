'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useIncidentState } from "@/hooks/use-IncidentState";
import clsx from "clsx";

export default function Page() {
  const { incidentState, updateIncidentState } = useIncidentState();
  return (
    <div className="flex align-middle items-center flex-col">

      <div className=" flex flex-col gap-2 w-1/2 m-8">

        <div className=" text-2xl">
          Create Incident
        </div>

        <div className="mt-4">

          <Label className="">
            Incident name
          </Label>
          <Input onChange={(e) => {
            updateIncidentState({ name: e.target.value })
          }} className="mt-1">
          </Input>
          <Label className="text-xs text-gray-400">This incident will be posted to status page</Label>
        </div>

        <div className="mt-4">

          <Label className="">
            Incident status
          </Label>
          <div className="p-4 pt-6 border-solid border  rounded-xl border-stone-200 min-w-[400px]">
            <Progress className="" value={incidentState?.statusValue}>
            </Progress>
            <div className="flex justify-between ">
              <Button variant={'link'}
                onClick={(e) => {
                  updateIncidentState({ status: "investigating", statusValue: 0 })
                }}
                className={clsx("hover:no-underline hover:text-lime-600", {
                  "text-lime-600": incidentState?.status == "investigating"
                })}>Investigating</Button>
              <Button variant={'link'}
                onClick={(e) => {
                  updateIncidentState({ status: "identified", statusValue: 38 })
                }}
                className={clsx("hover:no-underline hover:text-lime-600", {
                  "text-lime-600": incidentState?.status == "identified"
                })}>Identified</Button>
              <Button variant={'link'}
                onClick={(e) => {
                  updateIncidentState({ status: "monitoring", statusValue: 66 })
                }}
                className={clsx("hover:no-underline hover:text-lime-600", {
                  "text-lime-600": incidentState?.status == "monitoring"
                })}>Monitoring</Button>

              <Button variant={'link'}
                onClick={(e) => {
                  updateIncidentState({ status: "resolved", statusValue: 100 })
                }}
                className={clsx("hover:no-underline hover:text-lime-600", {
                  "text-lime-600": incidentState?.status == "resolved"
                })}>Resolved</Button>
            </div>
          </div>
        </div>

        <div className="mt-4">

          <Label className="">
            Message
          </Label>
          <Textarea onChange={(e) => {
            updateIncidentState({ name: e.target.value })
          }} className="mt-1">

          </Textarea>
          {/* <Label className="text-xs text-gray-400">This incident will be posted to status page</Label> */}
        </div>

      </div>



    </div>
  )
}
