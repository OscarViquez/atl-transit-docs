import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ATL Transit App",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },

        {
          label: "Utility Class",
          autogenerate: { directory: "utility-classes" },
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
        {
          label: "Data Acess Library",
          autogenerate: { directory: "data-access" },
        },
      ],
    }),
  ],
});
