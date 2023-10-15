import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "爱发电",
      icon: "laptop-code",
      prefix: "https://afdian.net/a/LingXiZi",
      link: "https://afdian.net/a/LingXiZi",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "doc/",
      children: "structure",
    },
    "web",
  ],
});
