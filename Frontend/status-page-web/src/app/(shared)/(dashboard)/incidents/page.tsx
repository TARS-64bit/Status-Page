import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1 align-middle items-center flex-col gap-4 p-4">


      <Tabs defaultValue="open" className="w-[600px] m-10">
        <div className="pb-2 border-solid border-b-2 flex justify-between">
          <TabsList>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="incidents">Incidents</TabsTrigger>
            <TabsTrigger value="maintenances">Maintenances</TabsTrigger>
          </TabsList>
          <Link href={"/incidents/new"} className={buttonVariants({ variant: "default" })}>Create incident</Link>
        </div>
        <TabsContent value="open">
          Make changes to your account here.

        </TabsContent>
        <TabsContent value="incidents">
          Change your password here.
        </TabsContent>
        <TabsContent value="maintenances">Change your password here.</TabsContent>
      </Tabs>





    </div>
  )
}
