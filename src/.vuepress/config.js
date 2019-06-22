module.exports = {
  title: "张凯",
  theme: "@vuepress/blog",
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      blogPluginOptions.directories.forEach(d => {
        if (d.id === "post") {
          d.dirname = "posts";
        }
      });
      const archiveDirectoryClassifierIndex = blogPluginOptions.directories.findIndex(
        d => d.id === "archive"
      );
      blogPluginOptions.directories.splice(archiveDirectoryClassifierIndex, 1);

      const notesDirectoryClassifier = {
        id: "notes",
        dirname: "notes",
        path: "/notes/",
        layout: "IndexWriting",
        itemLayout: "Writing",
        itemPermalink: "/notes/:slug",
        pagination: {
          perPagePosts: 5
        }
      };
      blogPluginOptions.directories.push(notesDirectoryClassifier);

      blogPluginOptions.frontmatters.forEach(f => {
        if (f.id === "tag") {
          f.path = "/tags/";
        }
      });

      return blogPluginOptions;
    },
    nav: [
      {
        text: "博客",
        link: "/"
      },
      {
        text: "笔记",
        link: "/notes/"
      },
      {
        text: "标签",
        link: "/tags/"
      }
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/kaizhang91"
        }
      ],
      copyright: [
        {
          text: "Powered by VuePress | 张凯 © 2019 - 现在",
          link: ""
        }
      ]
    }
  },
  base: "/blog/"
};
