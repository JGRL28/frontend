import FilterEnable from "./filters-enable";

type FiltersControlsCategoryProps = {
  setFilterEnable: (availabilityProduct: string) => void;
};

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
  const { setFilterEnable } = props;
  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FilterEnable setFilterEnable={setFilterEnable} />
    </div>
  );
};

export default FiltersControlsCategory;
