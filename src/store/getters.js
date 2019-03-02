const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  first_name: state => state.user.first_name,
  last_name: state => state.user.last_name,
  groups: state => state.user.groups,

  // 根据用户组id获取该用户组可访问的content_type_cats
  content_type_cats_by_group_id: state => group_id => {
    const groups = state.user.groups;
    const cur_group = groups.find(g => g.id === group_id);
    if (cur_group) {
      return cur_group.content_type_cats_serializer;
    }
  },
  // 根据content_type_cat_id获取对应的content_types
  content_type_cat_rels_by_group_id_and_cat_id: state => (group_id, cat_id) => {
    const groups = state.user.groups;
    const cur_group = groups.find(g => g.id === group_id);
    if (cur_group) {
      return cur_group.content_type_cat_rels_serializer.filter(
        ctcr => ctcr.content_type_cat === cat_id
      );
    }
  }
};
export default getters;
