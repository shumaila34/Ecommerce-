import { Skeleton } from "@/components/ui/skeleton"

export function OrderSummarySkeleton() {
  return (
    <div className="rounded-lg border bg-white">
      <div className="border-b p-4">
        <Skeleton className="h-6 w-1/3" />
      </div>
      <div className="p-4 space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Skeleton className="h-16 w-16 rounded-md" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-6 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
            <Skeleton className="h-8 w-8" />
          </div>
        ))}
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-6">
          <Skeleton className="h-10 w-full sm:w-2/3" />
          <Skeleton className="h-10 w-full sm:w-1/3" />
        </div>
        <div className="space-y-4 mt-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-between">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

