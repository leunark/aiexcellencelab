import logoAsset from '@/assets/logo.svg';
import { cn } from '@/lib/utils';

type LogoMarkProps = {
  className?: string;
};

export const LogoMark = ({ className }: LogoMarkProps) => (
  <img
    src={logoAsset}
    alt="AI Excellence Lab droplet logo"
    className={cn('h-10 w-10 object-contain', className)}
  />
);

