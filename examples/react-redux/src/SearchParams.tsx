import { useState, useDeferredValue, useMemo, useTransition } from "react";
import { useSearchQuery } from "./petApiService";
import Results from "./Results";
import { useDispatch, useSelector } from "react-redux";
import useBreedList from "./useBreedList";
import { Animal } from "./APIResponsesTypes";
import { RootState } from "./store";
import { all } from "./searchParamsSlice";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const adoptedPet = useSelector((state: RootState) => state.adoptedPet.value);
  const requestParams = useSelector(
    (state: RootState) => state.searchParams.value
  );
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();

  const [isPending, startTransition] = useTransition();
  let { data: pets } = useSearchQuery(requestParams);
  pets = pets ?? [];

  const deferredPets = useDeferredValue(pets);
  const renderedPets = useMemo(
    () => <Results pets={deferredPets} />,
    [deferredPets]
  );
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            animal: (formData.get("animal")?.toString() ?? "") as Animal,
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          startTransition(() => {
            dispatch(all(obj));
          });
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value as Animal);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value as Animal);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        {isPending ? (
          <div className="mini loading-pane">
            <h2 className="loader">🐩</h2>
          </div>
        ) : (
          <button>Submit</button>
        )}
      </form>
      {renderedPets}
    </div>
  );
};

export default SearchParams;
