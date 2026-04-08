import { getAppConfigAction } from "@/actions/app-config-action";
import { getAllPublicMenusAction } from "@/actions/menu-action";
import { SearchBarContainer } from "./search-bar-container/search-bar-container";

export default async function SearchBar() {
  const [configResponse, menusResponse] = await Promise.all([
    getAppConfigAction(),
    getAllPublicMenusAction(),
  ]);

  const logoUrl = configResponse.data?.logoUrl;
  const menusData = menusResponse.data ?? [];

  return <SearchBarContainer menusData={menusData} />;
}
