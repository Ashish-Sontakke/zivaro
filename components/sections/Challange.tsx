export const Challange = () => {
  return (
    <section className="py-20" id="problem">
      <div className="container">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-destructive">
            The Hiring Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Today's hiring teams face overwhelming application volumes and
            inefficient screening methods.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-medium mb-2  text-destructive">
              Application Overload
            </h3>
            <p className="text-muted-foreground">
              Hiring teams receive hundreds of applications for a single job
              posting, making it impossible to interview everyone.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-destructive">
              Keyword Filtering Fails
            </h3>
            <p className="text-muted-foreground">
              Resume keyword matching misses qualified candidates and lets
              through others who simply optimized their applications.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-destructive">
              Time-Intensive Process
            </h3>
            <p className="text-muted-foreground">
              {`First-round interviews consume valuable time that could be
                better spent evaluating top candidates.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
