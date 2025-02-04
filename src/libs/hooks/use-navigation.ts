import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import { NavProp, Route } from 'src/libs/types/screens';
import { useCallback } from 'react';

export const useNav = () => {
  return useNavigation<NavProp>();
};

export const useGo = (...params: Route) => {
  const { navigate } = useNav();
  return () => navigate(...params);
};

export const useJump = () => {
  const { dispatch } = useNav();
  const { key } = useRoute();

  return useCallback(
    (...data: Route) => {
      dispatch(state => {
        let index = 0;
        let route = '';

        const routes = state.routes.map((r, i) => {
          if (r.name !== data[0]) return r;
          route = r.key;
          index = i;
          return { ...r, params: data[1] };
        });

        const history = state.history.filter(h => h.type !== 'route' || h.key !== key);
        const item = history.find(h => h.type === 'route' && h.key === route);
        if (!item && route) history.push({ type: 'route', key: route });
        return CommonActions.reset({ ...state, routes, history, index });
      });
    },
    [dispatch, key],
  );
};

// export const useResetNavigation = () => {
//   const { dispatch } = useNav();
//   const isPin = auth.useStateIsPincode()[0];
//   const isAuth = auth.useValueIsAuth();

//   return useCallback(
//     (route?: keyof Screens) => {
//       const r = CommonActions.reset;
//       const home = isAuth && isPin && 'Home';
//       const login = !isAuth && !isPin && 'Login';
//       const pincode = isAuth && !isPin && 'Pincode';
//       const name = route || home || login || pincode;
//       if (name) dispatch(r({ index: 0, routes: [{ name }] }));
//     },
//     [dispatch, isAuth, isPin],
//   );
// };
