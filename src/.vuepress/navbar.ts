import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/doc/",
  {
    text: "文档",
    icon: "lightbulb",
    prefix: "/doc/",
    children: [
      {
        text: "Windows APP",
        icon: "lightbulb",
        prefix: "app/windows",
        link: "app/windows",
      },
      {
        text: "Android APP",
        icon: "lightbulb",
        prefix: "app/android",
        link: "app/android",
      },
      {
        text: "轻量化功能",
        icon: "lightbulb",
        prefix: "tool",
        link: "tool",
      },
    ],
  },
  {
    text: "爱发电",
    icon: "book",
    link: "https://afdian.net/a/LingXiZi",
  },
]);
