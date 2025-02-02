'use client'
import { BreadcrumbPage } from "@/components/ui/breadcrumb";
import { sideMenuData } from "@/utils/constants";
import { usePathname } from "next/navigation";

export const BreadcrumbPageWrapper = () => {
    const pathName = usePathname();
    const firstLevelRoute = pathName.split('/').filter(Boolean)[0] || ""; // Get the first segment

    let routeName = "";

    sideMenuData.navMain.some((obj) => {
        return obj.items.some((item) => {
            const itemFirstLevel = item.url.split('/').filter(Boolean)[0] || ""; // Extract first-level route

            if (firstLevelRoute === itemFirstLevel) {
                routeName = item.title;
                return true; // Stop when found
            }
        });
    });

    return <BreadcrumbPage>{routeName}</BreadcrumbPage>;
};
