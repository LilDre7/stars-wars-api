import {
  Github,
  Linkedin,
  Snail,
  UserCheck2Icon,
  UserIcon,
} from "lucide-react";
import React from "react";

const socialMedia = [
  {
    icon: React.createElement(Linkedin),
    href: "https://www.linkedin.com/in/alvaro-aburto-dev/",
  },
  {
    icon: React.createElement(Github),
    href: "https://github.com/LilDre7",
  },
  {
    icon: React.createElement(Snail),
    href: "https://bento.me/alvaroaburto",
  },
  {
    icon: React.createElement(UserCheck2Icon),
    href: "https://alvaro-website.vercel.app/",
  },
];

const login = [
  {
    name: "Login",
    href: "/login",
  },
];

const categories = [
  { label: "Characters", category: "characters" },
  { label: "Planets", category: "planets" },
  { label: "Species", category: "species" },
  { label: "FILMS", category: "films" },
  { label: "VEHICLES", category: "vehicles" },
  { label: "STARSHIPS", category: "starships" },
  { label: "EDIT", category: "edit" },
];

const buttonlogin = [
  {
    name: "Continue with Google",
    href: "#",
    icon: React.createElement(UserIcon, { width: 20, height: 20 }),
    target: "_blank",
  },
  {
    name: "Continue with Github",
    href: "#",
    icon: React.createElement(Github, { width: 20, height: 20 }),
    target: "_blank",
  },
];

export { socialMedia, login, categories, buttonlogin };
