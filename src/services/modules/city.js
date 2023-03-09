import HYRequest from "../request/index";

export function getCitiesAll() {
  return HYRequest.get({
    url: "/city/all",
  });
}
