import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function RecentOrdersSkeleton() {
  return (
    <div className="rounded-lg border bg-white">
      <div className="border-b p-4">
        <Skeleton className="h-7 w-40" />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Skeleton className="h-4 w-8" />
              </TableHead>
              <TableHead className="hidden md:table-cell">
                <Skeleton className="h-4 w-20" />
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                <Skeleton className="h-4 w-16" />
              </TableHead>
              <TableHead>
                <Skeleton className="h-4 w-16" />
              </TableHead>
              <TableHead className="text-right">
                <Skeleton className="h-4 w-16 ml-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-4 w-10" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-20 rounded-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-16 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 border-t px-4 py-2 sm:flex-row">
        <Skeleton className="h-9 w-24" />
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((index) => (
            <Skeleton key={index} className="h-9 w-9" />
          ))}
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  )
}