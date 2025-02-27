export function getBasePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portofolio' : '';
  return `${basePath}${path}`;
} 