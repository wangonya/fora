export default function({ store, redirect, route }) {
  store.state.user != null && route.name == 'login' ? redirect('/feed') : ''
  store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == '/notifications')) {
    return true
  }
  if (route.matched.some(record => record.path == '/connect')) {
    return true
  }
  if (route.matched.some(record => record.path == '/profile')) {
    return true
  }
}
