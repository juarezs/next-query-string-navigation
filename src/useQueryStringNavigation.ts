import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useQueryStringNavigation() : [(changedParams: { [key: string]: string | null }) => void] {
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeQueryStringParams = useCallback((changedParams: { [key: string]: string | null }) => {
    const params = new URLSearchParams(searchParams.toString());

    // Update the search parameters
    Object.keys(changedParams).forEach((key: string) => {
      if (String(changedParams[key]).length == 0 && params.has(key)) {
        params.delete(key);
      } else {
        params.set(key, String(changedParams[key]));
      }
    });

    // Get the new query string
    const newQueryString = params.toString();

    router.push(`${pathname}?${newQueryString}`);
  }, [pathname, router, searchParams]);

  return [changeQueryStringParams];
};
