// github-api.js

exports.githubApiQuery = `
query($github_login: String!) {
    user(login:$github_login) {
        pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                name
                description
                createdAt
                url
                forkCount
                stargazers {
                    totalCount
                }
              }
            }
          }
        }
      }
  }
`