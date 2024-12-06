import { getProductEnable } from "@/api/getProductEnable";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FiltersTypes } from "@/types/filters";

type FiltersEnableProps = {
  setFilterEnable: (availabilityProduct: string) => void;
};

const FilterEnable = (props: FiltersEnableProps) => {
  const { setFilterEnable } = props;
  const { result, loading }: FiltersTypes = getProductEnable();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Disponible</p>
      {loading && result === null && <p>Cargando Disponibles</p>}

      <RadioGroup onValueChange={(value) => setFilterEnable(value)}>
        {result !== null &&
          result.schema.attributes.availabilityProduct.enum.map(
            (availabilityProduct: string) => (
              <div
                key={availabilityProduct}
                className="flex items-center space-x-2"
              >
                <RadioGroupItem
                  value={availabilityProduct}
                  id={availabilityProduct}
                />
                <Label htmlFor={availabilityProduct}>
                  {availabilityProduct}
                </Label>
              </div>
            )
          )}
      </RadioGroup>
    </div>
  );
};

export default FilterEnable;
