import { getAllPublicMenusAction } from "@/actions/menu-action";
import LandingDrawerContainer from "./landing-drawer-container";

export default async function LandingDrawer() {
  const [menusResponse] = await Promise.all([
    getAllPublicMenusAction(),
  ]);

  return (
    <LandingDrawerContainer
      menusData={menusResponse.data ?? []}
    />
  );
}
