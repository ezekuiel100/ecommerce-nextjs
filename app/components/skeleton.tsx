import { twMerge } from "tailwind-merge";

export function Skeleton({ className }) {
  return (
    <div className={twMerge("bg-zinc-50/10 animate-pulse", className)}></div>
  );
}
