// Define testimonials data structure
const TESTIMONIALS = [
  {
    id: "1",
    initials: "JD",
    name: "Jane Doe",
    role: "HR Director, Tech Company",
    quote:
      "Zivaro.ai reduced our screening time by 85% and helped us identify candidates we would have otherwise missed using traditional resume screening.",
  },
  {
    id: "2",
    initials: "MS",
    name: "Michael Smith",
    role: "Talent Acquisition Lead, Finance",
    quote:
      "The detailed candidate leaderboard gives us insights we never had before. We're making better hiring decisions with less effort.",
  },
  {
    id: "3",
    initials: "AJ",
    name: "Alex Johnson",
    role: "Recruiting Manager, Healthcare",
    quote:
      "Our candidates appreciate the flexibility of the AI interviews, and our team loves the time saved. It's a win-win solution.",
  },
];

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
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
