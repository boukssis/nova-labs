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
  { href: "/#about", id: "about", label: "About" },
  { href: "/#why", id: "why", label: "Why Nova" },
  { href: "/#faq", id: "faq", label: "FAQ" },
] as const;

export const capabilities = [
  {
    title: "AI products",
    body: "From idea to a working product.",
  },
  {
    title: "Automation & systems",
    body: "Software that removes real operational work.",
  },
  {
    title: "Technical partnership",
    body: "Strategy, architecture and build — without needing your own CTO.",
  },
] as const;

export const process = [
  {
    index: "01",
    title: "Scope",
    time: "7 days",
    body: "Define the problem, product and first version.",
  },
  {
    index: "02",
    title: "Build",
    time: "Day 30",
    body: "Get a working product into your hands.",
  },
  {
    index: "03",
    title: "Launch",
    time: "Around day 90",
    body: "Turn the working version into something customers can depend on.",
  },
] as const;

export const reasons = [
  {
    title: "One partner",
    body: "You work directly with Daniel, not an account-management layer.",
  },
  {
    title: "Build for the business",
    body: "Technology decisions are commercial decisions.",
  },
  {
    title: "AI with a reason",
    body: "If AI doesn't improve the outcome, it doesn't go in.",
  },
] as const;

export const products = [
  {
    name: "GlowUp",
    kind: "Voice AI",
    line: "AI-powered calls, messages and bookings for service businesses.",
    href: "https://www.tryglowup.co.uk",
    domain: "tryglowup.co.uk",
  },
  {
    name: "OneCoach",
    kind: "AI product",
    line: "An AI gym-coaching app, built and shipped in Manchester.",
    href: "https://www.getonecoach.app",
    domain: "getonecoach.app",
  },
  {
    name: "Harold",
    kind: "AI platform",
    line: "AI-native deal intelligence for commercial real estate.",
    href: "https://tryharold.com",
    domain: "tryharold.com",
  },
] as const;

export const audience = ["Founders", "Operators", "Early-stage teams"] as const;

export const faqs = [
  {
    question: "Do I need to be technical?",
    answer:
      "No. That's the point. You bring the problem and the judgment. Nova handles the technical side.",
  },
  {
    question: "How quickly can we get something working?",
    answer:
      "Scope in 7 days. A first working version around day 30. Production-ready around day 90. Larger products move the dates — not the steps.",
  },
  {
    question: "How are projects structured?",
    answer:
      "Around your stage — cash, equity, or a combination where appropriate. Not every company is a fit for equity.",
  },
] as const;
