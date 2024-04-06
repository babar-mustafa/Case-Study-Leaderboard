export const getActiveRouteName  = ( navigationState: allAnyTypes): allAnyTypes => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

export const isRouteExist = (routName: string, navigation: isTypeObject): boolean => {
  let routeExist = false;
  const routes = navigation?.getState().routeNames;
  if (routes?.includes(routName)) {
    routeExist = true;
  }

  return routeExist;
};
