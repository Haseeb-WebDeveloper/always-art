import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

/**
 * projectId / dataset come from the Studio's own `.env` file (see `.env.example`).
 * Sanity's CLI auto-loads `SANITY_STUDIO_*` vars from this directory and exposes
 * them to both the CLI config and the browser bundle. Keep them in sync with the
 * Next app's `NEXT_PUBLIC_SANITY_*` vars in the repo root `.env.local`.
 */
const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'AlwaysArt',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
