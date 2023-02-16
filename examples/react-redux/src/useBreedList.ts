import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import { Animal } from "./APIResponsesTypes";
import { useGetBreedsQuery } from "./petApiService";

export default function useBreedList(
  animal: Animal | null
): [string[], QueryStatus] {
  const { data: breeds, status } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) return [[], status];

  return [breeds ?? [], status];
}
