import { ActivatedRouteSnapshot } from '@angular/router';
import { VexRouteData } from '../interfaces/vex-route.interface';

export function checkRouterChildsData(route: ActivatedRouteSnapshot & { data?: VexRouteData }, compareWith: (data: VexRouteData) => boolean) {
  if (compareWith(route.data)) {
    return true;
  }

  if (!route.firstChild) {
    return false;
  }

  return checkRouterChildsData(route.firstChild, compareWith);
}
