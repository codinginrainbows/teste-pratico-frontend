import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/lupa.svg";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Pesquisar"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img src={searchIcon} alt="lupa" />
    </div>
  );
};
