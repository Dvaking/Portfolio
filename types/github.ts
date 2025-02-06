export interface Repositories {
  id: number;
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
  repositoryTopics: {
    edges: {
      node: {
        topic: {
          name: string;
        };
      };
    }[];
  };
}