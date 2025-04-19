

// export default function ResumePage() {
//   return (
//     <div>
//       <h1 className="mb-6 text-2xl font-bold text-gray-800">Resume</h1>
//       <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
//       <div className="">
//         <h5 className="mb-3">Upload File to Parse</h5>
//       <input type="file"
//         className="mb-4 w-full text-slate-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />
// <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Parse File</button>
//     </div>
//       </div>

//     </div>
//   )
// }


"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, Upload, AlertCircle, CheckCircle, Loader2 } from "lucide-react"

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setUploadStatus("idle")
    }
  }

  // const handleUpload = async () => {
  //   if (!file) return

  //   setIsUploading(true)
  //   setUploadStatus("idle")

  //   try {
  //     const formData = new FormData()
  //     formData.append("file", file)

  //     const response = await fetch("/api/analyze-resume", {
  //       method: "POST",
  //       body: formData,
  //     })

  //     const data = await response.json()

  //     if (!response.ok) {
  //       throw new Error(data.error || "Failed to analyze resume")
  //     }

  //     setUploadStatus("success")
  //   } catch (error) {
  //     console.error("Upload error:", error)
  //     setUploadStatus("error")
  //     setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred")
  //   } finally {
  //     setIsUploading(false)
  //   }
  // }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Upload Resume</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Resume Upload</CardTitle>
            <CardDescription>Upload a resume to analyze with our AI system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">{file ? file.name : "Drag and drop your resume"}</h3>
                <p className="text-sm text-muted-foreground mb-4">Supports PDF, DOCX, and TXT files up to 10MB</p>
                <div className="flex justify-center">
                  <Label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                      <Upload className="mr-2 h-4 w-4" />
                      <span>Select File</span>
                    </div>
                    <Input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.docx,.txt"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </Label>
                </div>
              </div>

              {uploadStatus === "success" && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Success!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Resume successfully analyzed. View the results in the dashboard.
                  </AlertDescription>
                </Alert>
              )}

              {uploadStatus === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
          <CardFooter>
            {/* <Button onClick={handleUpload} disabled={!file || isUploading} className="w-full">
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Resume...
                </>
              ) : (
                "Analyze Resume"
              )}
            </Button> */}
            <Button className="w-full">
            Analyze Resume
           </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Our AI-powered resume analysis process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Upload Resume</h3>
                  <p className="text-sm text-muted-foreground">Upload your resume in PDF, DOCX, or TXT format.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our LLM-powered system extracts skills, experience, and qualifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Job Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Semantic search matches your profile with relevant job openings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-medium text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">View Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized job recommendations and insights about your resume.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
