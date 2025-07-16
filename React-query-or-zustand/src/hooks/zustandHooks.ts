import { useListStore } from "../store/createListStore"

export const useFilteredItems = () => {
    useListStore(state => state.filteredItems)
}

export const usePostCounts = () => 
  useListStore(state => state.counts);

export const useListActions = () => 
  useListStore(state => ({
    setFilter: state.setFilter,
    setItems: state.setItems
  }));