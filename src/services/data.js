import {
  Currency,
  Github,
  Linkedin,
  UserCheck2Icon,
  UserIcon,
} from "lucide-react";
import React from "react";

const socialMedia = [
  {
    icon: React.createElement(Linkedin),
    href: "https://www.facebook.com/",
  },
  {
    icon: React.createElement(Github),
    href: "https://www.instagram.com/",
  },
  {
    icon: React.createElement(Currency),
    href: "https://www.twitter.com/",
  },
  {
    icon: React.createElement(UserCheck2Icon),
    href: "https://www.youtube.com/",
  },
];

const login = [
  {
    name: "Login",
    href: "/login",
  },
];

const categories = [
  { label: "Personajes", category: "characters" },
  { label: "Planetas", category: "planets" },
  { label: "Especies", category: "species" },
  { label: "FILMS", category: "films" },
  { label: "VEHICLES", category: "vehicles" },
  { label: "STARSHIPS", category: "starships" },
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
