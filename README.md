# use-query-string-navigation

React hook to be used on NextJS components to trigger url based navigation.
It's useful on lists where parameters like pageNumber, pageSize, sort and query are added to URL and should refresh the page.

### How to use

```
import { useQueryStringNavigation } from "use-query-string-navigation";

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

# License

MIT
