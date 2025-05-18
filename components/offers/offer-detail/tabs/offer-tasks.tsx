"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarIcon, CheckCircle2, ChevronDown, MoreHorizontal, Plus, Calendar, Users } from "lucide-react";

interface OfferTasksProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

// Extended tasks data
const allTasks = [
  {
    id: 1,
    title: "Update ad creative for mid-summer refresh",
    description: "Create new visuals and copy for the summer campaign refresh to maintain engagement",
    status: "pending",
    priority: "high",
    dueDate: "2023-07-20",
    assignee: {
      name: "Alex Morgan",
      image: null,
      initials: "AM",
    },
    createdAt: "2023-07-10",
    category: "creative",
  },
  {
    id: 2,
    title: "Review targeting efficiency report",
    description: "Analyze the targeting efficiency report to identify potential improvements",
    status: "completed",
    priority: "medium",
    dueDate: "2023-07-15",
    assignee: {
      name: "Jamie Smith",
      image: null,
      initials: "JS",
    },
    createdAt: "2023-07-08",
    category: "analysis",
    completedAt: "2023-07-14",
  },
  {
    id: 3,
    title: "Implement budget adjustment recommendation",
    description: "Adjust campaign budget based on AI insights to maximize ROI",
    status: "pending",
    priority: "high",
    dueDate: "2023-07-18",
    assignee: {
      name: "Taylor Reed",
      image: null,
      initials: "TR",
    },
    createdAt: "2023-07-12",
    category: "budget",
  },
  {
    id: 4,
    title: "Fix mobile conversion rate issue",
    description: "Investigate and address the declining mobile conversion rate identified in recent insights",
    status: "in-progress",
    priority: "urgent",
    dueDate: "2023-07-17",
    assignee: {
      name: "Alex Morgan",
      image: null,
      initials: "AM",
    },
    createdAt: "2023-07-14",
    category: "technical",
  },
  {
    id: 5,
    title: "Prepare monthly performance report",
    description: "Compile key metrics and insights for the monthly performance review",
    status: "pending",
    priority: "medium",
    dueDate: "2023-07-30",
    assignee: {
      name: "Jamie Smith",
      image: null,
      initials: "JS",
    },
    createdAt: "2023-07-10",
    category: "reporting",
  },
];

export function OfferTasks({ offer }: OfferTasksProps) {
  const [tasks, setTasks] = useState(allTasks);
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "To Do";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  
  const handleTaskToggle = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            status: task.status === "completed" ? "pending" : "completed",
            completedAt: task.status === "completed" ? undefined : new Date().toISOString().split('T')[0]
          } 
        : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Task Management</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center">
          <TabsList className="grid w-full max-w-[400px] grid-cols-3">
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="pending">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  <Users className="mr-2 h-3.5 w-3.5" />
                  Assignee
                  <ChevronDown className="ml-2 h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Assignees</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Alex Morgan</DropdownMenuItem>
                <DropdownMenuItem>Jamie Smith</DropdownMenuItem>
                <DropdownMenuItem>Taylor Reed</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Unassigned</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  <Calendar className="mr-2 h-3.5 w-3.5" />
                  Due Date
                  <ChevronDown className="ml-2 h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Dates</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>This Week</DropdownMenuItem>
                <DropdownMenuItem>Next Week</DropdownMenuItem>
                <DropdownMenuItem>Overdue</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Tasks</CardTitle>
              <CardDescription>View and manage all tasks for this offer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`border rounded-lg p-4 transition-all hover:shadow-sm ${
                      task.status === "completed" ? "opacity-75" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <Checkbox 
                        id={`task-${task.id}`} 
                        checked={task.status === "completed"}
                        onCheckedChange={() => handleTaskToggle(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <h3 className={`font-medium ${task.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                              {task.title}
                            </h3>
                            <div className="hidden sm:flex sm:items-center sm:space-x-2">
                              <Badge className={getStatusColor(task.status)} variant="outline">
                                {getStatusLabel(task.status)}
                              </Badge>
                              <Badge className={getPriorityColor(task.priority)} variant="outline">
                                {task.priority}
                              </Badge>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Task</DropdownMenuItem>
                              <DropdownMenuItem>Change Assignee</DropdownMenuItem>
                              <DropdownMenuItem>Change Due Date</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600 dark:text-red-400">Delete Task</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="sm:hidden flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(task.status)} variant="outline">
                            {getStatusLabel(task.status)}
                          </Badge>
                          <Badge className={getPriorityColor(task.priority)} variant="outline">
                            {task.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                            Due {formatDate(task.dueDate)}
                          </div>
                          <div className="flex items-center">
                            <Avatar className="h-5 w-5 mr-1">
                              <AvatarImage src={task.assignee.image || ""} alt={task.assignee.name} />
                              <AvatarFallback className="text-[10px]">{task.assignee.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">{task.assignee.name}</span>
                          </div>
                          {task.status === "completed" && task.completedAt && (
                            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                              <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                              Completed {formatDate(task.completedAt)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Tasks</CardTitle>
              <CardDescription>Tasks that need to be completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks
                  .filter(task => task.status !== "completed")
                  .map((task) => (
                    <div 
                      key={task.id} 
                      className="border rounded-lg p-4 transition-all hover:shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox 
                          id={`task-${task.id}`} 
                          checked={false}
                          onCheckedChange={() => handleTaskToggle(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium">{task.title}</h3>
                              <div className="hidden sm:flex sm:items-center sm:space-x-2">
                                <Badge className={getStatusColor(task.status)} variant="outline">
                                  {getStatusLabel(task.status)}
                                </Badge>
                                <Badge className={getPriorityColor(task.priority)} variant="outline">
                                  {task.priority}
                                </Badge>
                              </div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">More options</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                <DropdownMenuItem>Change Assignee</DropdownMenuItem>
                                <DropdownMenuItem>Change Due Date</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 dark:text-red-400">Delete Task</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <div className="sm:hidden flex items-center space-x-2 mt-1">
                            <Badge className={getStatusColor(task.status)} variant="outline">
                              {getStatusLabel(task.status)}
                            </Badge>
                            <Badge className={getPriorityColor(task.priority)} variant="outline">
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                              Due {formatDate(task.dueDate)}
                            </div>
                            <div className="flex items-center">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage src={task.assignee.image || ""} alt={task.assignee.name} />
                                <AvatarFallback className="text-[10px]">{task.assignee.initials}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs">{task.assignee.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
              <CardDescription>Tasks that have been finished</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks
                  .filter(task => task.status === "completed")
                  .map((task) => (
                    <div 
                      key={task.id} 
                      className="border rounded-lg p-4 transition-all hover:shadow-sm opacity-75"
                    >
                      <div className="flex items-start gap-4">
                        <Checkbox 
                          id={`task-${task.id}`} 
                          checked={true}
                          onCheckedChange={() => handleTaskToggle(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium line-through text-muted-foreground">{task.title}</h3>
                              <div className="hidden sm:flex sm:items-center sm:space-x-2">
                                <Badge className={getStatusColor(task.status)} variant="outline">
                                  {getStatusLabel(task.status)}
                                </Badge>
                                <Badge className={getPriorityColor(task.priority)} variant="outline">
                                  {task.priority}
                                </Badge>
                              </div>
                            </div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">More options</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                <DropdownMenuItem>Change Assignee</DropdownMenuItem>
                                <DropdownMenuItem>Change Due Date</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 dark:text-red-400">Delete Task</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <div className="sm:hidden flex items-center space-x-2 mt-1">
                            <Badge className={getStatusColor(task.status)} variant="outline">
                              {getStatusLabel(task.status)}
                            </Badge>
                            <Badge className={getPriorityColor(task.priority)} variant="outline">
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                              Due {formatDate(task.dueDate)}
                            </div>
                            <div className="flex items-center">
                              <Avatar className="h-5 w-5 mr-1">
                                <AvatarImage src={task.assignee.image || ""} alt={task.assignee.name} />
                                <AvatarFallback className="text-[10px]">{task.assignee.initials}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs">{task.assignee.name}</span>
                            </div>
                            {task.completedAt && (
                              <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                                <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                                Completed {formatDate(task.completedAt)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}