import getToken from "./token";

const GetPinnedRepositories = `
    query {
        viewer {
            pinnedItems(first: 4, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        description
                        url
                        stargazerCount
                        forkCount
                        primaryLanguage {
                            name
                            color
                        }
                        repositoryTopics(first: 10) {
                            edges {
                                node {
                                    topic {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

interface fetchPinnedReposProps {
  setRepositories: (repos: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export async function fetchPinnedRepos({
  setError,
  setLoading,
  setRepositories,
}: fetchPinnedReposProps) {
  const token = await getToken();
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: GetPinnedRepositories }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    console.log(response);

    const { data } = await response.json();
    const repos = data.viewer.pinnedItems.nodes.map((node: any) => ({
      ...node,
      id: node.url,
      repositoryTopics: {
        edges: node.repositoryTopics.edges.map((edge: any) => ({
          node: {
            topic: {
              name: edge.node.topic.name,
            },
          },
        })),
      },
    }));

    setRepositories(repos);
    console.log(repos);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
  } finally {
    setLoading(false);
  }
}
