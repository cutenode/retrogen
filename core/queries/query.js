// I'm sorry I did this, I just didn't want this massive string in the main file.

module.exports =
`query ($endCursor: String, $generatedQuery: String!, $per_page: Int!) {
  issuesPrs: search(
    first: $per_page
    after: $endCursor
    type: ISSUE
    query: $generatedQuery
  ) {
    
    issueCount
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      __typename
      ... on PullRequest {
        __typename
        id
        url
        number
        state
        locked
        title
        createdAt
        updatedAt
        closedAt
        mergedAt
        closed
        merged
        isDraft
        comments {
          totalCount
        }
        authorAssociation
        author {
          login
        }
        repository {
          id
          nameWithOwner
          url
          description
          name
          owner {
            login
          }
        }
      }
      ... on Issue {
        __typename
        id
        url
        number
        state
        locked
        title
        createdAt
        updatedAt
        closedAt
        closed
        comments {
          totalCount
        }
        authorAssociation
        author {
          login
        }
        repository {
          id
          nameWithOwner
          url
          description
          name
          owner {
            login
          }
        }
      }
    }
  }
  discussions: search(
    first: $per_page
    type: DISCUSSION
    query: $generatedQuery
  ) {
    discussionCount
    nodes {
      ... on Discussion {
        id
        url
        number
        locked
        title
        createdAt
        updatedAt
        comments {
          totalCount
        }
        author {
          login
        }
        authorAssociation
        repository {
          id
          nameWithOwner
          url
          description
          name
          owner {
            login
          }
        }
      }
    }
  }
}`
