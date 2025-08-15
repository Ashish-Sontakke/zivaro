export function HowItWorks() {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container">
        <div className="flex flex-col gap-4 text-center lg:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How Zivaro.ai Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Our AI-powered platform streamlines your initial candidate screening
            process.
          </p>
        </div>
        <div className="flex items-start gap-16">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary-foreground">
                1
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Upload Job Description
              </h3>
              <p className="text-muted-foreground">
                Provide your job description and specific evaluation criteria
                that matter most for the role.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary-foreground">
                2
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                AI Generates Interviews
              </h3>
              <p className="text-muted-foreground">
                Our AI automatically creates tailored interviews for all
                candidates based on job requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary-foreground">
                3
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Candidates Complete Interviews
              </h3>
              <p className="text-muted-foreground">
                Candidates participate in AI-led interviews that assess their
                qualifications in a consistent manner.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary-foreground">
                4
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Review Ranked Leaderboard
              </h3>
              <p className="text-muted-foreground">
                Access a ranked leaderboard of candidates with detailed
                performance insights on each criterion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
