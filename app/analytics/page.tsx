// import ResumeDashboardCharts from '@/components/ui-components/charts';
// export default function AnalyticsPage() {
//   return (
//     <div>
//       <h1 className="mb-6 text-2xl font-bold text-gray-800">Analytics</h1>
//       <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
     
//       </div>
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Filter, Plus, Edit, Users, Calendar, MoreHorizontal, Eye,Pencil,Eraser } from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
// code for add job modal 

const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    jobtitle: '',
    matchedresume: '',
    phone: '',
    skills: '',
    email: '',
    status: '',

  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    setIsOpen(false);
  };


  
  // This would be fetched from your API in a real implementation
  const [jobs, setJobs] = useState([
    {
      id: "1",
      name: "Hina Fatima",
      matched: "60%",
      status: "Shortlisted",
      notes: "Notes......",
      resume: "File",
      salary: "20K",
      location: "Islamabad",
      email: "Hinafatima123@gmail.com",
      phone: "+92 2345678934",
      interviewDate: "4/21/2025",
     
    },
    {
      id: "2",
      name: "Hina Fatima",
      matched: "60%",
      status: "Shortlisted",
      notes: "Notes......",
      resume: "File",
      salary: "20K",
      location: "Islamabad",
      email: "Hinafatima123@gmail.com",
      phone: "+92 2345678934",
      interviewDate: "4/21/2025",
     
    },
    {
      id: "3",
      name: "Hina Fatima",
      matched: "60%",
      status: "Shortlisted",
      notes: "Notes......",
      resume: "File",
      salary: "20K",
      location: "Islamabad",
      email: "Hinafatima123@gmail.com",
      phone: "+92 2345678934",
      interviewDate: "4/21/2025",
     
    },
    {
      id: "4",
      name: "Hina Fatima",
      matched: "80%",
      status: "Shortlisted",
      notes: "Notes......",
      resume: "File",
      salary: "20K",
      location: "Islamabad",
      email: "Hinafatima123@gmail.com",
      phone: "+92 2345678934",
      interviewDate: "4/21/2025",
     
    },
    {
      id: "5",
      name: "Hina Fatima",
      matched: "60%",
      status: "Shortlisted",
      notes: "Notes......",
      resume: "File",
      salary: "20K",
      location: "Islamabad",
      email: "Hinafatima123@gmail.com",
      phone: "+92 2345678934",
      interviewDate: "4/21/2025",
     
    },
  ])



  
  const data = {
    frontend: [
      {
        sr: "1.",
        name: "Areeba Khan",
        matched: "90%",
        status: "Shortlisted",
        notes: "Frontend expert",
        resume: "File",
        salary: "80K",
        location: "Lahore",
        email: "areeba@example.com",
        phone: "+92 3000000001",
        interviewDate: "4/23/2025",
      },
      {
        sr: "2.",
        name: "Areeba Khan",
        matched: "90%",
        status: "Shortlisted",
        notes: "Frontend expert",
        resume: "File",
        salary: "80K",
        location: "Lahore",
        email: "areeba@example.com",
        phone: "+92 3000000001",
        interviewDate: "4/23/2025",
      },
    ],
    backend: [
      {
        sr: "1.",
        name: "Usman Ali",
        matched: "85%",
        status: "Shortlisted",
        notes: "Node.js specialist",
        resume: "File",
        salary: "90K",
        location: "Karachi",
        email: "usman@example.com",
        phone: "+92 3000000002",
        interviewDate: "4/23/2025",
      },
    ],
    business: [
      {
        sr: "1.",
        name: "Sarah Malik",
        matched: "88%",
        status: "Shortlisted",
        notes: "BD strategist",
        resume: "File",
        salary: "70K",
        location: "Islamabad",
        email: "sarah@example.com",
        phone: "+92 3000000003",
        interviewDate: "4/23/2025",
      },
    ],
  };


  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobs.filter(
    (job) =>
      job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.matched.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.phone.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const [selectedTab, setSelectedTab] = useState("frontend");

  const tabs = {
    frontend: "Frontend Dev",
    backend: "Backend Dev",
    business: "Business Dev",
  };
  const candidates = data[selectedTab];


  return (
    <>
 <div className="p-4">
    

      {/* Table */}
      {/* <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-2">Sr.no</th>
              <th className="p-2">Name</th>
              <th className="p-2">Matched Resume</th>
              <th className="p-2">Status</th>
              <th className="p-2">Notes</th>
              <th className="p-2">Resume</th>
              <th className="p-2">Salary Expectations</th>
              <th className="p-2">Location</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Interview Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
        
          </tbody>
        </table>
      </div> */}
    </div>


    <Card>
      <CardHeader>
        <CardTitle>Job Analytics</CardTitle>
        <CardDescription>View candidate matches data</CardDescription>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search here..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
        </div>
      </CardHeader>
      <CardContent>

          {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {Object.entries(tabs).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedTab(key)}
            className={`px-4 py-2 text-sm font-medium rounded ${
              selectedTab === key
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
        <Table className="min-w-[1400px]">
          <TableHeader>
            <TableRow className="bg-[#00549A] text-white hover:bg-[#00549A]">
              

            <TableHead className="p-2 text-white">Sr.no</TableHead>
            <TableHead className="p-2 text-white">Name</TableHead>
            <TableHead className="p-2 text-white">Matched Resume</TableHead>
            <TableHead className="p-2 text-white">Status</TableHead>
            <TableHead className="p-2 text-white">Notes</TableHead>
            <TableHead className="p-2 text-white">Resume</TableHead>
            <TableHead className="p-2 text-white">Salary Expectations</TableHead>
            <TableHead className="p-2 text-white">Location</TableHead>
            <TableHead className="p-2 text-white">Email</TableHead>
            <TableHead className="p-2 text-white">Phone</TableHead>
            <TableHead className="p-2 text-white">Interview Date</TableHead>
            <TableHead className="p-2 text-white">Actions</TableHead>
            
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {filteredJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.id}</TableCell>
                <TableCell className="font-medium">{job.name}</TableCell>
                <TableCell>{job.matched}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell>{job.notes}</TableCell>
                <TableCell>{job.resume}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.email}</TableCell>
                <TableCell>{job.phone}</TableCell>
                <TableCell>{job.interviewDate}</TableCell>
            
               
                <TableCell className="p-2 space-x-2 ">
                  <div className="flex items-center gap-1">
   <a className="">
   <Pencil />
 
                </a>
                <a className="">
                <Eraser />
                </a>
                  </div>
             
              </TableCell>
          
              </TableRow>
            ))} */}

{candidates.map((candidate, index) => (
              <TableRow key={index} className="border-t border-gray-200">
                <TableCell className="p-2">{candidate.sr}</TableCell>
                <TableCell className="p-2">{candidate.name}</TableCell>
                <TableCell className="p-2">{candidate.matched}</TableCell>
                <TableCell className="p-2">
                  <span className="bg-green-400 text-white px-2 py-1 rounded text-xs">
                    {candidate.status}
                  </span>
                </TableCell>
                <TableCell className="p-2">{candidate.notes}</TableCell>
                <TableCell className="p-2">
                  <button className="bg-gray-200 px-3 py-1 text-xs rounded">
                    📄 {candidate.resume}
                  </button>
                </TableCell>
                <TableCell className="p-2">{candidate.salary}</TableCell>
                <TableCell className="p-2">{candidate.location}</TableCell>
                <TableCell className="p-2">{candidate.email}</TableCell>
                <TableCell className="p-2">{candidate.phone}</TableCell>
                <TableCell className="p-2">{candidate.interviewDate}</TableCell>
                <TableCell className="p-2 space-x-2 ">
                  <div className="flex items-center gap-1">
   <a className="">
   <Pencil />
 
                </a>
                <a className="">
                <Eraser />
                </a>
                  </div>
             
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>



    </>
  )
}

