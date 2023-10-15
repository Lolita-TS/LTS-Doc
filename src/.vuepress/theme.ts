import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  fullscreen: true,

  hostname: "http://www.lolita.guru",

  author: {
    name: "泠熙子",
    url: "http://www.lolita.guru",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/Gothic-LolitaTS.svg",

  repo: "Lolita-TS/LTS-Doc",
  docsBranch: "Lolita",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Lolita TS Dev Group. <a href='https://icp.gov.moe/?keyword=20233348' target='_blank'>萌ICP备20233348号</a>",

  displayFooter: true,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,
    mdEnhance: {
      card: true,
      container: true,
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
