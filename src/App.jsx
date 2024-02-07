import { useState } from "react";
import HomePage from "./components/homepage";
import SerachBooks from "./components/searchbooks";
import Layout from "./layout/layout";

function App() {
  const [filterdata, setFilterdata] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <Layout>
        <SerachBooks
          setFilterdata={setFilterdata}
          search={search}
          setSearch={setSearch}
          filterdata={filterdata}
        />
        <HomePage filterdata={filterdata} search={search} />
      </Layout>
    </>
  );
}

export default App;
