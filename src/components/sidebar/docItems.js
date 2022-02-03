import {
  ArrowRightCircle,
  Code,
  Globe,
  Info,
  List,
  Mail,
  Shield,
  Users,
} from "react-feather";

const gettingStartedSection = [
  {
    href: "/docs/introduction",
    icon: Info,
    title: "Welcome",
  },
  {
    href: "/docs/getting-started",
    icon: Code,
    title: "Getting Started",
  },
];

const developmentSection = [
  {
    href: "/docs/routing",
    icon: ArrowRightCircle,
    title: "Routing",
  },
  {
    href: "/docs/auth",
    icon: Users,
    title: "Authentication",
    children: [
      {
        href: "/docs/auth/auth0",
        title: "Auth0",
      },
      {
        href: "/docs/auth/cognito",
        title: "Cognito",
      },
      {
        href: "/docs/auth/firebase",
        title: "Firebase",
      },
      {
        href: "/docs/auth/jwt",
        title: "JWT",
      },
    ],
  },
  {
    href: "/docs/guards",
    icon: Shield,
    title: "Guards",
  },
  {
    href: "/docs/api-calls",
    icon: ArrowRightCircle,
    title: "API Calls",
  },
  {
    href: "/docs/environment-variables",
    icon: ArrowRightCircle,
    title: "Environment Variables",
  },
  {
    href: "/docs/redux",
    icon: ArrowRightCircle,
    title: "Redux",
  },
  {
    href: "/docs/internationalization",
    icon: Globe,
    title: "Internationalization",
  },
  {
    href: "/docs/eslint-and-prettier",
    icon: ArrowRightCircle,
    title: "ESLint & Prettier",
  },
  {
    href: "/docs/deployment",
    icon: ArrowRightCircle,
    title: "Deployment",
  },
  {
    href: "/docs/migrating-to-next-js",
    icon: ArrowRightCircle,
    title: "Migrating to Next.js",
  },
];

const helpSection = [
  {
    href: "/docs/support",
    icon: Mail,
    title: "Support",
  },
  {
    href: "/docs/changelog",
    icon: List,
    title: "Changelog",
    badge: "v2.1.0",
  },
];

const navItems = [
  {
    title: "Getting Started",
    pages: gettingStartedSection,
  },
  {
    title: "Development",
    pages: developmentSection,
  },
  {
    title: "Help",
    pages: helpSection,
  },
];

export default navItems;
