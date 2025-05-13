import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TFetchedEmail } from "@/types/projectType";
import { getAllEmails } from "@/utils/actions/email";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Messages",
  description:
    "Athkia Adiba Tonne – a passionate Full-Stack developer specializing in Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Crafting dynamic and scalable web applications with a focus on performance and user experience.",
};

const DashboardMessagesPage = async () => {
  const emailsData = await getAllEmails();
  const emails = emailsData?.data;

  return (
    <div>
      <h1 className="text-4xl font-bold pb-10 text-center">All Emails</h1>
      <div className="mr-2 lg:mr-5 overflow-x-auto">
        <Table className="border-2 mb-5 lg:mb-10">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl font-semibold text-black">
                Name
              </TableHead>
              <TableHead className="text-xl font-semibold text-black">
                Email
              </TableHead>
              <TableHead className="text-xl font-semibold text-black">
                Subject
              </TableHead>
              <TableHead className="text-xl font-semibold text-black">
                Message
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails?.map((email: TFetchedEmail) => (
              <TableRow key={email._id}>
                <TableCell className="text-2xl md:text-xs lg:text-base">
                  {email?.name}
                </TableCell>
                <TableCell className="text-2xl md:text-xs lg:text-base">
                  {email?.email}
                </TableCell>
                <TableCell className="text-2xl md:text-xs lg:text-base">
                  {email?.subject}
                </TableCell>
                <TableCell className="max-w-xl md:max-w-md text-2xl md:text-xs lg:text-base">
                  {email?.message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardMessagesPage;
