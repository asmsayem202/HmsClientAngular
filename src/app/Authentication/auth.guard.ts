import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  let authenticationService = inject(AuthService);
  let router = inject(Router);
  //alert(JSON.stringify(authenticationService.userValue));
  const user = authenticationService.userValue;

  if (user) {
    // check if route is restricted by role


    const { roles } = route.data;

    let roleList: string[] = roles;//['Admin', 'Operator']

    //alert('route role: ' + role);
    if (roleList) {


      //alert('user role: ' + user.roles.join(','));

      //alert(user.roles.includes(role));// ["Manager","HR", ]
      const filteredArray = roleList.filter(value => user.roles.includes(value));// []
      if (roles && roleList.length > 0 && filteredArray.length == 0)
      // if (roles && roleList.length > 0 && !user.roles.includes(roles))
      {
        alert('not authorized');
        // role not authorized so redirect to home page
        router.navigate(['/']);
        return false;
      }

      // authorized so return true
      return true;
    }
    return true;
  }
  // not logged in so redirect to login page with the return url
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;


};
