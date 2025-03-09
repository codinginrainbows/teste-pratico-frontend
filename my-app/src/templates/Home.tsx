import styles from "./Home.module.css";
import { useFetcher } from "../hooks/useFetcher";
import { useFilterEmployees } from "../hooks/useFilterEmployees";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { EmployeeList } from "../components/Table/EmployeeList";

function Home() {
  const { data: employees, isLoading } = useFetcher("employees");

  const { search, setSearch, filteredEmployees } =
    useFilterEmployees(employees);

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <div className={styles.topBar}>
          <h2>Funcionários</h2>
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <EmployeeList
          employees={filteredEmployees}
          isLoadingEmployees={isLoading}
        />
      </div>
    </div>
  );
}

export default Home;
