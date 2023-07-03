import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@schemas";
import { StudioNavbar } from "@src/components/StudioNavbar/StudioNavbar";
import { wgTheme } from "@src/theme";
import { Config } from "sanity";
import { deskTool } from "sanity/desk";

export const config: Config = {
  name: 'default',
  title: 'Wood Gear',

  projectId: '7bkq1oo4',
  dataset: 'production',

  basePath:"/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: wgTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    }
  }
} 