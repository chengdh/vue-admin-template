const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  first_name: state => state.user.first_name,
  last_name: state => state.user.last_name,
  groups: state => state.user.groups
}
export default getters
