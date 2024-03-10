import FilterBar from '../components/filterBar/FilterBar';
import Header from '../components/Header';
import Cards from '../components/card/Card';
import FilterProvider from '../context/FilterProvider';

export default function FavoriteRecipes() {
  return (
    <FilterProvider>
      <div>
        <Header />
        <FilterBar />
        <Cards />
      </div>
    </FilterProvider>
  );
}
