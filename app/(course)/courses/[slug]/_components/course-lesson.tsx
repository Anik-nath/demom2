// @ts-nocheck

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, FileText, Lock, PlayCircle } from "lucide-react";
import ClientCourseLesson from "./course-lesson-component";


export default async function CourseLesson({ course }) {
  // This assumes `course` is passed as a prop or fetched on the server
  console.log("lesssons page");
  return (
    <div className="my-6">
      <h1 className="text-2xl font-bold mb-4">Course Lessons</h1>
      <Accordion type="single" collapsible className="border">
        {course.lessons.map((lesson, i) => (
          <AccordionItem key={lesson.id} value={lesson.id}>
            <div className="flex items-center justify-between bg-gray-100">
              <AccordionTrigger className="px-4 font-bold text-sm text-left flex justify-start gap-4 hover:no-underline">
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                <span className="capitalize">Lesson - {i + 1}</span>
              </AccordionTrigger>
            </div>
            <AccordionContent className="p-4">
              <ClientCourseLesson lesson={lesson} course={course} index={i} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
