(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ResumeModal.jsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_849667db._.js",
  "static/chunks/src_components_ResumeModal_jsx_fa2b2a12._.js",
  {
    "path": "static/chunks/node_modules_react-pdf_dist_Page_68a5a099._.css",
    "included": [
      "[project]/node_modules/react-pdf/dist/Page/AnnotationLayer.css [app-client] (css)",
      "[project]/node_modules/react-pdf/dist/Page/TextLayer.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_react-pdf_dist_Page_AnnotationLayer_css_bad6b30c._.single.css",
      "static/chunks/node_modules_react-pdf_dist_Page_TextLayer_css_bad6b30c._.single.css"
    ]
  },
  "static/chunks/src_components_ResumeModal_jsx_774f33e3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/ResumeModal.jsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);