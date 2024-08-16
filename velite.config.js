import { defineConfig, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
    collections: {
        posts: {
            name: 'Post', // collection type name
            pattern: 'posts/**/*.md', // content files glob pattern
            schema: s
                .object({
                    slug: s.path(),
                    title: s.string().max(99),
                    description: s.string().max(999).optional(),
                    date: s.isodate(),
                    published: s.boolean().default(true),
                    body: s.mdx(),
                })
                // more additional fields (computed fields)
                .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
        },
        others: {
            // other collection schema options
        }
    }
})