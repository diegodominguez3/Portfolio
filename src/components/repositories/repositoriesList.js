import React from 'react';
import {StaticQuery,  graphql} from "gatsby";
import { GoStar, GoRepoForked } from 'react-icons/go' 

export default function repositoriesList() {
    return (
      <StaticQuery
        query={graphql`
        query MyQuery {
            allGithubData {
                nodes {
                data {
                    user {
                    pinnedItems {
                        edges {
                        node {
                            name
                            description
                            id
                            forkCount
                            createdAt(fromNow: true)
                            url
                            stargazers {
                            totalCount
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        `}
        render={data => (
            data.allGithubData.nodes[0].data.user.pinnedItems.edges.map((repo) => {
                return(
                    <React.Fragment key={repo.node.name}>
                    <div className="repositories__repo">
                      <a 
                        className='repositories__repo-link' 
                        href={repo.node.url}
                        target="_blank"
                      >
                        <strong>{repo.node.name}</strong>
                      </a>
                      <div>{repo.node.description}</div>
                      <div className="repositories__repo-date">
                        Created {repo.node.createdAt}
                      </div>
                      <div className="repositories__repo-star">
                        {repo.node.forkCount > 0 && <GoRepoForked />}
                        <GoStar /> {repo.node.stargazers.totalCount}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                );
            })
        )}
      />
    )
  }