/**
 * Studio schema registry.
 *
 * Plumbing-only setup: no document/object types yet. Add your content model
 * here as the site grows, e.g.:
 *
 *   import {pageType} from './documents/pageType'
 *   export const schemaTypes = [pageType]
 *
 * Convention (mirrors the reference project):
 *   schemaTypes/documents/*  -> document types (things that appear in the Studio list)
 *   schemaTypes/objects/*     -> reusable objects / Portable Text blocks
 *
 * After changing the schema, regenerate frontend types from the repo root:
 *   pnpm sanity:typegen
 */
export const schemaTypes = []
