(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/web-developer-assignment-Public/front/constants/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PAGE_LIMIT",
    ()=>DEFAULT_PAGE_LIMIT
]);
const DEFAULT_PAGE_LIMIT = 4;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/constants/query-keys.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMutationKey",
    ()=>EMutationKey,
    "EQueryKey",
    ()=>EQueryKey
]);
var EQueryKey = /*#__PURE__*/ function(EQueryKey) {
    EQueryKey["users"] = "users";
    EQueryKey["posts"] = "posts";
    EQueryKey["user_count"] = "user count";
    return EQueryKey;
}({});
var EMutationKey = /*#__PURE__*/ function(EMutationKey) {
    EMutationKey["create_post"] = "create post";
    EMutationKey["delete_post"] = "delete post";
    return EMutationKey;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Create an Axios instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'https://web-developer-assignment-public-production.up.railway.app/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
api.interceptors.response.use((response)=>response, (err)=>{
    if (err.response?.data?.error) {
        err.message = err.response.data.error;
    }
    return Promise.reject(err);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/services/users/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchUsersAPI",
    ()=>fetchUsersAPI,
    "fetchUsersCountAPI",
    ()=>fetchUsersCountAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/services/api.ts [app-client] (ecmascript)");
;
const fetchUsersAPI = async (params)=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users`, {
        params
    });
    return data;
};
const fetchUsersCountAPI = async ()=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/count`);
    return data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center space-x-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-3 h-3 rounded-full bg-tertiary animate-bounce [animation-delay:-0.3s]"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4 h-4 rounded-full bg-tertiary animate-bounce [animation-delay:-0.15s]"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 rounded-full bg-tertiary animate-bounce"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/constants/color.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Colors",
    ()=>Colors
]);
const Colors = {
    dark: {
        300: '#0206184d',
        500: '#020618',
        600: '#0f172b'
    },
    gray: {
        500: '#e2e8f0',
        600: '#62748e'
    },
    blue: {
        500: '#155dfc'
    },
    danger: {
        500: '#F9566A'
    },
    tertiary: '#bdb2c7'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatUserAddress",
    ()=>formatUserAddress,
    "getPagination",
    ()=>getPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
const cn = (...inputs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
};
const getPagination = (currentPage, totalPages)=>{
    const pages = [];
    // Small page counts: show everything
    if (totalPages <= 7) {
        for(let i = 1; i <= totalPages; i++)pages.push(i);
        return pages;
    }
    // Always show first page
    pages.push(1);
    // Decide where the "last three" window starts
    const lastWindowStart = totalPages - 2;
    // CASE 1: we're before the last window
    if (currentPage < lastWindowStart - 1) {
        // show current page window (current ± 1), but not beyond lastWindowStart - 1
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(lastWindowStart - 1, currentPage + 1);
        for(let i = start; i <= end; i++)pages.push(i);
        // only show ellipsis if there is a gap before last 3 pages
        if (end < lastWindowStart - 1) {
            pages.push('...');
        }
        // always show the last three pages
        for(let i = lastWindowStart; i <= totalPages; i++){
            pages.push(i);
        }
        return pages;
    }
    // CASE 2: we're inside or after the last window -> just show last 4 + possible ellipsis
    // If there are pages between 1 and lastWindowStart, show ellipsis
    if (lastWindowStart > 2) {
        pages.push('...');
    }
    for(let i = lastWindowStart; i <= totalPages; i++){
        pages.push(i);
    }
    return pages;
};
const formatUserAddress = (user)=>{
    if (!user) return '';
    return `${user.street}, ${user.state}, ${user.city}, ${user.zipcode}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icons",
    ()=>Icons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/constants/color.ts [app-client] (ecmascript)");
;
;
const Icons = {
    addCircle: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4zm1 5a9.873 9.873 0 0 1-3.9-.775 10.274 10.274 0 0 1-3.175-2.15c-.9-.9-1.617-1.958-2.15-3.175A9.873 9.873 0 0 1 2 12c0-1.383.258-2.683.775-3.9a10.275 10.275 0 0 1 2.15-3.175c.9-.9 1.958-1.608 3.175-2.125A9.607 9.607 0 0 1 12 2c1.383 0 2.683.267 3.9.8a9.927 9.927 0 0 1 3.175 2.125c.9.9 1.608 1.958 2.125 3.175.533 1.217.8 2.517.8 3.9a9.607 9.607 0 0 1-.8 3.9 9.927 9.927 0 0 1-2.125 3.175c-.9.9-1.958 1.617-3.175 2.15A9.873 9.873 0 0 1 12 22zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20z",
                fill: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[600]
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    delete: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 3h9M9.5 3v7c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1V3M4 3V2c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v1M5 5.5v3M7 5.5v3",
                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].danger[500],
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    crumbSeperator: ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.25 10.5 8.75 7l-3.5-3.5",
                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].gray[600],
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
            lineNumber: 42,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    chevronRight: ({ className, color, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m6 12 4-4-4-4",
                stroke: color || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[500],
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    chevronLeft: ({ className, color, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 4 6 8l4 4",
                stroke: color || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[500],
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx",
            lineNumber: 78,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/constants/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/components/icons/index.tsx [app-client] (ecmascript)");
;
;
;
;
const Pagination = ({ currentPage, totalPages, onPageChange })=>{
    const pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPagination"])(currentPage, totalPages);
    if (!totalPages || totalPages === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center sm:justify-end gap-2 sm:gap-6 text-dark-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onPageChange(Math.max(1, currentPage - 1)),
                disabled: currentPage === 1,
                className: "py-[12px] px-1 sm:px-[10px] flex items-center gap-1 text-dark-500 text-sm cursor-pointer disabled:cursor-not-allowed disabled:text-dark-300 text-[11px] sm:text-sm font-medium leading-[1.43]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].chevronLeft, {
                        color: currentPage === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[300] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[500]
                    }, void 0, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center gap-[2px] overflow-auto whitespace-nowrap no-scrollbar'),
                children: pagination.map((page, index)=>page === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mb-2 py-[6px] px-2 sm:px-[15.5px] text-[11px] sm:text-sm font-medium cursor-default select-none",
                        "aria-label": "More pages",
                        children: "..."
                    }, index, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onPageChange(Number(page)),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`flex items-center justify-center py-[6px] px-2 sm:px-[15.5px] cursor-pointer text-[11px] sm:text-sm font-medium leading-[1.43]`, {
                            'bg-white border border-gray-500 rounded-[6px]': Number(page) === currentPage
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-center",
                            children: page
                        }, void 0, false, {
                            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onPageChange(Math.min(totalPages, currentPage + 1)),
                disabled: currentPage === totalPages,
                className: "py-[12px] px-1 sm:px-[10px] flex items-center gap-1 text-dark-500 text-[11px] sm:text-sm cursor-pointer disabled:cursor-not-allowed disabled:text-dark-300 text-sm font-medium leading-[1.43]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].chevronRight, {
                        color: currentPage === totalPages ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[300] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Colors"].dark[500]
                    }, void 0, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/utils/index.ts [app-client] (ecmascript)");
;
;
;
function Table({ tableData, fields, builder, onRowClick, isLoading = false, columns, rows, noDataMessage = 'No records found to display' }) {
    const numberOfColumns = columns || fields.length;
    const numberOfRows = tableData.length > 0 ? rows || tableData.length : 0;
    const columnElements = [];
    for(let i = 0; i < numberOfRows; i += 1){
        const data = tableData[i];
        const rowElements = [];
        for(let j = 0; j < numberOfColumns; j += 1){
            const field = fields[j];
            rowElements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "whitespace-nowrap p-3",
                children: builder(field, data, i, j)
            }, j, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this));
        }
        columnElements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: "text-sm leading-[20px] border-b border-gray-500 cursor-pointer hover:bg-b-alpha-1",
            onClick: ()=>onRowClick?.(i),
            children: rowElements
        }, i, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-gray-500 rounded-[10px] bg-white relative text-dark-500 overflow-x-auto relative min-h-[220px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full', {
                    hidden: isLoading || columnElements?.length === 0
                }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "text-sm leading-[20px] font-medium border-b border-gray-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-gray-600 text-left",
                            children: fields.map((data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "col",
                                    className: "whitespace-nowrap min-w-[150px] p-3",
                                    children: data.displayName || data.name
                                }, Math.random().toString(), false, {
                                    fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: columnElements
                    }, void 0, false, {
                        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full items-center justify-center absolute top-0 bottom-0 left-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-full flex items-center justify-center absolute top-0 bottom-0 left-0 right-0', {
                    hidden: columnElements?.length > 0
                }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])({
                        hidden: isLoading
                    }),
                    children: noDataMessage
                }, void 0, false, {
                    fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = Table;
const __TURBOPACK__default__export__ = Table;
var _c;
__turbopack_context__.k.register(_c, "Table");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/components/users/UsersTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsersTable",
    ()=>UsersTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/components/ui/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/components/ui/Table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/services/users/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/constants/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const tableHead = [
    {
        name: 'name',
        displayName: 'Full name'
    },
    {
        name: 'email',
        displayName: 'Email address'
    },
    {
        name: 'address',
        displayName: 'Address'
    }
];
function UsersTable({ usersCount, DEFAULT_PAGE_LIMIT }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pageParam = searchParams.get('page') ?? '1';
    const page = Number(pageParam);
    const { data: usersData, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQueryKey"].users,
            page
        ],
        queryFn: {
            "UsersTable.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUsersAPI"])({
                    pageNumber: page - 1,
                    pageSize: DEFAULT_PAGE_LIMIT
                })
        }["UsersTable.useQuery"],
        placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
    });
    const handlePageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UsersTable.useCallback[handlePageChange]": (newPage)=>{
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', newPage.toString());
            router.push(`?${params.toString()}`, {
                scroll: false
            });
        }
    }["UsersTable.useCallback[handlePageChange]"], [
        router,
        searchParams
    ]);
    const handleRowClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UsersTable.useCallback[handleRowClick]": (i)=>{
            router.push(`/users/${usersData?.[i].id}/posts?page=${page}`);
        }
    }["UsersTable.useCallback[handleRowClick]"], [
        router,
        usersData,
        page
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fields: tableHead,
                isLoading: isLoading,
                onRowClick: handleRowClick,
                tableData: usersData || [],
                builder: (field, data)=>{
                    switch(field.name){
                        case 'address':
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[392px] truncate",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUserAddress"])(data)
                            }, void 0, false, {
                                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/UsersTable.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, void 0);
                        default:
                            return data[field.name];
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/UsersTable.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentPage: page,
                totalPages: Math.ceil(usersCount / DEFAULT_PAGE_LIMIT),
                onPageChange: handlePageChange
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/UsersTable.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/UsersTable.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(UsersTable, "oRIb2p+o5rzALPsRlHfwY9pTm8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = UsersTable;
var _c;
__turbopack_context__.k.register(_c, "UsersTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/web-developer-assignment-Public/front/components/users/Users.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/constants/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/constants/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/services/users/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/components/ui/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$users$2f$UsersTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/components/users/UsersTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const Users = ()=>{
    _s();
    const { data: usersCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EQueryKey"].user_count
        ],
        queryFn: {
            "Users.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$services$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUsersCountAPI"])()
        }["Users.useQuery"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[40px] sm:text-[60px] mb-10 font-medium text-dark-500",
                children: "Users"
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/Users.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/Users.tsx",
                    lineNumber: 21,
                    columnNumber: 27
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$components$2f$users$2f$UsersTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsersTable"], {
                    usersCount: usersCount?.count || 0,
                    DEFAULT_PAGE_LIMIT: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$constants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PAGE_LIMIT"]
                }, void 0, false, {
                    fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/Users.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/Users.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/users/Users.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Users, "V1zOAWGvuzaG6XXWXb5+N3TLdH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = Users;
const __TURBOPACK__default__export__ = Users;
var _c;
__turbopack_context__.k.register(_c, "Users");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_web-developer-assignment-Public_front_e480229a._.js.map