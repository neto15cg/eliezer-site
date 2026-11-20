import type { ReactNode } from "react";
import { ResumeLayout, resumeMetadata } from "@/components/curriculo/layout";

export const metadata = resumeMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <ResumeLayout locale="en">{children}</ResumeLayout>;
}
