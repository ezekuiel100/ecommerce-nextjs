import { twMerge } from "tailwind-merge";

type skeletonProps = {
  className: string;
};

export function Skeleton({ className }: skeletonProps) {
  return (
    <div className={twMerge("bg-zinc-50/10 animate-pulse", className)}></div>
  );
}
