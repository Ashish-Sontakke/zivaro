"use client";

import { FileText, Bot, UserCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowchartStep {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const steps: FlowchartStep[] = [
  {
    id: "job-description",
    title: "Application",
    icon: <FileText className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    id: "ai-interview",
    title: "AI Interview",
    icon: <Bot className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-200",
  },
  {
    id: "candidate-evaluation",
    title: "Evaluation",
    icon: <UserCheck className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    id: "hiring-report",
    title: "Leaderboard",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
  },
];

export const Flowchart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-end gap-4 lg:gap-6">
            <div className="flex flex-col items-center text-center group">
              <div
                className={cn(
                  "w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                  step.bgColor,
                  step.color
                )}
              >
                {step.icon}
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm lg:text-base font-medium text-muted-foreground">
                  {step.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
