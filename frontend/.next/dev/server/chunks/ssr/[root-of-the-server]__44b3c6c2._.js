module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/web-developer-assignment-Public/front/components/shared/QueryClientProviderWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryClientProviderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/react-query-persist-client/build/modern/PersistQueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$persist$2d$client$2d$core$2f$build$2f$modern$2f$persist$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-persist-client-core/build/modern/persist.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$async$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-async-storage-persister/build/modern/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function QueryClientProviderWrapper({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    refetchInterval: 5 * 60 * 1000,
                    refetchOnWindowFocus: true,
                    refetchOnReconnect: true,
                    gcTime: 1000 * 60 * 60 * 24
                }
            }
        }));
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    if (!isClient) {
        // Render only QueryClientProvider on server
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/shared/QueryClientProviderWrapper.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    // Access window.localStorage only on client
    const persister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$async$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAsyncStoragePersister"])({
        storage: window.localStorage
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$persist$2d$client$2d$core$2f$build$2f$modern$2f$persist$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistQueryClient"])({
        queryClient,
        persister
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PersistQueryClientProvider"], {
        client: queryClient,
        persistOptions: {
            persister
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/web-developer-assignment-Public/front/components/shared/QueryClientProviderWrapper.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__44b3c6c2._.js.map