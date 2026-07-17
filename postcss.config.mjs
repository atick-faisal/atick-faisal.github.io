import tailwindcss from '@tailwindcss/postcss';

// Vite auto-injects its own generic `postcss-import` plugin ahead of any
// plugin not already named `postcss-import`, so it intercepts and tries to
// resolve `@import "tailwindcss";` as a literal file path before
// `@tailwindcss/postcss` (which handles that import itself) ever sees it.
// Registering a no-op plugin under that name first makes Vite skip its own
// injection, leaving the import for `@tailwindcss/postcss` to process.
const skipDefaultImportResolution = {
    postcssPlugin: 'postcss-import',
    Once() {},
};

export default {
    plugins: [skipDefaultImportResolution, tailwindcss()],
};
