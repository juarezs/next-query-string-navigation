"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryStringNavigation = useQueryStringNavigation;
const navigation_1 = require("next/navigation");
const react_1 = require("react");
function useQueryStringNavigation() {
    const pathname = (0, navigation_1.usePathname)();
    const router = (0, navigation_1.useRouter)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const changeQueryStringParams = (0, react_1.useCallback)((changedParams) => {
        const params = new URLSearchParams(searchParams.toString());
        // Update the search parameters
        Object.keys(changedParams).forEach((key) => {
            if (String(changedParams[key]).length == 0 && params.has(key)) {
                params.delete(key);
            }
            else {
                params.set(key, String(changedParams[key]));
            }
        });
        // Get the new query string
        const newQueryString = params.toString();
        router.push(`${pathname}?${newQueryString}`);
    }, [pathname, router, searchParams]);
    return [changeQueryStringParams];
}
;
