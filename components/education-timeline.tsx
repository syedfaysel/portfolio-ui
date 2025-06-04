"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, GraduationCap, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { EducationDomain } from "@/lib/types"

interface EducationTimelineProps {
  education: EducationDomain[]
}

export default function EducationTimeline({ education }: EducationTimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="relative py-8">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

      {education.map((item, index) => {
        const isEven = index % 2 === 0

        return (
          <motion.div
            key={index}
            className={`relative mb-12 md:mb-0 ${isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}
            style={{ width: "100%", maxWidth: "calc(50% - 20px)" }}
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground dark:border-background md:h-10 md:w-10 md:top-6 ${isEven ? "left-0 -translate-x-1/2 md:left-0" : "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"}`}
            >
              <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
            </div>

            {/* Content card */}
            <Card className="mt-6 transition-all hover:shadow-md md:mt-0">
              <CardContent className="p-4 md:p-6">
                <div className="relative">
                  <h3 className="mb-1 text-lg font-bold md:text-xl">{item.degree}</h3>
                  <div className="mb-3 flex flex-wrap gap-3 md:mb-4 md:gap-4">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground md:text-sm">
                      <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground md:text-sm">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{item.years}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
