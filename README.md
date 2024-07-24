# next-query-string-navigation

React hook to be used on NextJS components to trigger url based navigation.
It's useful on lists where parameters like pageNumber, pageSize, sort and query are added to URL and should refresh the page.

### How to use

Calling `changeQueryStringParams` will add/replace informed parameters in the url querystring and trigger a redirection with `useRouter` `push` method.

```
import { useQueryStringNavigation } from "next-query-string-navigation";

const [changeQueryStringParams] = useQueryStringNavigation();

const handlePageNumber = (pageNumber: number) => {
  changeQueryStringParams({"pageNumber": String(pageNumber)})
};

const handleSort = (sort: string) => {
  changeQueryStringParams({"pageNumber": "1", "sort": sort});
};

const doFilter = (newFilter: string) => {
  if (!newFilter && !query) {
    return;
  }
  changeQueryStringParams({"pageNumber": "1", "query": newFilter});
};
```

Then, you can get the updated querystring from `searchParams`.

# License

MIT
