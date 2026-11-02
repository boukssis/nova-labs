export const applyUrl = "https://calendly.com/withnovalabs/apply";

export const links = {
  apply: applyUrl,
  linkedin: "https://www.linkedin.com/in/danielkelly07",
  company: "https://www.linkedin.com/company/withnovalabs",
} as const;

export const nav = [
  { href: "/#build", id: "build", label: "What we build" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#process", id: "process", label: "Process" },
  { href: "/#why", id: "why", label: "Why Nova" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#faq", id: "faq", label: "FAQ" },
] as const;

export const barriers = [
  "Choosing the technology",
  "Finding people who can actually build it",
  "Holding the scope",
  "Making the architecture decisions",
  "Knowing where AI helps, and where it doesn't",
  "Keeping the cost under control",
  "Shipping something a real person can use",
] as const;

export const capabilities = [
  {
    title: "AI products",
    body: "A product someone can use, built around a specific problem. Not a model looking for a job.",
  },
  {
    title: "Voice and conversational AI",
    body: "Systems people speak with, where the conversation is the work. Daniel built this at GlowUp for service businesses — messages, calls and bookings.",
  },
  {
    title: "Internal systems",
    body: "Tools that take manual work out of a real operation. Understand the process first. Then build the part technology should own.",
  },
  {
    title: "Custom software",
    body: "Software shaped around how the business actually runs. Not the business bent around a tool that was never meant for it.",
  },
  {
    title: "Technical strategy",
    body: "What to build, what to leave out, and what done means — agreed before the wrong thing gets made.",
  },
] as const;

export const rhythm = [
  { time: "7 days", label: "Scope" },
  { time: "Day 30", label: "First working version" },
  { time: "Day 90", label: "Production-ready" },
] as const;

export const steps = [
  {
    word: "Idea",
    title: "Understand",
    body: "Start with the problem, the customer, and the commercial reason this should exist. If that isn't clear, building is just an expensive way to stay confused.",
  },
  {
    word: "Scope",
    title: "Define",
    body: "Turn the idea into a product and a technical scope. What the first version is. What it is not. Who it is for.",
  },
  {
    word: "Build",
    title: "Build",
    body: "Develop the working product in the open. Progress is something you can click, not a status slide.",
  },
  {
    word: "Product",
    title: "Test",
    body: "Put it in front of real users. Keep what holds. Drop what only sounded convincing in a meeting.",
  },
  {
    word: "Launch",
    title: "Launch",
    body: "Move from a promising build to something that can run for real. A launch is when other people can depend on it.",
  },
  {
    word: "Refine",
    title: "Iterate",
    body: "Change it from evidence. A partner who disappears at launch has only done half the job.",
  },
] as const;

export const reasons = [
  {
    title: "One partner",
    body: "One technical partner, responsible for the outcome. Not a rota of freelancers who each own a slice and none of the result.",
  },
  {
    title: "Founder mindset",
    body: "What gets built is a business decision. Shipping the wrong thing is a commercial failure, not a technical one.",
  },
  {
    title: "AI with a reason",
    body: "Technology has to earn its place. If it doesn't create value, it doesn't go in.",
  },
  {
    title: "No layer in between",
    body: "You work with Daniel. The idea is not briefed through an account manager and reported back in a deck.",
  },
] as const;

export const products = [
  {
    name: "GlowUp",
    role: "Co-founder",
    kind: "Voice AI",
    line: "Conversational and voice AI for service businesses.",
    body: "Messages, calls and bookings, handled in the business's own voice. Daniel's first company. Built from zero.",
    href: "https://www.tryglowup.co.uk",
    domain: "tryglowup.co.uk",
  },
  {
    name: "OneCoach",
    role: "Co-founder",
    kind: "AI product",
    line: "An AI gym-coaching app, built and shipped in Manchester.",
    body: "Training plans shaped around goals, equipment and injuries, with nutrition logging and a programme that adapts as the person trains.",
    href: "https://www.getonecoach.app",
    domain: "getonecoach.app",
  },
  {
    name: "Harold",
    role: "Co-founder and CTO",
    kind: "AI platform",
    line: "AI-native deal intelligence for commercial real estate.",
    body: "A platform for finding, screening and progressing property deals against a firm's own mandate. Taken from idea to production.",
    href: "https://tryharold.com",
    domain: "tryharold.com",
  },
] as const;

export const fits = [
  {
    title: "Non-technical founders",
    body: "You understand the problem and the market. You need the technical side handled properly.",
  },
  {
    title: "Operators",
    body: "You've found a process, or a gap, where software or AI would create real leverage.",
  },
  {
    title: "Early-stage teams",
    body: "You need senior technical judgment before you hire a full engineering team.",
  },
  {
    title: "Business owners",
    body: "Part of the company should work better, and you want it built rather than patched over.",
  },
] as const;

export const notAFit = [
  "You want AI added because everyone else is talking about it.",
  "You are looking for the cheapest developer.",
  "You can't yet say what business problem this solves.",
] as const;

export const engagementModels = [
  {
    title: "Cash",
    body: "When a straightforward build is the right engagement.",
  },
  {
    title: "Equity",
    body: "When the company, the product and the fit justify it. Not the default, and not a sweetener.",
  },
  {
    title: "A combination",
    body: "When the stage of the company calls for both.",
  },
] as const;

export const faqs = [
  {
    question: "Do I need to be technical?",
    answer:
      "No. That's the point. You bring the problem, the customer and the judgment. Nova handles the technical decisions and the build.",
  },
  {
    question: "What stage should my idea be at?",
    answer:
      "Far enough that you can explain the problem and who it's for. It does not need a specification. If it's still a feeling with no problem underneath it, that's the first conversation — not a build.",
  },
  {
    question: "How quickly can we get something working?",
    answer:
      "Nova's published rhythm is a scope in 7 days, a first working version around day 30, and a production-ready build around day 90. A larger product moves those dates. It doesn't skip the steps.",
  },
  {
    question: "How are projects structured?",
    answer:
      "Around the stage you're at. Cash, equity, or a combination when equity actually fits. There isn't a public rate card, and not every company is a fit for equity.",
  },
] as const;
