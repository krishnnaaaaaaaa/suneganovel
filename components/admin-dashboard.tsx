"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FlagIcon, UserXIcon, CheckCircleIcon, StarIcon } from "lucide-react"

export default function AdminDashboard() {
  // Dummy data for admin sections
  const flaggedStories = [
    { id: "s1", title: "The Darkest Secret", author: "Anon", reason: "Inappropriate content", status: "Pending" },
    { id: "s2", title: "Whispers in the Alley", author: "Jane Doe", reason: "Plagiarism", status: "Pending" },
  ]

  const usersToModerate = [
    { id: "u1", username: "troublemaker_1", email: "trouble@example.com", status: "Active" },
    { id: "u2", username: "spam_bot", email: "spam@example.com", status: "Active" },
  ]

  const editorPicksCandidates = [
    { id: "ep1", title: "The Emerald City", author: "L. Frank Baum", status: "Pending" },
    { id: "ep2", title: "Journey to the Center", author: "Jules Verne", status: "Pending" },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-8 max-w-6xl">
      <Card className="rounded-xl shadow-lg bg-card text-card-foreground p-6 md:p-8">
        <CardHeader className="mb-6">
          <CardTitle className="text-3xl font-serif font-bold text-misty-blue">Admin Panel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4 rounded-lg bg-muted/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <FlagIcon className="h-6 w-6 text-destructive" />
                <p className="text-2xl font-bold text-foreground">{flaggedStories.length}</p>
              </div>
              <p className="text-sm text-muted-foreground">Flagged Stories</p>
            </Card>
            <Card className="p-4 rounded-lg bg-muted/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <UserXIcon className="h-6 w-6 text-misty-blue" />
                <p className="text-2xl font-bold text-foreground">{usersToModerate.length}</p>
              </div>
              <p className="text-sm text-muted-foreground">Users to Moderate</p>
            </Card>
            <Card className="p-4 rounded-lg bg-muted/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <StarIcon className="h-6 w-6 text-blush-pink" />
                <p className="text-2xl font-bold text-foreground">{editorPicksCandidates.length}</p>
              </div>
              <p className="text-sm text-muted-foreground">Editor's Pick Candidates</p>
            </Card>
          </div>

          {/* Flagged Stories */}
          <section>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Flagged Stories</h3>
            <Table className="rounded-lg overflow-hidden border border-border">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {flaggedStories.map((story) => (
                  <TableRow key={story.id}>
                    <TableCell className="font-medium">{story.title}</TableCell>
                    <TableCell>{story.author}</TableCell>
                    <TableCell>{story.reason}</TableCell>
                    <TableCell>
                      <Badge variant="destructive" className="rounded-full">
                        {story.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2 rounded-lg bg-transparent">
                        Review
                      </Button>
                      <Button variant="destructive" size="sm" className="rounded-lg">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {flaggedStories.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      No flagged stories.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </section>

          {/* User Management */}
          <section>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">User Management</h3>
            <Table className="rounded-lg overflow-hidden border border-border">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersToModerate.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-full">
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2 rounded-lg bg-transparent">
                        View Profile
                      </Button>
                      <Button variant="destructive" size="sm" className="rounded-lg">
                        Ban
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {usersToModerate.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No users to moderate.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </section>

          {/* Editor's Picks Curation */}
          <section>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Editor's Picks Curation</h3>
            <Table className="rounded-lg overflow-hidden border border-border">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {editorPicksCandidates.map((pick) => (
                  <TableRow key={pick.id}>
                    <TableCell className="font-medium">{pick.title}</TableCell>
                    <TableCell>{pick.author}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-full">
                        {pick.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2 rounded-lg bg-transparent">
                        Preview
                      </Button>
                      <Button className="bg-misty-blue hover:bg-misty-blue/90 text-white rounded-lg" size="sm">
                        <CheckCircleIcon className="h-4 w-4 mr-1" /> Approve
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {editorPicksCandidates.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No new editor's pick candidates.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
