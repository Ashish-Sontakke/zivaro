import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-sm">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">zivaro.ai</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Realtime LLM powered multimodal AI interviewer helping hiring
              teams handle the first round of interviews efficiently.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#privacy"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zivaro.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
