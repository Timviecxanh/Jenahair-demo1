import { getAppConfigAction } from "@/actions/app-config-action";
import { SearchBarContainer } from "./search-bar-container/search-bar-container";

export default async function SearchBar() {
  const configResponse = await getAppConfigAction();
  const logoUrl = configResponse.data?.logoUrl;

  return <SearchBarContainer logoUrl={logoUrl || undefined} />;
}
