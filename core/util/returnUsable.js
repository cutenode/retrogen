async function returnUsable (obj, type) {
  const usable = {
    meta: {
      id: obj.id,
      url: obj.url,
      number: obj.number,
      title: obj.title,
      type: obj.__typename ?? type
    },
    status: {
      state: obj.state,
      locked: obj.locked,
      isDraft: obj.isDraft,
      merged: obj.merged,
      closed: obj.closed
    },
    timing: {
      createdAt: obj.createdAt,
      updatedAt: obj.updatedAt,
      closedAt: obj.closedAt,
      mergedAt: obj.mergedAt
    },
    author: {
      username: obj.author.login,
      association: obj.authorAssociation
    },
    comments: {
      count: obj.comments.totalCount
    },
    repo: obj.repository
  }

  return usable
}

module.exports = returnUsable
