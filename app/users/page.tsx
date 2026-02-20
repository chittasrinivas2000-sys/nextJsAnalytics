import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>srinivas</TableCell>
            <TableCell>srinivas@gmail.com</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>prasad</TableCell>
            <TableCell>prasad@gmail.com</TableCell>
            <TableCell>Inactive</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}