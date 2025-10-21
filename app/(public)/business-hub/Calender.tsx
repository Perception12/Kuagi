"use client"

import { useState } from "react"

interface CalendarEvent {
  id: string
  time: string
  title: string
  location: string
  color: string
}

interface DaySchedule {
  day: string
  date: string
  events: CalendarEvent[]
}

const scheduleData: DaySchedule[] = [
  {
    day: "Mon",
    date: "OCT 14",
    events: [
      {
        id: "1",
        time: "9:00AM",
        title: "Business hub meet",
        location: "@ Twitter Space",
        color: "border-l-blue-400",
      },
    ],
  },
  {
    day: "Tue",
    date: "OCT 15",
    events: [
      {
        id: "2",
        time: "9:00AM",
        title: "Tips and business improvement strategies.",
        location: "@ Kuagi Hub",
        color: "border-l-green-400",
      },
    ],
  },
  {
    day: "Wed",
    date: "OCT 16",
    events: [
      {
        id: "3",
        time: "9:00AM",
        title: "Survey / Feedback form",
        location: "@ Twitter Space",
        color: "border-l-pink-400",
      },
    ],
  },
  {
    day: "Thur",
    date: "OCT 17",
    events: [
      {
        id: "4",
        time: "9:00AM",
        title: "Quick Recap",
        location: "@ Twitter Space",
        color: "border-l-orange-400",
      },
    ],
  },
  {
    day: "Fri",
    date: "OCT 18",
    events: [
      {
        id: "5",
        time: "9:00AM",
        title: "Weekly Q&A Interactive",
        location: "@ Twitter Space",
        color: "border-l-purple-400",
      },
    ],
  },
  {
    day: "Sat",
    date: "OCT 19",
    events: [
      {
        id: "6",
        time: "10:00AM",
        title: "Weekend Workshop",
        location: "@ Community Center",
        color: "border-l-indigo-400",
      },
    ],
  },
  {
    day: "Sun",
    date: "OCT 20",
    events: [
      {
        id: "7",
        time: "11:00AM",
        title: "Planning Session",
        location: "@ Virtual",
        color: "border-l-teal-400",
      },
    ],
  },
]

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export default function CalendarPage() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("calendar-container")
    if (!container) return

    const scrollAmount = 350
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })
    setScrollPosition(newPosition)
  }

  return (
    <div className=" bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-primary">Our Calendar</h1>

        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-lg transition-colors"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Calendar Container */}
          <div
            id="calendar-container"
            className="overflow-x-auto px-12 calendar-scroll"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex gap-6 min-w-max pb-4">
              {scheduleData.map((daySchedule) => (
                <div key={daySchedule.day} className="flex-shrink-0 w-80">
                  <h2 className="text-4xl font-semibold text-gray-600 mb-2">{daySchedule.day}</h2>
                  <p className="text-sm text-gray-500 mb-6">{daySchedule.date}</p>
                  <div className="space-y-4">
                    {daySchedule.events.map((event) => (
                      <div
                        key={event.id}
                        className={`p-6 rounded-2xl border border-gray-200 bg-white ${event.color} border-l-8 transition-transform hover:scale-105 shadow-sm`}
                      >
                        <div className="space-y-3">
                          <p className="text-lg font-semibold text-gray-900">{event.time}</p>
                          <h3 className="text-xl font-medium leading-relaxed text-gray-800">{event.title}</h3>
                          <p className="text-sm text-gray-500 pt-2">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-lg transition-colors"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}
