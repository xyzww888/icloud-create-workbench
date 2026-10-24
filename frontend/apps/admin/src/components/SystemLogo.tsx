import type { ImgHTMLAttributes } from 'react';

/** 渲染系统统一使用的船长 AI 品牌图标。 */
const SystemLogo = ({ alt = '船长AI', ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...props} alt={alt} src="/assets/icloud-logo.png" />;
};

export default SystemLogo;
