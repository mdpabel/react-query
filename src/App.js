import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import HoverBasedPreFetching from "./Prefetching/Hover-based query prefetching";
import QueryPrefetching from "./Prefetching/QueryPrefetching";
import StaleTime from "./Prefetching/StaleTime";
import QueryInvalidation from "./Query Invalidation/QueryInvalidation";
// import DependentQueries from "./Queries/DependentQueries";
// import Queries from "./Queries/Queries";
// import QueriesDisabling from "./Queries/QueriesDisabling";
// import QueryCancellation from "./Queries/QueryCancellation";
// import QueryingRelatedListsAndItems from "./Queries/Querying Related Lists and Items";
// import QueriesRetries from "./Queries/QueryRetries";
// import RefetchIntervals from "./Queries/RefetchIntervals";
// import SeedingInitialQueryDataFromOtherQueries from "./Queries/Seeding Initial Query Data from Other Queries";
// import SupplyingAQueryWithInitialData from "./Queries/Supplying a Query with Initial Data";
// import UsingQueryDataToSeedFutureQueries from "./Queries/Using Query Data to Seed Future Queries";

const App = () => {
  return (
    <div>
      {/* <Queries /> */}
      {/* <QueriesDisabling /> */}
      {/* <QueriesRetries /> */}
      {/* <QueryCancellation /> */}
      {/* <DependentQueries /> */}
      {/* <SupplyingAQueryWithInitialData /> */}
      {/* <QueryingRelatedListsAndItems /> */}
      {/* <SeedingInitialQueryDataFromOtherQueries /> */}
      {/* <UsingQueryDataToSeedFutureQueries /> */}
      {/* <RefetchIntervals /> */}
      {/* <QueryInvalidation /> */}
      {/* <QueryPrefetching /> */}
      {/* <HoverBasedPreFetching /> */}
      <StaleTime />
      <ReactQueryDevtools />
    </div>
  );
};

export default App;
