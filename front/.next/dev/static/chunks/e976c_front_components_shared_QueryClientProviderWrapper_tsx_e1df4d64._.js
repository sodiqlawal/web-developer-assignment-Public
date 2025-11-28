(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/web-developer-assignment-Public/front/components/shared/QueryClientProviderWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryClientProviderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/react-query-persist-client/build/modern/PersistQueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$persist$2d$client$2d$core$2f$build$2f$modern$2f$persist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-persist-client-core/build/modern/persist.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$async$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/web-developer-assignment-Public/front/node_modules/@tanstack/query-async-storage-persister/build/modern/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function QueryClientProviderWrapper({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryClientProviderWrapper.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        refetchInterval: 5 * 60 * 1000,
                        refetchOnWindowFocus: true,
                        refetchOnReconnect: true,
                        gcTime: 1000 * 60 * 60 * 24
                    }
                }
            })
    }["QueryClientProviderWrapper.useState"]);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QueryClientProviderWrapper.useEffect": ()=>{
            setIsClient(true);
        }
    }["QueryClientProviderWrapper.useEffect"], []);
    if (!isClient) {
        // Render only QueryClientProvider on server
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/web-developer-assignment-Public/front/components/shared/QueryClientProviderWrapper.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    // Access window.localStorage only on client
    const persister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$async$2d$storage$2d$persister$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAsyncStoragePersister"])({
        storage: window.localStorage
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$query$2d$persist$2d$client$2d$core$2f$build$2f$modern$2f$persist$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistQueryClient"])({
        queryClient,
        persister
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$web$2d$developer$2d$assignment$2d$Public$2f$front$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$persist$2d$client$2f$build$2f$modern$2f$PersistQueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistQueryClientProvider"], {
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
_s(QueryClientProviderWrapper, "stzLOlZhMroT4CtTYBaShj+3O6c=");
_c = QueryClientProviderWrapper;
var _c;
__turbopack_context__.k.register(_c, "QueryClientProviderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=e976c_front_components_shared_QueryClientProviderWrapper_tsx_e1df4d64._.js.map