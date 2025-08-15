export function Benefits() {
  return (
    <section className="py-20" id="benefits">
      <div className="container">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose Zivaro.ai
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform offers significant advantages for your hiring process.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-4">Time Efficiency</h3>
            <p className="text-muted-foreground">
              Reduce first-round interview time by 90%, allowing your team to
              focus on the most promising candidates.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-4">Objective Assessment</h3>
            <p className="text-muted-foreground">
              Eliminate unconscious bias with consistent, criteria-based
              evaluations for all candidates.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-4">Seamless Integration</h3>
            <p className="text-muted-foreground">
              Works alongside your existing hiring processes without disrupting
              your established workflows.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-4">Comprehensive Insights</h3>
            <p className="text-muted-foreground">
              Gain detailed performance data on each candidate across multiple
              evaluation criteria.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-4">Candidate Experience</h3>
            <p className="text-muted-foreground">
              Provide a modern, flexible interview experience that respects
              candidates' time and schedules.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium mb-4">Scalable Solution</h3>
            <p className="text-muted-foreground">
              Handle any volume of applications without increasing your team's
              workload or hiring costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
