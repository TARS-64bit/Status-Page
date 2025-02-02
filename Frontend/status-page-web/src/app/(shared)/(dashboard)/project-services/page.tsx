import { buttonVariants } from "@/components/ui/button";
import NoServiceFound from "@/components/ui/noservicefound";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1 align-middle items-center flex-col gap-4 p-4">
      <div className=" flex flex-col gap-2 w-1/2 m-8">
        <div className=" text-2xl">
          Services
        </div>
        <Tabs defaultValue="all" className="w-[600px] mt-10">
          <div className="pb-2 border-solid border-b-2 flex justify-between">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
            <Link href={"/project-services/new"} className={buttonVariants({ variant: "default" })}>Create service</Link>
          </div>
          <TabsContent value="all">
            <NoServiceFound></NoServiceFound>

          </TabsContent>
          <TabsContent value="maintenances">Change your password here.</TabsContent>
        </Tabs>



      </div>


    </div>
  )
}
