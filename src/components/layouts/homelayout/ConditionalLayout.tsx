"use client";

import { usePathname } from "next/navigation";
import HomeLayout from "@/components/layouts/homelayout/HomeLayout";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome2 = pathname === "/home2";

  return isHome2 ? <>{children}</> : <HomeLayout>{children}</HomeLayout>;
}
