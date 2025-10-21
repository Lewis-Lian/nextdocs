import { App, Octokit } from 'octokit';
import type { ActionResponse, Feedback } from '@/components/feedback';

export const repo = 'fumadocs';
export const owner = 'fuma-nama';
export const DocsCategory = 'Docs Feedback';

let instance: Octokit | undefined;

async function getOctokit(): Promise<Octokit> {
  if (instance) return instance;
  const appId = process.env.GITHUB_APP_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;

  if (!appId || !privateKey) {
    throw new Error(
      'No GitHub keys provided for Github app, docs feedback feature will not work.',
    );
  }

  const app = new App({
    appId,
    privateKey,
  });

  const { data } = await app.octokit.request(
    'GET /repos/{owner}/{repo}/installation',
    {
      owner,
      repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );

  instance = await app.getInstallationOctokit(data.id);
  return instance;
}

interface RepositoryInfo {
  id: string;
  discussionCategories: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
}

let cachedDestination: RepositoryInfo | undefined;
async function getFeedbackDestination() {
  if (cachedDestination) return cachedDestination;
  const octokit = await getOctokit();

  const {
    repository,
  }: {
    repository: RepositoryInfo;
  } = await octokit.graphql(`
  query {
    repository(owner: "${owner}", name: "${repo}") {
      id
      discussionCategories(first: 25) {
        nodes { id name }
      }
    }
  }
`);

  return (cachedDestination = repository);
}

// Client-side function for static export
export async function onRateAction(
  url: string,
  feedback: Feedback,
): Promise<ActionResponse> {
  const response = await fetch('/api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, feedback }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit feedback');
  }

  const result = await response.json();

  if (result.type === 'error') {
    throw new Error(result.message);
  }

  return {
    message: result.message,
  };
}
