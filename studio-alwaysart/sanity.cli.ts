import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  /**
   * Auto-update studios to the latest published Studio toolchain without a
   * manual dependency bump.
   */
  deployment: {autoUpdates: true},
  /**
   * TypeGen scans the Next.js app's `defineQuery` calls and emits typed results
   * to `../src/sanity.types.ts` (inside the app, so `@/sanity.types` resolves
   * and the app's tsconfig picks it up). `overloadClientMethods` makes
   * `client.fetch` and next-sanity's `sanityFetch` return typed results.
   *
   *   pnpm --filter studio-alwaysart run typegen   # from repo root
   *   pnpm sanity:typegen                           # shorthand alias
   */
  typegen: {
    enabled: true,
    schema: 'schema.json',
    path: '../src/**/*.{ts,tsx,js,jsx}',
    generates: '../src/sanity.types.ts',
    overloadClientMethods: true,
  },
})
