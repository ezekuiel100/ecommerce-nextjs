import { Skeleton } from "./components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid  grid-rows-6 grid-cols-9 gap-6 p-8">
      <Skeleton className="col-span-6 row-span-6 h-[730px]" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </div>
  );
}
