import { sync, type OramaDocument } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';

export async function updateSearchIndexes(): Promise<void> {
  const apiKey = process.env.ORAMA_PRIVATE_API_KEY;

  if (!apiKey) {
    console.log('未找到 Orama 的 API 密钥，正在跳过搜索索引更新。');
    return;
  }

  const content = await fs.readFile('.next/server/app/static.json.body');
  const records = JSON.parse(content.toString()) as OramaDocument[];

  const manager = new CloudManager({ api_key: apiKey });

  await sync(manager, {
    index: 'twr98yz9itca86121ukrqber',
    documents: records,
  });

  console.log(`search updated: ${records.length} records`);
}
