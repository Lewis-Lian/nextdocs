import { openapi } from '@/lib/openapi';

export const dynamic = 'force-static';
export const revalidate = false;

export const { GET, HEAD, PUT, POST, PATCH, DELETE } = openapi.createProxy();
