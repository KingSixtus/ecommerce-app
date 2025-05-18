const Filters = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  sortOrder, 
  onSortChange 
}) => {
  return (
    <div className="filters">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filters;