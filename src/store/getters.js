const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  first_name: state => state.user.first_name,
  last_name: state => state.user.last_name,
  groups: state => state.user.groups,
  permit_parts: state => state.user.user_extend.permit_parts,

  // 默认用户组,如果没有设置默认用户组,则返回第一个用户组
  default_group: state => {
    let ret = null
    if (state.user.user_extend && state.user.user_extend.default_group_id) {
      ret = state.user.groups.find(g => g.id === state.user.user_extend.default_group_id)
    } else {
      ret = state.user.groups[0]
    }
    return ret
  },

  // 默认工区,如果没有设置默认工区,则返回第一个工区
  default_part: state => {
    let ret = null
    if (state.user.user_extend && state.user.user_extend.default_part_id) {
      ret = state.user.user_extend.permit_parts.find(p => p.part_id === state.user.user_extend.default_part_id)
    } else {
      ret = state.user.user_extend.permit_parts[0]
    }
    return ret
  },

  // 根据用户组id获取该用户组可访问的content_type_cats
  content_type_cats: (state, getters) => {
    const groups = state.user.groups
    const default_group = getters.default_group
    const cur_group = groups.find(g => g.id === default_group.id)
    if (cur_group) {
      return cur_group.content_type_cats_serializer
    } else {
      return []
    }
  },
  // 根据content_type_cat_id获取对应的content_types
  content_type_cat_rels_by_cat_id: (_state, getters) => cat_id => {
    const default_group = getters.default_group
    if (default_group) {
      return default_group.content_type_cat_rels_serializer.filter(
        ctcr => ctcr.content_type_cat === cat_id
      )
    }
  }
}
export default getters
