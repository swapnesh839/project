"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Container from "@/components/ui/Container";
import User from "./userType";
import { AArrowDown, AArrowUp, Home } from "lucide-react";

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "website",
    header: "Website",
  },
];

export default function UserTable() {
  const { page: pageFromParams } = useParams();

  const page = Number(pageFromParams || 1);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const fetchUsers = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
    );
    return response.json();
  };

  const router = useRouter();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const table = useReactTable({
    data: users || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-slate-600/10 flex justify-center items-center">
        <div className="h-60 w-60">
          <div className="h-full animate-spin rounded-full border-[6px] border-t-indigo-500 p-5">
            <div className="bg-black/10 w-full h-full rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container ContainerClassName="bg-slate-600/10 min-h-screen">
      {isError ? (
        <div className="h-screen w-full flex justify-center items-center">
          <h6>Something went wrong please try again</h6>
        </div>
      ) : (
        <>
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="max-w-sm mb-4"
          />
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="!font-bold text-black !text-[30px]"
                    >
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <Button
                          variant="ghost"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {header.column.columnDef.header as string}
                          {{
                            asc: <AArrowDown size={22} />,
                            desc: <AArrowUp size={22} />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </Button>
                      ) : (
                        (header.column.columnDef.header as string)
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.getValue() as string}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/table/${page - 1}`)}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/table/${page + 1}`)}
              disabled={!users || users.length === 0}
            >
              Next
            </Button>
          </div>
        </>
      )}
      <Button
        onClick={() => {
          router.push("/");
        }}
        className="fixed bottom-2 right-2 bg-indigo-600 hover:bg-indigo-600/70 rounded-full"
      >
        <Home />
      </Button>
    </Container>
  );
}
