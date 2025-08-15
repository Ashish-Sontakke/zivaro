export function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="container">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from hiring managers who have transformed their recruitment
            process with Zivaro.ai.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-primary">JD</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Jane Doe</h3>
                <p className="text-sm text-muted-foreground">
                  HR Director, Tech Company
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Zivaro.ai reduced our screening time by 85% and helped us
              identify candidates we would have otherwise missed using
              traditional resume screening."
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-primary">MS</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Michael Smith</h3>
                <p className="text-sm text-muted-foreground">
                  Talent Acquisition Lead, Finance
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The detailed candidate leaderboard gives us insights we never had
              before. We're making better hiring decisions with less effort."
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-primary">AJ</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Alex Johnson</h3>
                <p className="text-sm text-muted-foreground">
                  Recruiting Manager, Healthcare
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Our candidates appreciate the flexibility of the AI interviews,
              and our team loves the time saved. It's a win-win solution."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
