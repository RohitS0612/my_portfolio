(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/config/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
const config = {
    profile: {
        name: "Rohit Shetake",
        title: "Full Stack Developer",
        description: "I build high-performance, visually stunning digital experiences. Specialized in React, Node.js, and pushing the boundaries of web UI.",
        avatar: "/assets/profile-removebg-preview.png"
    },
    navigation: [
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        // { name: "Gallery", href: "#gallery" },
        {
            name: "Resume",
            href: "#resume"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ],
    about: {
        title: "About Me",
        summary: [
            "I'm a passionate full-stack developer with expertise in building modern web applications. With a keen eye for design and a love for clean code, I create digital experiences that are both beautiful and functional."
        ],
        experience: [
            {
                role: "Associate Software Developer (Full Stack)",
                company: "Accucia Softwares pvt. ltd.",
                period: "March-2025 - November-2025",
                description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
                color: "blue-500"
            }
        ]
    },
    projects: [
        {
            title: "E-Recipe Book ",
            subtitle: "Recipe Finder App",
            value: "recipe",
            description: "🌍 Fetches meal data from TheMealDB API based on your search.📜 Displays the meal’s image, origin, and ingredients. 📖 Toggles between showing and hiding recipe instructions for a cleaner interface.",
            image: "/assets/project-1.png",
            tech: [
                "HTML",
                "CSS",
                "JavaScript",
                "API"
            ],
            color: "from-indigo-500 to-purple-500",
            bgGradient: "from-indigo-900 to-black",
            src: "https://github.com/RohitS0612/Recipe-Book",
            href: "https://rohits0612.github.io/Recipe-Book/"
        },
        {
            title: "Mac Os Portfolio",
            subtitle: "Mac OS Themed Portfolio",
            value: "macos",
            description: "A portfolio website inspired by the Mac OS interface, featuring a sleek design, interactive elements, and smooth animations to showcase projects and skills.",
            image: "/assets/project-2.png",
            tech: [
                "React",
                "Tailwind CSS",
                "JavaScript",
                "GSAP"
            ],
            color: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-900 to-black",
            src: "https://github.com/RohitS0612/MacOs_Portfolio.git",
            href: "https://mac-os-portfolio-plum.vercel.app/"
        },
        {
            title: "Bill Calculator Dashboard",
            subtitle: "Data Visualization Dashboard",
            value: "dashboard",
            description: "An interactive dashboard that visualizes billing data using charts and graphs, allowing users to analyze expenses and track financial performance over time.",
            image: "/assets/project-3.png",
            tech: [
                "Html",
                "CSS",
                "JavaScript",
                "Chart.js"
            ],
            color: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-900 to-black",
            src: "https://github.com/RohitS0612/Bill-Calculate-Task.git",
            href: "https://bill-calculate-task.vercel.app/"
        },
        {
            title: "Inventry Order Management System",
            subtitle: "Inventory Management App",
            value: "inventory",
            description: "A comprehensive inventory management system that helps businesses track stock levels, manage orders, and streamline operations with an intuitive user interface.",
            image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=60&w=800",
            tech: [
                "Java",
                "Jdbc",
                "MySQL",
                "Lombok",
                "Maven",
                "log4j"
            ],
            color: "from-rose-500 to-orange-500",
            bgGradient: "from-rose-900 to-black",
            src: "https://github.com/RohitS0612/Inventory_management.git"
        },
        {
            title: "Random Dog Gallery",
            subtitle: "Dog Image Fetcher",
            value: "doggallery",
            description: "An application that fetches and displays random dog images from the Dog CEO API, allowing users to explore different breeds and enjoy adorable dog pictures.",
            image: "/assets/project-4.png",
            tech: [
                "React",
                "CSS",
                "JavaScript",
                "API"
            ],
            color: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-900 to-black",
            src: "https://github.com/RohitS0612/Random-Dog-Photo.git",
            href: "https://random-dog-photo.vercel.app/"
        }
    ],
    skills: [
        {
            name: "React",
            level: 95
        },
        {
            name: "JavaScript",
            level: 90
        },
        {
            name: "TypeScript",
            level: 85
        },
        {
            name: "Node.js",
            level: 88
        },
        {
            name: "Python",
            level: 80
        },
        {
            name: "Tailwind CSS",
            level: 92
        },
        {
            name: "MongoDB",
            level: 85
        },
        {
            name: "JAVA",
            level: 95
        },
        {
            name: "SprigBoot",
            level: 85
        },
        {
            name: "Nest.js",
            level: 85
        },
        {
            name: "Express.js",
            level: 85
        }
    ],
    certifications: [
        {
            name: "Java FullStack Certified Developer",
            organization: "Giris techhub pune",
            year: "2024"
        }
    ],
    //   gallery: [
    //     { id: 1, src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400", x: 100, y: 100 },
    //     { id: 2, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400", x: 400, y: 150 },
    //     { id: 3, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400", x: 700, y: 100 },
    //     { id: 4, src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=400", x: 250, y: 350 },
    //     { id: 5, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", x: 550, y: 300 },
    //   ],
    contact: {
        message: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        socials: [
            {
                name: "GitHub",
                href: "https://github.com/RohitS0612",
                icon: "IconBrandGithub"
            },
            {
                name: "Twitter",
                href: "#",
                icon: "IconBrandTwitter"
            },
            {
                name: "Email",
                href: "mailto:shetakerohit6@gmail.com",
                icon: "IconMail"
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.mjs [app-client] (ecmascript) <export default as IconMenu2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Navbar = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        className: "fixed top-0 left-0 right-0 z-50 px-6 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "backdrop-blur-md bg-black/30 border border-white/10 rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-xl relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-bold text-xl",
                        children: "Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: "text-white/80 hover:text-white transition-colors",
                                children: item.name
                            }, item.name, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hidden sm:block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all",
                                children: "Hire Me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden text-white",
                                onClick: ()=>setIsOpen(!isOpen),
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMenu2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMenu2$3e$__["IconMenu2"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 44,
                                    columnNumber: 47
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            className: "absolute top-full left-0 right-0 mt-4 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            onClick: ()=>setIsOpen(false),
                                            className: "text-white/80 hover:text-white text-lg font-medium transition-colors",
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "sm:hidden px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-lg shadow-blue-500/30",
                                        children: "Hire Me"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MouseBlob.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MouseBlob",
    ()=>MouseBlob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const MouseBlob = ()=>{
    _s();
    const blobRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MouseBlob.useEffect": ()=>{
            const handleMouseMove = {
                "MouseBlob.useEffect.handleMouseMove": (e)=>{
                    if (blobRef.current) {
                        const { clientX, clientY } = e;
                        // Update position with hardware acceleration
                        blobRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
                    }
                }
            }["MouseBlob.useEffect.handleMouseMove"];
            // Listen on document to track across entire page
            document.addEventListener("mousemove", handleMouseMove);
            return ({
                "MouseBlob.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                }
            })["MouseBlob.useEffect"];
        }
    }["MouseBlob.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: blobRef,
                className: "fixed inset-0 w-[700px] h-[700px] rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.15) 40%, transparent 70%)",
                    filter: "blur(60px)",
                    transform: "translate3d(-100% ,-100%, 0)",
                    transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/MouseBlob.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/MouseBlob.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(MouseBlob, "PVGMkqItP38F2Tp99o5UmP7Fbs0=");
_c = MouseBlob;
var _c;
__turbopack_context__.k.register(_c, "MouseBlob");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/encrypted-text.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EncryptedText",
    ()=>EncryptedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";
const EncryptedText = ({ text, className, interval = 50 })=>{
    _s();
    const [outputText, setOutputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EncryptedText.useEffect": ()=>{
            setIsMounted(true);
        }
    }["EncryptedText.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EncryptedText.useEffect": ()=>{
            if (!isMounted) return;
            let timer;
            let iteration = 0;
            const animate = {
                "EncryptedText.useEffect.animate": ()=>{
                    setOutputText(text.split("").map({
                        "EncryptedText.useEffect.animate": (letter, index)=>{
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        }
                    }["EncryptedText.useEffect.animate"]).join(""));
                    if (iteration >= text.length) {
                        clearInterval(timer);
                    }
                    iteration += 1 / 3;
                }
            }["EncryptedText.useEffect.animate"];
            timer = setInterval(animate, interval);
            return ({
                "EncryptedText.useEffect": ()=>clearInterval(timer)
            })["EncryptedText.useEffect"];
        }
    }["EncryptedText.useEffect"], [
        text,
        interval,
        isMounted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono", className),
        children: outputText
    }, void 0, false, {
        fileName: "[project]/src/components/ui/encrypted-text.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EncryptedText, "u77ArLWxIkf4NFThFWmNFvtIDzY=");
_c = EncryptedText;
var _c;
__turbopack_context__.k.register(_c, "EncryptedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/pixelated-canvas.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PixelatedCanvas",
    ()=>PixelatedCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PixelatedCanvas = ({ src, width = 400, height = 500, cellSize = 3, dotScale = 0.9, shape = "square", backgroundColor = "#000000ad", grayscale = false, className, responsive = false, dropoutStrength = 0.4, interactive = true, distortionStrength = 3, distortionRadius = 80, distortionMode = "swirl", followSpeed = 0.2, sampleAverage = true, tintColor = "#FFFFFF", tintStrength = 0.2, maxFps = 60, objectFit = "cover", jitterStrength = 4, jitterSpeed = 4, fadeOnLeave = true, fadeSpeed = 0.1 })=>{
    _s();
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const samplesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef([]);
    const dimsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const targetMouseRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({
        x: -9999,
        y: -9999
    });
    const animMouseRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({
        x: -9999,
        y: -9999
    });
    const rafRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const lastFrameRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const pointerInsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const activityRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const activityTargetRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "PixelatedCanvas.useEffect": ()=>{
            let isCancelled = false;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = src;
            const compute = {
                "PixelatedCanvas.useEffect.compute": ()=>{
                    if (!canvas) return;
                    const dpr = ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio || 1 : "TURBOPACK unreachable";
                    const displayWidth = width ?? img.naturalWidth;
                    const displayHeight = height ?? img.naturalHeight;
                    canvas.width = Math.max(1, Math.floor(displayWidth * dpr));
                    canvas.height = Math.max(1, Math.floor(displayHeight * dpr));
                    canvas.style.width = `${displayWidth}px`;
                    canvas.style.height = `${displayHeight}px`;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return;
                    ctx.resetTransform();
                    ctx.scale(dpr, dpr);
                    if (backgroundColor) {
                        ctx.fillStyle = backgroundColor;
                        ctx.fillRect(0, 0, displayWidth, displayHeight);
                    } else {
                        ctx.clearRect(0, 0, displayWidth, displayHeight);
                    }
                    const offscreen = document.createElement("canvas");
                    offscreen.width = Math.max(1, Math.floor(displayWidth));
                    offscreen.height = Math.max(1, Math.floor(displayHeight));
                    const off = offscreen.getContext("2d");
                    if (!off) return;
                    const iw = img.naturalWidth || displayWidth;
                    const ih = img.naturalHeight || displayHeight;
                    let dw = displayWidth;
                    let dh = displayHeight;
                    let dx = 0;
                    let dy = 0;
                    if (objectFit === "cover") {
                        const scale = Math.max(displayWidth / iw, displayHeight / ih);
                        dw = Math.ceil(iw * scale);
                        dh = Math.ceil(ih * scale);
                        dx = Math.floor((displayWidth - dw) / 2);
                        dy = Math.floor((displayHeight - dh) / 2);
                    } else if (objectFit === "contain") {
                        const scale = Math.min(displayWidth / iw, displayHeight / ih);
                        dw = Math.ceil(iw * scale);
                        dh = Math.ceil(ih * scale);
                        dx = Math.floor((displayWidth - dw) / 2);
                        dy = Math.floor((displayHeight - dh) / 2);
                    } else if (objectFit === "fill") {
                        dw = displayWidth;
                        dh = displayHeight;
                    } else {
                        dw = iw;
                        dh = ih;
                        dx = Math.floor((displayWidth - dw) / 2);
                        dy = Math.floor((displayHeight - dh) / 2);
                    }
                    off.drawImage(img, dx, dy, dw, dh);
                    let imageData;
                    try {
                        imageData = off.getImageData(0, 0, offscreen.width, offscreen.height);
                    } catch  {
                        ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
                        return;
                    }
                    const data = imageData.data;
                    const stride = offscreen.width * 4;
                    const effectiveDotSize = Math.max(1, Math.floor(cellSize * dotScale));
                    dimsRef.current = {
                        width: displayWidth,
                        height: displayHeight,
                        dot: effectiveDotSize
                    };
                    const luminanceAt = {
                        "PixelatedCanvas.useEffect.compute.luminanceAt": (px, py)=>{
                            const ix = Math.max(0, Math.min(offscreen.width - 1, px));
                            const iy = Math.max(0, Math.min(offscreen.height - 1, py));
                            const i = iy * stride + ix * 4;
                            const rr = data[i];
                            const gg = data[i + 1];
                            const bb = data[i + 2];
                            return 0.2126 * rr + 0.7152 * gg + 0.0722 * bb;
                        }
                    }["PixelatedCanvas.useEffect.compute.luminanceAt"];
                    const hash2D = {
                        "PixelatedCanvas.useEffect.compute.hash2D": (ix, iy)=>{
                            const s = Math.sin(ix * 12.9898 + iy * 78.233) * 43758.5453123;
                            return s - Math.floor(s);
                        }
                    }["PixelatedCanvas.useEffect.compute.hash2D"];
                    const samples = [];
                    let tintRGB = null;
                    if (tintColor && tintStrength > 0) {
                        const parse = {
                            "PixelatedCanvas.useEffect.compute.parse": (c)=>{
                                if (c.startsWith("#")) {
                                    const hex = c.slice(1);
                                    if (hex.length === 3) {
                                        const r = parseInt(hex[0] + hex[0], 16);
                                        const g = parseInt(hex[1] + hex[1], 16);
                                        const b = parseInt(hex[2] + hex[2], 16);
                                        return [
                                            r,
                                            g,
                                            b
                                        ];
                                    }
                                    const r = parseInt(hex.slice(0, 2), 16);
                                    const g = parseInt(hex.slice(2, 4), 16);
                                    const b = parseInt(hex.slice(4, 6), 16);
                                    return [
                                        r,
                                        g,
                                        b
                                    ];
                                }
                                const m = c.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i);
                                if (m) return [
                                    parseInt(m[1], 10),
                                    parseInt(m[2], 10),
                                    parseInt(m[3], 10)
                                ];
                                return null;
                            }
                        }["PixelatedCanvas.useEffect.compute.parse"];
                        tintRGB = parse(tintColor);
                    }
                    for(let y = 0; y < offscreen.height; y += cellSize){
                        const cy = Math.min(offscreen.height - 1, y + Math.floor(cellSize / 2));
                        for(let x = 0; x < offscreen.width; x += cellSize){
                            const cx = Math.min(offscreen.width - 1, x + Math.floor(cellSize / 2));
                            let r = 0;
                            let g = 0;
                            let b = 0;
                            let a = 0;
                            if (!sampleAverage) {
                                const idx = cy * stride + cx * 4;
                                r = data[idx];
                                g = data[idx + 1];
                                b = data[idx + 2];
                                a = data[idx + 3] / 255;
                            } else {
                                let count = 0;
                                for(let oy = -1; oy <= 1; oy++){
                                    for(let ox = -1; ox <= 1; ox++){
                                        const sx = Math.max(0, Math.min(offscreen.width - 1, cx + ox));
                                        const sy = Math.max(0, Math.min(offscreen.height - 1, cy + oy));
                                        const sIdx = sy * stride + sx * 4;
                                        r += data[sIdx];
                                        g += data[sIdx + 1];
                                        b += data[sIdx + 2];
                                        a += data[sIdx + 3] / 255;
                                        count++;
                                    }
                                }
                                r = Math.round(r / count);
                                g = Math.round(g / count);
                                b = Math.round(b / count);
                                a = a / count;
                            }
                            if (grayscale) {
                                const L = Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b);
                                r = L;
                                g = L;
                                b = L;
                            } else if (tintRGB && tintStrength > 0) {
                                const k = Math.max(0, Math.min(1, tintStrength));
                                r = Math.round(r * (1 - k) + tintRGB[0] * k);
                                g = Math.round(g * (1 - k) + tintRGB[1] * k);
                                b = Math.round(b * (1 - k) + tintRGB[2] * k);
                            }
                            const Lc = luminanceAt(cx, cy);
                            const Lx1 = luminanceAt(cx - 1, cy);
                            const Lx2 = luminanceAt(cx + 1, cy);
                            const Ly1 = luminanceAt(cx, cy - 1);
                            const Ly2 = luminanceAt(cx, cy + 1);
                            const grad = Math.abs(Lx2 - Lx1) + Math.abs(Ly2 - Ly1) + Math.abs(Lc - (Lx1 + Lx2 + Ly1 + Ly2) / 4);
                            const gradientNorm = Math.max(0, Math.min(1, grad / 255));
                            const dropoutProb = Math.max(0, Math.min(1, (1 - gradientNorm) * dropoutStrength));
                            const drop = hash2D(cx, cy) < dropoutProb;
                            const seed = hash2D(cx, cy);
                            samples.push({
                                x,
                                y,
                                r,
                                g,
                                b,
                                a,
                                drop,
                                seed
                            });
                        }
                    }
                    samplesRef.current = samples;
                }
            }["PixelatedCanvas.useEffect.compute"];
            img.onload = ({
                "PixelatedCanvas.useEffect": ()=>{
                    if (isCancelled) return;
                    compute();
                    const canvasEl = canvasRef.current;
                    if (!canvasEl) return;
                    if (!interactive) {
                        const ctx = canvasEl.getContext("2d");
                        const dims = dimsRef.current;
                        const samples = samplesRef.current;
                        if (!ctx || !dims || !samples) return;
                        if (backgroundColor) {
                            ctx.fillStyle = backgroundColor;
                            ctx.fillRect(0, 0, dims.width, dims.height);
                        } else {
                            ctx.clearRect(0, 0, dims.width, dims.height);
                        }
                        for (const s of samples){
                            if (s.drop || s.a <= 0) continue;
                            ctx.globalAlpha = s.a;
                            ctx.fillStyle = `rgb(${s.r}, ${s.g}, ${s.b})`;
                            if (shape === "circle") {
                                const radius = dims.dot / 2;
                                ctx.beginPath();
                                ctx.arc(s.x + cellSize / 2, s.y + cellSize / 2, radius, 0, Math.PI * 2);
                                ctx.fill();
                            } else {
                                ctx.fillRect(s.x + cellSize / 2 - dims.dot / 2, s.y + cellSize / 2 - dims.dot / 2, dims.dot, dims.dot);
                            }
                        }
                        ctx.globalAlpha = 1;
                        return;
                    }
                    const onPointerMove = {
                        "PixelatedCanvas.useEffect.onPointerMove": (e)=>{
                            const rect = canvasEl.getBoundingClientRect();
                            targetMouseRef.current.x = e.clientX - rect.left;
                            targetMouseRef.current.y = e.clientY - rect.top;
                            pointerInsideRef.current = true;
                            activityTargetRef.current = 1;
                        }
                    }["PixelatedCanvas.useEffect.onPointerMove"];
                    const onPointerEnter = {
                        "PixelatedCanvas.useEffect.onPointerEnter": ()=>{
                            pointerInsideRef.current = true;
                            activityTargetRef.current = 1;
                        }
                    }["PixelatedCanvas.useEffect.onPointerEnter"];
                    const onPointerLeave = {
                        "PixelatedCanvas.useEffect.onPointerLeave": ()=>{
                            pointerInsideRef.current = false;
                            if (fadeOnLeave) {
                                activityTargetRef.current = 0;
                            } else {
                                targetMouseRef.current.x = -9999;
                                targetMouseRef.current.y = -9999;
                            }
                        }
                    }["PixelatedCanvas.useEffect.onPointerLeave"];
                    canvasEl.addEventListener("pointermove", onPointerMove);
                    canvasEl.addEventListener("pointerenter", onPointerEnter);
                    canvasEl.addEventListener("pointerleave", onPointerLeave);
                    const animate = {
                        "PixelatedCanvas.useEffect.animate": ()=>{
                            const now = performance.now();
                            const minDelta = 1000 / Math.max(1, maxFps);
                            if (now - lastFrameRef.current < minDelta) {
                                rafRef.current = requestAnimationFrame(animate);
                                return;
                            }
                            lastFrameRef.current = now;
                            const ctx = canvasEl.getContext("2d");
                            const dims = dimsRef.current;
                            const samples = samplesRef.current;
                            if (!ctx || !dims || !samples) {
                                rafRef.current = requestAnimationFrame(animate);
                                return;
                            }
                            animMouseRef.current.x = animMouseRef.current.x + (targetMouseRef.current.x - animMouseRef.current.x) * followSpeed;
                            animMouseRef.current.y = animMouseRef.current.y + (targetMouseRef.current.y - animMouseRef.current.y) * followSpeed;
                            if (fadeOnLeave) {
                                activityRef.current = activityRef.current + (activityTargetRef.current - activityRef.current) * fadeSpeed;
                            } else {
                                activityRef.current = pointerInsideRef.current ? 1 : 0;
                            }
                            if (backgroundColor) {
                                ctx.fillStyle = backgroundColor;
                                ctx.fillRect(0, 0, dims.width, dims.height);
                            } else {
                                ctx.clearRect(0, 0, dims.width, dims.height);
                            }
                            const mx = animMouseRef.current.x;
                            const my = animMouseRef.current.y;
                            const sigma = Math.max(1, distortionRadius * 0.5);
                            const t = now * 0.001 * jitterSpeed;
                            const activity = Math.max(0, Math.min(1, activityRef.current));
                            for (const s of samples){
                                if (s.drop || s.a <= 0) continue;
                                let drawX = s.x + cellSize / 2;
                                let drawY = s.y + cellSize / 2;
                                const dx = drawX - mx;
                                const dy = drawY - my;
                                const dist2 = dx * dx + dy * dy;
                                const sigma = Math.max(1, distortionRadius * 0.5);
                                const falloff = Math.exp(-dist2 / (2 * sigma * sigma));
                                const influence = falloff * activity;
                                if (influence > 0.0005) {
                                    const dist = Math.sqrt(dist2) + 0.0001;
                                    if (distortionMode === "repel") {
                                        drawX += dx / dist * distortionStrength * influence;
                                        drawY += dy / dist * distortionStrength * influence;
                                    } else if (distortionMode === "attract") {
                                        drawX -= dx / dist * distortionStrength * influence;
                                        drawY -= dy / dist * distortionStrength * influence;
                                    } else if (distortionMode === "swirl") {
                                        const angle = distortionStrength * 0.1 * influence; // Increased multiplier for more swirl
                                        const cosA = Math.cos(angle);
                                        const sinA = Math.sin(angle);
                                        drawX = mx + (cosA * dx - sinA * dy);
                                        drawY = my + (sinA * dx + cosA * dy);
                                    }
                                    if (jitterStrength > 0) {
                                        const k = s.seed * 100 + t;
                                        drawX += Math.sin(k) * jitterStrength * influence;
                                        drawY += Math.cos(k * 0.8) * jitterStrength * influence;
                                    }
                                }
                                ctx.globalAlpha = s.a;
                                ctx.fillStyle = `rgb(${s.r}, ${s.g}, ${s.b})`;
                                if (shape === "circle") {
                                    const radius = dims.dot / 2;
                                    ctx.beginPath();
                                    ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
                                    ctx.fill();
                                } else {
                                    ctx.fillRect(drawX - dims.dot / 2, drawY - dims.dot / 2, dims.dot, dims.dot);
                                }
                            }
                            ctx.globalAlpha = 1;
                            rafRef.current = requestAnimationFrame(animate);
                        }
                    }["PixelatedCanvas.useEffect.animate"];
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    rafRef.current = requestAnimationFrame(animate);
                    const cleanup = {
                        "PixelatedCanvas.useEffect.cleanup": ()=>{
                            canvasEl.removeEventListener("pointermove", onPointerMove);
                            canvasEl.removeEventListener("pointerenter", onPointerEnter);
                            canvasEl.removeEventListener("pointerleave", onPointerLeave);
                            if (rafRef.current) cancelAnimationFrame(rafRef.current);
                        }
                    }["PixelatedCanvas.useEffect.cleanup"];
                    img._cleanup = cleanup;
                }
            })["PixelatedCanvas.useEffect"];
            img.onerror = ({
                "PixelatedCanvas.useEffect": ()=>{
                    console.error("Failed to load image for PixelatedCanvas:", src);
                }
            })["PixelatedCanvas.useEffect"];
            if (responsive) {
                const onResize = {
                    "PixelatedCanvas.useEffect.onResize": ()=>{
                        if (img.complete && img.naturalWidth) {
                            compute();
                        }
                    }
                }["PixelatedCanvas.useEffect.onResize"];
                window.addEventListener("resize", onResize);
                return ({
                    "PixelatedCanvas.useEffect": ()=>{
                        isCancelled = true;
                        window.removeEventListener("resize", onResize);
                        if (img._cleanup) img._cleanup();
                    }
                })["PixelatedCanvas.useEffect"];
            }
            return ({
                "PixelatedCanvas.useEffect": ()=>{
                    isCancelled = true;
                    if (img._cleanup) img._cleanup();
                }
            })["PixelatedCanvas.useEffect"];
        }
    }["PixelatedCanvas.useEffect"], [
        src,
        width,
        height,
        cellSize,
        dotScale,
        shape,
        backgroundColor,
        grayscale,
        responsive,
        dropoutStrength,
        interactive,
        distortionStrength,
        distortionRadius,
        distortionMode,
        followSpeed,
        sampleAverage,
        tintColor,
        tintStrength,
        maxFps,
        objectFit,
        jitterStrength,
        jitterSpeed,
        fadeOnLeave,
        fadeSpeed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: className,
        "aria-label": "Pixelated rendering of source image",
        role: "img"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/pixelated-canvas.jsx",
        lineNumber: 479,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PixelatedCanvas, "HhjincP99k+NyFQlsTpi1cogoU0=");
_c = PixelatedCanvas;
var _c;
__turbopack_context__.k.register(_c, "PixelatedCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/floating-icons.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingIcons",
    ()=>FloatingIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandReact$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandReact$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandReact.mjs [app-client] (ecmascript) <export default as IconBrandReact>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandJavascript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandJavascript$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandJavascript.mjs [app-client] (ecmascript) <export default as IconBrandJavascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandTypescript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandTypescript$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTypescript.mjs [app-client] (ecmascript) <export default as IconBrandTypescript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandPython$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandPython$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandPython.mjs [app-client] (ecmascript) <export default as IconBrandPython>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandNodejs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandNodejs$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandNodejs.mjs [app-client] (ecmascript) <export default as IconBrandNodejs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandTailwind$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandTailwind$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTailwind.mjs [app-client] (ecmascript) <export default as IconBrandTailwind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandNextjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandNextjs$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandNextjs.mjs [app-client] (ecmascript) <export default as IconBrandNextjs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandCpp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandCpp$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandCpp.mjs [app-client] (ecmascript) <export default as IconBrandCpp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandDocker$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandDocker$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandDocker.mjs [app-client] (ecmascript) <export default as IconBrandDocker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandGithub$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGithub.mjs [app-client] (ecmascript) <export default as IconBrandGithub>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandDjango$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandDjango$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandDjango.mjs [app-client] (ecmascript) <export default as IconBrandDjango>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandSuperhuman$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandSuperhuman$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandSuperhuman.mjs [app-client] (ecmascript) <export default as IconBrandSuperhuman>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const brandIcons = [
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandReact$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandReact$3e$__["IconBrandReact"],
        color: "#61DAFB"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandJavascript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandJavascript$3e$__["IconBrandJavascript"],
        color: "#F7DF1E"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandTypescript$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandTypescript$3e$__["IconBrandTypescript"],
        color: "#3178C6"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandPython$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandPython$3e$__["IconBrandPython"],
        color: "#3776AB"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandNodejs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandNodejs$3e$__["IconBrandNodejs"],
        color: "#339933"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandTailwind$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandTailwind$3e$__["IconBrandTailwind"],
        color: "#06B6D4"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandNextjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandNextjs$3e$__["IconBrandNextjs"],
        color: "#FFFFFF"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandCpp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandCpp$3e$__["IconBrandCpp"],
        color: "#00599C"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandDocker$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandDocker$3e$__["IconBrandDocker"],
        color: "#2496ED"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandGithub$3e$__["IconBrandGithub"],
        color: "#FFFFFF"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandDjango$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandDjango$3e$__["IconBrandDjango"],
        color: "#00ff2aff"
    },
    {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandSuperhuman$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandSuperhuman$3e$__["IconBrandSuperhuman"],
        color: "#ff0000ff"
    }
];
const FloatingIcon = ({ Icon, color, delay, duration, x1, y1, x2, y2, x3, y3 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            left: x1,
            top: y1,
            opacity: 0
        },
        animate: {
            left: [
                x1,
                x2,
                x3,
                x1
            ],
            top: [
                y1,
                y2,
                y3,
                y1
            ],
            opacity: [
                0.1,
                0.4,
                0.7,
                0.4,
                0.1
            ]
        },
        transition: {
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        },
        style: {
            color: color
        },
        className: "absolute pointer-events-none select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] will-change-[left,top]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[24px] md:text-[40px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: "1em",
                stroke: 1.5
            }, void 0, false, {
                fileName: "[project]/src/components/ui/floating-icons.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/floating-icons.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/floating-icons.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FloatingIcon;
const FloatingIcons = ({ count = 20 })=>{
    _s();
    const generatedIcons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingIcons.useMemo[generatedIcons]": ()=>{
            return Array.from({
                length: count
            }).map({
                "FloatingIcons.useMemo[generatedIcons]": (_, i)=>{
                    const iconData = brandIcons[i % brandIcons.length];
                    return {
                        id: i,
                        Icon: iconData.Icon,
                        color: iconData.color,
                        delay: Math.random() * 5,
                        duration: 25 + Math.random() * 20,
                        x1: Math.random() * 100 + "%",
                        y1: Math.random() * 100 + "%",
                        x2: Math.random() * 100 + "%",
                        y2: Math.random() * 100 + "%",
                        x3: Math.random() * 100 + "%",
                        y3: Math.random() * 100 + "%"
                    };
                }
            }["FloatingIcons.useMemo[generatedIcons]"]);
        }
    }["FloatingIcons.useMemo[generatedIcons]"], [
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0",
        children: generatedIcons.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingIcon, {
                ...item
            }, item.id, false, {
                fileName: "[project]/src/components/ui/floating-icons.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/floating-icons.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FloatingIcons, "cEviES9dkQWvwtjvTg6v4zqQglA=");
_c1 = FloatingIcons;
var _c, _c1;
__turbopack_context__.k.register(_c, "FloatingIcon");
__turbopack_context__.k.register(_c1, "FloatingIcons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/encrypted-text.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pixelated$2d$canvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/pixelated-canvas.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$floating$2d$icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/floating-icons.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.js [app-client] (ecmascript)");
;
;
;
;
;
;
const Hero = ()=>{
    const { profile } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "home",
        className: "relative min-h-[80vh] md:min-h-screen w-full bg-black overflow-hidden flex items-center py-12 md:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$floating$2d$icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingIcons"], {
                count: 15
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full mt-10 max-w-7xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-center md:text-left flex flex-col items-center md:items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$encrypted$2d$text$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedText"], {
                                    text: "DEVELOPER PORTFOLIO",
                                    className: "text-xl md:text-3xl font-bold text-white uppercase tracking-tighter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.jsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
                                    children: profile.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 text-lg md:text-3xl font-medium",
                                    children: profile.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl",
                                    children: profile.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.jsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-4 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#projects",
                                            className: "flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center",
                                            children: "View Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 border border-white/20 rounded-full text-white text-sm md:text-base font-bold hover:bg-white/5 transition-all text-center",
                                            children: "Contact Me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Hero.jsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mt-10 hidden md:flex items-center justify-center lg:justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-[4/5] max-w-[500px] bg-transparent rounded-3xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pixelated$2d$canvas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PixelatedCanvas"], {
                                        src: profile.avatar,
                                        width: 500,
                                        height: 500,
                                        cellSize: 3,
                                        dotScale: 0.9,
                                        shape: "square",
                                        dropoutStrength: 0.1,
                                        backgroundColor: "",
                                        className: "relative z-10",
                                        responsive: true,
                                        distortionStrength: 15,
                                        distortionRadius: 50,
                                        distortionMode: "repel",
                                        followSpeed: 0.3,
                                        jitterStrength: 10,
                                        maxFps: 30
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/background-lines.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundLines",
    ()=>BackgroundLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const BackgroundLines = ({ children, className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute w-full h-full",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "grid",
                                    width: "40",
                                    height: "40",
                                    patternUnits: "userSpaceOnUse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 40 0 L 0 0 0 40",
                                        fill: "none",
                                        stroke: "rgba(255,255,255,0.05)",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/background-lines.jsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/background-lines.jsx",
                                    lineNumber: 10,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/background-lines.jsx",
                                lineNumber: 9,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "url(#grid)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/background-lines.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/background-lines.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        ...Array(10)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent",
                            style: {
                                top: `${i * 5}%`,
                                left: "-100%",
                                width: "200%",
                                transform: `rotate(-15deg)`,
                                animation: `slideRight ${10 + i * 0.5}s linear infinite`,
                                animationDelay: `${i * 0.2}s`
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/ui/background-lines.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/background-lines.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes slideRight {
          0% {
            transform: translateX(-50%) rotate(-15deg);
          }
          100% {
            transform: translateX(50%) rotate(-15deg);
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/background-lines.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/background-lines.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BackgroundLines;
var _c;
__turbopack_context__.k.register(_c, "BackgroundLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/About.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$lines$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/background-lines.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.js [app-client] (ecmascript)");
;
;
;
;
;
const About = ()=>{
    const { about } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "about",
        className: "relative w-full bg-black py-10 md:py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$background$2d$lines$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundLines"], {
                className: "w-full h-full absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/About.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "text-center mb-6 md:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl font-bold text-white mb-4",
                                    children: about.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    className: "flex justify-center md:justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full max-w-md h-[300px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].profile.avatar,
                                                alt: "About Me",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.jsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.jsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.jsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    className: "space-y-6",
                                    children: [
                                        about.summary.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-lg leading-relaxed",
                                                children: paragraph
                                            }, index, false, {
                                                fileName: "[project]/src/components/About.jsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-white",
                                                    children: "Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.jsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: about.experience.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `border-l-2 border-${exp.color} pl-4`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xl font-semibold text-white",
                                                                    children: exp.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/About.jsx",
                                                                    lineNumber: 63,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400",
                                                                    children: [
                                                                        exp.company,
                                                                        " • ",
                                                                        exp.period
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/About.jsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-300 mt-2",
                                                                    children: exp.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/About.jsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/components/About.jsx",
                                                            lineNumber: 62,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/About.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/About.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/About.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tabs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeInDiv",
    ()=>FadeInDiv,
    "Tabs",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Tabs = ({ tabs: propTabs, containerClassName, activeTabClassName, tabClassName, contentClassName })=>{
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(propTabs[0]);
    const [tabs, setTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(propTabs);
    const moveSelectedTabToTop = (idx)=>{
        const newTabs = [
            ...propTabs
        ];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center justify-center [perspective:1000px] relative max-w-full w-full gap-2 sm:gap-4", containerClassName),
                children: propTabs.map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            moveSelectedTabToTop(idx);
                        },
                        onMouseEnter: ()=>setHovering(true),
                        onMouseLeave: ()=>setHovering(false),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-4 sm:px-6 py-2 rounded-full transition-colors", tabClassName),
                        style: {
                            transformStyle: "preserve-3d"
                        },
                        children: [
                            active.value === tab.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layoutId: "clickedbutton",
                                transition: {
                                    type: "spring",
                                    bounce: 0.3,
                                    duration: 0.6
                                },
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-zinc-800 rounded-full border border-white/10", activeTabClassName)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/tabs.jsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative block text-sm md:text-base font-medium transition-colors duration-200", active.value === tab.value ? "text-white" : "text-zinc-400 hover:text-white"),
                                children: tab.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/tabs.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, tab.title, true, {
                        fileName: "[project]/src/components/ui/tabs.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/tabs.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[600px] sm:h-[450px] md:h-[450px] mt-8 md:mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                    tabs: tabs,
                    active: active,
                    hovering: hovering,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", contentClassName)
                }, active.value, false, {
                    fileName: "[project]/src/components/ui/tabs.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/tabs.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Tabs, "XrjJrqEGwkbQwi7kA2ABxh0hv5U=");
_c = Tabs;
const FadeInDiv = ({ className, tabs, hovering })=>{
    const isActive = (tab)=>{
        return tab.value === tabs[0].value;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: tabs.map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: tab.value,
                style: {
                    scale: 1 - idx * 0.1,
                    top: hovering ? idx * -50 : 0,
                    zIndex: -idx,
                    opacity: idx < 3 ? 1 - idx * 0.1 : 0
                },
                animate: {
                    y: isActive(tab) ? [
                        0,
                        40,
                        0
                    ] : 0
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full absolute top-0 left-0", className),
                children: tab.content
            }, tab.value, false, {
                fileName: "[project]/src/components/ui/tabs.jsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = FadeInDiv;
var _c, _c1;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "FadeInDiv");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Projects.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.js [app-client] (ecmascript)");
;
;
;
;
;
const ProjectContent = ({ title, description, image, tech, color, src, href })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid md:grid-cols-2 gap-6 items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -inset-1 bg-gradient-to-r ${color} rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: title,
                        className: "relative rounded-xl object-cover w-full h-[180px] sm:h-[220px] md:h-[240px] shadow-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full justify-between py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base text-zinc-300 font-normal leading-relaxed",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium text-zinc-400",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/components/Projects.jsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex items-center gap-4",
                        children: [
                            href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r ${color} rounded-full text-white font-bold hover:shadow-lg transition-all text-xs sm:text-sm md:text-base inline-flex items-center justify-center`,
                                children: "Launch Project"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: src,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "px-4 md:px-8 py-2 md:py-3 bg-zinc-900 border border-white/10 rounded-full text-white font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm md:text-base inline-flex items-center justify-center",
                                children: "Source Code"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.jsx",
                                lineNumber: 58,
                                columnNumber: 3
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Projects.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProjectContent;
const Projects = ()=>{
    const tabs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].projects.map((project)=>({
            title: project.title,
            value: project.value,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-8 text-lg md:text-2xl font-bold text-white bg-gradient-to-br ${project.bgGradient} border border-white/10 shadow-2xl`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 md:mb-3",
                        children: project.subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContent, {
                        title: project.title,
                        description: project.description,
                        image: project.image,
                        tech: project.tech,
                        color: project.color,
                        src: project.src,
                        href: project.href
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "projects",
        className: "relative min-h-screen bg-black py-8 md:py-4 flex flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "text-center mb-10 md:mb-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-7xl font-bold text-white tracking-tight",
                        children: "Featured Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    tabs: tabs
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Projects.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Projects.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Projects;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectContent");
__turbopack_context__.k.register(_c1, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/3d-pin.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinContainer",
    ()=>PinContainer,
    "PinPerspective",
    ()=>PinPerspective
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PinContainer = ({ children, title, href, className, containerClassName, onClick })=>{
    _s();
    const [transform, setTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("translate(-50%,-50%) rotateX(0deg)");
    const onMouseEnter = ()=>{
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };
    const onMouseLeave = ()=>{
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative group/pin z-50 cursor-pointer", containerClassName),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)"
                },
                className: "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        transform: transform
                    },
                    className: "absolute left-1/2 p-3 sm:p-4 top-1/2 flex justify-start items-start rounded-xl sm:rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50", className),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/3d-pin.jsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/3d-pin.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/3d-pin.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PinPerspective, {
                title: title,
                href: href
            }, void 0, false, {
                fileName: "[project]/src/components/ui/3d-pin.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/3d-pin.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PinContainer, "o9W5A1lfy4goHwEjTwH9zgOmf+E=");
_c = PinContainer;
const PinPerspective = ({ title, href })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pointer-events-none w-72 h-64 sm:w-96 sm:h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full -mt-7 flex-none inset-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 inset-x-0 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-3 sm:px-4 ring-1 ring-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-20 text-white text-[10px] sm:text-xs font-bold inline-block py-0.5",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/3d-pin.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/3d-pin.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        perspective: "1000px",
                        transform: "rotateX(70deg) translateZ(0)"
                    },
                    className: "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0,
                                    x: "-50%",
                                    y: "-50%"
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.5,
                                        0
                                    ],
                                    scale: 1,
                                    z: 0
                                },
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: 0
                                },
                                className: "absolute left-1/2 top-1/2 h-32 w-32 sm:h-[11.25rem] sm:w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0,
                                    x: "-50%",
                                    y: "-50%"
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.5,
                                        0
                                    ],
                                    scale: 1,
                                    z: 0
                                },
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: 2
                                },
                                className: "absolute left-1/2 top-1/2 h-32 w-32 sm:h-[11.25rem] sm:w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0,
                                    x: "-50%",
                                    y: "-50%"
                                },
                                animate: {
                                    opacity: [
                                        0,
                                        1,
                                        0.5,
                                        0
                                    ],
                                    scale: 1,
                                    z: 0
                                },
                                transition: {
                                    duration: 6,
                                    repeat: Infinity,
                                    delay: 4
                                },
                                className: "absolute left-1/2 top-1/2 h-32 w-32 sm:h-[11.25rem] sm:w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/3d-pin.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/3d-pin.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-16 sm:h-20 group-hover/pin:h-32 sm:group-hover/pin:h-40 blur-[2px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-16 sm:h-20 group-hover/pin:h-32 sm:group-hover/pin:h-40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/3d-pin.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/3d-pin.jsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/3d-pin.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = PinPerspective;
var _c, _c1;
__turbopack_context__.k.register(_c, "PinContainer");
__turbopack_context__.k.register(_c1, "PinPerspective");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Resume.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Resume",
    ()=>Resume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs [app-client] (ecmascript) <export default as IconEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$3d$2d$pin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/3d-pin.jsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ResumeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ResumeModal.jsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.ResumeModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ResumeModal.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ResumeModal;
const Resume = ()=>{
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "resume",
        className: "relative min-h-screen w-full bg-black flex items-center justify-center py-12 md:py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Resume.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Resume.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Resume.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-white/10 rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-12 backdrop-blur-sm bg-white/5 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "text-center mb-6 md:mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4",
                                    children: "Skills & Resume"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume.jsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm sm:text-base md:text-lg px-2",
                                    children: "My technical expertise and professional background"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume.jsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Resume.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 md:mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    className: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8",
                                    children: "Technical Skills"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"].skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: index * 0.1
                                            },
                                            whileHover: {
                                                scale: 1.05,
                                                transition: {
                                                    duration: 0.2
                                                }
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            className: "group relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-white/20 active:border-white/30 transition-all duration-300 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Resume.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mb-2 md:mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-white font-bold text-sm sm:text-base md:text-lg",
                                                                        children: skill.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Resume.jsx",
                                                                        lineNumber: 67,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-blue-400 font-bold text-xs sm:text-sm md:text-base",
                                                                        children: [
                                                                            skill.level,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Resume.jsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Resume.jsx",
                                                                lineNumber: 66,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 md:h-2.5 bg-gray-800/80 rounded-full overflow-hidden relative",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    whileInView: {
                                                                        width: `${skill.level}%`
                                                                    },
                                                                    transition: {
                                                                        duration: 1.2,
                                                                        delay: index * 0.1,
                                                                        ease: "easeOut"
                                                                    },
                                                                    className: "h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                                                        animate: {
                                                                            x: [
                                                                                '-100%',
                                                                                '100%'
                                                                            ]
                                                                        },
                                                                        transition: {
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            repeatDelay: 1,
                                                                            ease: "easeInOut"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Resume.jsx",
                                                                        lineNumber: 80,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Resume.jsx",
                                                                    lineNumber: 73,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Resume.jsx",
                                                                lineNumber: 72,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Resume.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Resume.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Resume.jsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, skill.name, false, {
                                            fileName: "[project]/src/components/Resume.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Resume.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "border-t border-white/10 pt-6 md:pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.6
                                    },
                                    className: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8 text-center",
                                    children: "Professional Resume"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center w-full min-h-[350px] sm:min-h-[400px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$3d$2d$pin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinContainer"], {
                                        title: "Resume View",
                                        onClick: ()=>setIsModalOpen(true),
                                        containerClassName: "w-full max-w-[90vw] sm:max-w-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex basis-full flex-col p-3 sm:p-4 tracking-tight text-slate-100/50 w-full sm:w-[18rem] md:w-[20rem] h-[16rem] sm:h-[18rem] md:h-[20rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100",
                                                    children: "View My Resume"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Resume.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-base !m-0 !p-0 font-normal",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: "Check out my detailed experience and professional certifications."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Resume.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Resume.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-1 w-full rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 items-center justify-center group-hover:shadow-2xl transition-all duration-500 overflow-hidden relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Resume.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__["IconEye"], {
                                                            className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Resume.jsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Resume.jsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Resume.jsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Resume.jsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Resume.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Resume.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Resume.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResumeModal, {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Resume.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Resume.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Resume, "mLsII5HRP5G63IA/8vjZ5YHXWr8=");
_c1 = Resume;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResumeModal");
__turbopack_context__.k.register(_c1, "Resume");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/globe.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>Globe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cobe/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Globe = ({ className })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            let phi = 0;
            if (!canvasRef.current) return;
            const globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(canvasRef.current, {
                devicePixelRatio: 1,
                width: 500 * 1,
                height: 500 * 1,
                phi: 0,
                theta: 0,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 8000,
                mapBrightness: 6,
                baseColor: [
                    0.3,
                    0.3,
                    0.3
                ],
                markerColor: [
                    0.1,
                    0.8,
                    1
                ],
                glowColor: [
                    1,
                    1,
                    1
                ],
                markers: [
                    // longitude latitude
                    {
                        location: [
                            37.7595,
                            -122.4367
                        ],
                        size: 0.03
                    },
                    {
                        location: [
                            40.7128,
                            -74.006
                        ],
                        size: 0.1
                    }
                ],
                onRender: {
                    "Globe.useEffect.globe": (state)=>{
                        // Called on every animation frame.
                        // `state` will be an empty object, return updated params.
                        state.phi = phi;
                        phi += 0.01;
                    }
                }["Globe.useEffect.globe"]
            });
            return ({
                "Globe.useEffect": ()=>{
                    globe.destroy();
                }
            })["Globe.useEffect"];
        }
    }["Globe.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            width: 600,
            height: 600,
            maxWidth: "100%",
            aspectRatio: 1
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/globe.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Globe, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Globe;
var _c;
__turbopack_context__.k.register(_c, "Globe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$globe$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/globe.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandGithub$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGithub.mjs [app-client] (ecmascript) <export default as IconBrandGithub>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandTwitter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandTwitter$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTwitter.mjs [app-client] (ecmascript) <export default as IconBrandTwitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMail.mjs [app-client] (ecmascript) <export default as IconMail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/config.js [app-client] (ecmascript)");
;
;
;
;
;
const IconMap = {
    IconBrandGithub: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandGithub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandGithub$3e$__["IconBrandGithub"],
    IconBrandTwitter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrandTwitter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrandTwitter$3e$__["IconBrandTwitter"],
    IconMail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__["IconMail"]
};
const Contact = ()=>{
    const { contact } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "contact",
        className: "relative w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center bg-black overflow-hidden py-12 md:py-4 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$globe$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe"], {
                    className: "opacity-60"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 18,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center max-w-2xl px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",
                        children: "Get in touch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-400 mt-4 max-w-lg mx-auto text-lg",
                        children: contact.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-8 mt-12",
                        children: contact.socials.map((social, index)=>{
                            const Icon = IconMap[social.icon];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: social.href,
                                className: "p-4 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors border border-neutral-800",
                                children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-6 w-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 38,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/components/Contact.jsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contact.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Contact.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/custom-cursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CustomCursor = ()=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    // Smooth springs for the outer ring
    const springConfig = {
        damping: 25,
        stiffness: 150
    };
    const ringX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, springConfig);
    const ringY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const handleMouseMove = {
                "CustomCursor.useEffect.handleMouseMove": (e)=>{
                    mouseX.set(e.clientX);
                    mouseY.set(e.clientY);
                }
            }["CustomCursor.useEffect.handleMouseMove"];
            const handleMouseOver = {
                "CustomCursor.useEffect.handleMouseOver": (e)=>{
                    const target = e.target;
                    if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("button") || target.closest("a") || target.classList.contains("cursor-pointer")) {
                        setIsHovered(true);
                    } else {
                        setIsHovered(false);
                    }
                }
            }["CustomCursor.useEffect.handleMouseOver"];
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseover", handleMouseOver);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseover", handleMouseOver);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        mouseX,
        mouseY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          * {
            cursor: none !important;
          }
        `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/custom-cursor.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference",
                style: {
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%"
                },
                animate: {
                    scale: isHovered ? 1.5 : 1,
                    opacity: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/custom-cursor.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference",
                style: {
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%"
                },
                animate: {
                    scale: isHovered ? 0.5 : 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/custom-cursor.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CustomCursor, "5kELqLqdOET/QIiLvNohLTS1/kY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Loader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 80 80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: 32,
                            cy: 40,
                            cx: 40,
                            id: "test"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Loader.jsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Loader.jsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loader.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader triangle",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 86 80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "43 8 79 72 7 72"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Loader.jsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Loader.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loader.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 80 80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            height: 64,
                            width: 64,
                            y: 8,
                            x: 8
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Loader.jsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Loader.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Loader.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Loader.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Loader.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loader;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Loader__StyledWrapper",
    componentId: "sc-2cd42415-0"
})`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  z-index: 9999;

  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    --path: #2f3545;
    --dot: #5628ee;
    --duration: 3s;
    width: 44px;
    height: 44px;
    position: relative;
    display: inline-block;
    margin: 0 16px;
  }

  .loader:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--dot);
    top: 37px;
    left: 19px;
    transform: translate(-18px, -18px);
    animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .loader svg rect,
  .loader svg polygon,
  .loader svg circle {
    fill: none;
    stroke: var(--path);
    stroke-width: 10px;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .loader svg polygon {
    stroke-dasharray: 145 76 145 76;
    stroke-dashoffset: 0;
    animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader svg rect {
    stroke-dasharray: 192 64 192 64;
    stroke-dashoffset: 0;
    animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }

  .loader svg circle {
    stroke-dasharray: 150 50 150 50;
    stroke-dashoffset: 75;
    animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader.triangle {
    width: 48px;
  }

  .loader.triangle:before {
    left: 21px;
    transform: translate(-10px, -18px);
    animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }

    66% {
      stroke-dashoffset: 147;
    }

    100% {
      stroke-dashoffset: 221;
    }
  }

  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }

    66% {
      transform: translate(10px, -18px);
    }

    100% {
      transform: translate(-10px, -18px);
    }
  }

  @keyframes pathRect {
    25% {
      stroke-dashoffset: 64;
    }

    50% {
      stroke-dashoffset: 128;
    }

    75% {
      stroke-dashoffset: 192;
    }

    100% {
      stroke-dashoffset: 256;
    }
  }

  @keyframes dotRect {
    25% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(18px, -18px);
    }

    75% {
      transform: translate(0, -36px);
    }

    100% {
      transform: translate(-18px, -18px);
    }
  }

  @keyframes pathCircle {
    25% {
      stroke-dashoffset: 125;
    }

    50% {
      stroke-dashoffset: 175;
    }

    75% {
      stroke-dashoffset: 225;
    }

    100% {
      stroke-dashoffset: 275;
    }
  }
`;
_c1 = StyledWrapper;
const __TURBOPACK__default__export__ = Loader;
var _c, _c1;
__turbopack_context__.k.register(_c, "Loader");
__turbopack_context__.k.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MouseBlob$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MouseBlob.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/About.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Projects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Resume$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Resume.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Contact.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$cursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/custom-cursor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Loader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Simulate loading time
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Home.useEffect.timer"], 2000);
            // Smooth scroll behavior
            document.documentElement.style.scrollBehavior = "smooth";
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Home.jsx",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-black antialiased relative overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$custom$2d$cursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomCursor"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MouseBlob$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MouseBlob"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["About"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Resume$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resume"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Contact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                fileName: "[project]/src/components/Home.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Home, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f9bcd236._.js.map