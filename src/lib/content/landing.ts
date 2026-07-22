/**
 * Landing page content. Kept out of the components so copy can be edited (or
 * later sourced from Sanity) without touching layout. All image paths point at
 * `public/images`.
 */

export const NAV_LINKS = [
  { label: "For Every Role", href: "/for-every-role" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Always Art", href: "/why-always-art" },
] as const;

export type Role = {
  name: string;
  description: string;
  tags: string;
  image: string;
};

export const ROLES: Role[] = [
  {
    name: "Artists",
    description:
      "A permanent record for every work and a career that stays whole across every show, gallery, and sale. Work independently or as a team with the galleries who represent you. The record connects everyone who carries your work forward, and builds the archive your legacy will stand on.",
    tags: "Career record, collector ties, audience tools, estate from day one",
    image: "/images/role-artists.webp",
  },
  {
    name: "Galleries",
    description:
      "Forge relationships you own, not rent. Make careers and hold the provenance that proves you did it. Showcase, transact, and run your program as a team with your artists, and with the galleries you share them with. Where rosters differ, you compete on program, not on locked-in data.",
    tags: "Inventory, viewing rooms, collector pipeline, sales, portable provenance",
    image: "/images/role-galleries.webp",
  },
  {
    name: "Collectors",
    description:
      "A private, permanent record of everything you hold. Provenance that protects value at every resale, advisor context that travels with the work, and relationships with galleries and artists on your terms, independent of any platform that comes or goes.",
    tags: "Private collection, provenance, discovery, gallery relationships",
    image: "/images/role-collectors.webp",
  },
  {
    name: "Fairs",
    description:
      "Carry your ecosystem between editions instead of rebuilding it each year. Every interaction traced to its source, data flowing back to every exhibitor. Proof of the value the fair created.",
    tags: "Exhibitor management, collector attribution, edition continuity",
    image: "/images/role-fairs.webp",
  },
  {
    name: "Estates",
    description:
      "Authorship and provenance inherited intact, not reconstructed from fragments. A record spanning decades that keeps the catalogue, the market, and the legacy coherent.",
    tags: "Authorship, catalogue support, provenance, legacy continuity",
    image: "/images/role-estates.webp",
  },
  {
    name: "Institutions",
    description:
      "Build on records that already exist. Exhibition history, loans, and conservation land on the same foundation the work arrived on. Scholarship that compounds instead of starting over.",
    tags: "Exhibition history, loan records, conservation, research access",
    image: "/images/role-institutions.webp",
  },
];

export const STATS = [
  {
    value: "400 galleries",
    description:
      "Manage artist relationships, inventory, collector history, and exhibition records as their complete operational foundation, on infrastructure they own, with data that stays with them.",
  },
  {
    value: "50k artworks",
    description:
      "Carry permanent records that follow them across ownership, exhibition, and institutional care.",
  },
  {
    value: "6k collectors",
    description:
      "Steward collections with records designed for decades, preserving provenance, coordinating loans, and planning succession on infrastructure that outlasts any platform.",
  },
  {
    value: "Leading art fairs",
    description:
      "Zona Maco, Material Art Fair, and Salon Acme return year after year as part of Mexican Art Week: three distinct fairs on unified infrastructure, each maintaining its own identity.",
  },
] as const;

export const RECORD_SPECS = [
  { label: "Inventoried", value: "AA · 00041" },
  { label: "Originated", value: "Studio, Mexico City" },
  { label: "Medium", value: "Oil on canvas" },
  { label: "Verified", value: "11 May 2026" },
] as const;

export const TIMELINE = [
  { year: "2018", title: "Studio", place: "Mexico City" },
  { year: "2019", title: "Art Basel", place: "Miami Beach" },
  { year: "2020", title: "Private collection", place: "San Francisco" },
  { year: "2022", title: "Conservation", place: "A. Marotta, studio" },
  { year: "2024", title: "Loan, exhibition", place: "Foundation H." },
  { year: "2026", title: "Public Archive.", place: "Accession" },
] as const;

export const TENSION = {
  existing: {
    title: "Existing platforms",
    rows: [
      "Serves one role",
      "Sits between you and your relationships",
      "Record lives in its account",
      "History fragments when you leave",
      "Charges for access",
    ],
  },
  foundation: {
    title: "A foundation",
    rows: [
      "Serves every role",
      "The connection stays yours, always",
      "Record exists on its own",
      "History persists, always",
      "Free at the foundation",
    ],
  },
} as const;

export const CONDITIONS = [
  {
    title: "A permanent shared record",
    description: "One record per work. Owned by no platform.",
  },
  {
    title: "Complete tools for every role",
    description: "Free and whole. Nothing core held back.",
  },
  {
    title: "Structural governance",
    description: "Neutrality enforced, not promised.",
  },
  {
    title: "Data and participant agency",
    description: "Your data, records, and relationships stay yours.",
  },
  {
    title: "Connected, on your terms",
    description: "Operate alone. Connect by choice, never by force.",
  },
  {
    title: "Built to last",
    description: "Sustained from the top, never from access itself.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Public Benefit Corporation.",
    description:
      "Legal structure that prioritizes mission over profit. Commitments are obligations, not aspirations.",
  },
  {
    title: "Code in escrow.",
    description:
      "Independent trustees hold the codebase in escrow. If the corporation fails, the infrastructure continues.",
  },
  {
    title: "Role neutrality.",
    description:
      "No role is valued above another. The infrastructure never aims to make any role less important over time.",
  },
  {
    title: "Non-competitive by design.",
    description: "Built to support and amplify every role, never to compete with it.",
  },
] as const;

export const SUSTAIN_FAQS = [
  {
    question: "How is this free?",
    answer: [
      "Because infrastructure only works if everyone can depend on it. That forces three nonnegotiables: universal, with no price gate on participation; private and secure, yours by default; and able to connect, working on its own and interoperating only when you choose.",
      "None of them survive a company that taxes access — so the foundation and the core tools stay free, permanently.",
    ],
  },
  {
    question: "So what do you do with my data and relationships?",
    answer: [
      "Nothing. They're yours by default — protected, never exposed, never converted into leverage. Leave, and they go with you. That isn't a policy we could revise later; it's held in the structure itself.",
    ],
  },
  {
    question: "Then how do you make money?",
    answer: [
      "Above the foundation, never inside it. Charging for access caps who can join and breaks the neutrality infrastructure depends on. The larger opportunity is in what the foundation makes possible: bespoke services like certificates of authenticity, custom applications, websites, and print; analytics on permissioned data; efficiency and automation tools; enterprise and institutional deployments; and a third-party ecosystem — the bigger number.",
      "Every one of them optional — never required to participate or run your role, but valuable and affordable if you need them.",
    ],
  },
] as const;

export const FOOTER_NAV = [
  {
    title: "Infrastructure",
    links: [
      { label: "The Art Record", href: "#" },
      { label: "The Art Tools", href: "#" },
      { label: "Getting started", href: "#" },
    ],
  },
  {
    title: "For the art world",
    links: [
      { label: "Artists", href: "#" },
      { label: "Galleries", href: "#" },
      { label: "Collectors", href: "#" },
      { label: "Institutions", href: "#" },
    ],
  },
  {
    title: "Foundation",
    links: [
      { label: "The Foundation", href: "#" },
      { label: "Governance", href: "#" },
      { label: "Whitepaper", href: "#" },
      { label: "Public Benefit", href: "#" },
    ],
  },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
] as const;
