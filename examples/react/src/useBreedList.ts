import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Animal } from "./APIResponsesTypes";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(
  animal: Animal | null
): [string[], QueryStatus] {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
