import {
  Github,
  Linkedin,
  Snail,
  UserCheck2Icon,
  UserIcon,
} from "lucide-react";
import React from "react";
import slide1 from "../assets/slide4.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide1.webp";

// Informacion de mis redes sociales
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

// Informacion de login
const login = [
  {
    name: "Login",
    href: "/login",
  },
];

// Informacion las categorias del API
const categories = [
  { label: "Characters", category: "characters" },
  { label: "Planets", category: "planets" },
  { label: "Species", category: "species" },
  { label: "FILMS", category: "films" },
  { label: "VEHICLES", category: "vehicles" },
  { label: "STARSHIPS", category: "starships" },
  { label: "EDIT", category: "edit" },
];

// Informacion de botones
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

// Informacion del slider
const slides = [
  { id: 1, imageUrl: slide1 },
  { id: 2, imageUrl: slide2 },
  { id: 3, imageUrl: slide3 },
  { id: 4, imageUrl: slide4 },
];

export { socialMedia, login, categories, buttonlogin , slides};
