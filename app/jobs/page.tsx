


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
import { Search, Filter, Plus, Edit, Users, Calendar, MoreHorizontal, Eye } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
// code for add job modal 

const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: '',
    department: '',
    location: '',
    skills: '',
    matches: '',
    status: '',
    postdate: '',
    // actions: '',
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
      title: "Machine Learning Engineerr",
      department: "AI Research",
      location: "San Francisco, CA",
      skills:"Python",
      matches: 12,
      status: "Active",
      postedDate: "2023-03-15",
    },
    {
      id: "2",
      title: "Data Scientist",
      department: "Data Analytics",
      location: "Remote",
      skills:"Python",
      matches: 8,
      status: "Active",
      postedDate: "2023-03-20",
    },
    {
      id: "3",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "New York, NY",
      skills:"Python",
      matches: 15,
      status: "Active",
      postedDate: "2023-03-25",
    },
    {
      id: "4",
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Seattle, WA",
      skills:"Python",
      matches: 3,
      status: "Active",
      postedDate: "2023-03-18",
    },
    {
      id: "5",
      title: "AI Research Intern",
      department: "Research",
      location: "Boston, MA",
      skills:"Python",
      matches: 6,
      status: "Active",
      postedDate: "2023-04-01",
    },
    {
      id: "6",
      title: "Senior Data Engineer",
      department: "Data Platform",
      location: "Austin, TX",
      skills:"Python",
      matches: 9,
      status: "Active",
      postedDate: "2023-03-28",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Job Listings</CardTitle>
        <CardDescription>Manage open positions and view candidate matches</CardDescription>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            {/* <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Job
            </Button> */}
            <Button size="sm" onClick={() => setIsOpen(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add Job
      </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead>Matches</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Posted Date</TableHead>
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.department}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.skills}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{job.matches}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50">
                    {job.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{job.postedDate}</span>
                  </div>
                </TableCell>
                {/* <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href={`/jobs/${job.id}`} className="flex w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Job
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        View Candidates
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Button variant="ghost" className="p-0 h-auto w-full justify-start font-normal text-red-600">
                          Delete Job
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>



    <div>
      {/* Trigger Button */}
    

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>

            <form onSubmit={handleSubmit}>
              {[
                { label: 'Title', name: 'title', type: 'text' },
                { label: 'Department', name: 'department', type: 'text' },
                { label: 'Location', name: 'location', type: 'text' },
                { label: 'Skills', name: 'skills', type: 'text' },
                { label: 'Matches', name: 'matches', type: 'text' },
                { label: 'Status', name: 'location', type: 'text' },
                { label: 'Post Date', name: 'postdate', type: 'date' },
                // { label: 'Actions', name: 'actions', type: 'text' },
              ].map((field) => (
                <div className="mb-4" key={field.name}>
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

          

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

