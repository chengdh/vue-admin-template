const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  first_name: state => state.user.first_name,
  last_name: state => state.user.last_name,
  groups: state => state.user.groups,
  content_type_cats: state => group_id => {
    const groups = state.user.groups
    const cur_group = groups.find(g => g.id === group_id)
    if (cur_group) {
      return cur_group.content_type_cats_serializer
    }
  }
}
export default getters
