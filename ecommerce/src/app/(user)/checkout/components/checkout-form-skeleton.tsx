import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function CheckoutFormSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">
          <Skeleton className="h-8 w-1/3" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
          <div>
            <Skeleton className="h-6 w-1/4 mb-4" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-20" />
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-1/4 mb-4" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-20" />
            </div>
          </div>
          <Skeleton className="h-10" />
        </div>
      </CardContent>
    </Card>
  )
}



