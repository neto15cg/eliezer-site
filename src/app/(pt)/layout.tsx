import type { ReactNode } from "react";
import { ResumeLayout, resumeMetadata } from "@/components/curriculo/layout";

export const metadata = resumeMetadata("pt-BR");

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <ResumeLayout locale="pt-BR">{children}</ResumeLayout>;
}
