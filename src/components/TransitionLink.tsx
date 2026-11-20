import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTransition } from '../contexts/TransitionContext';

type TransitionLinkProps = React.ComponentProps<typeof Link>;

const TransitionLink: React.FC<TransitionLinkProps> = ({ to, onClick, target, ...rest }) => {
  const { transitionTo, isTransitioning } = useTransition();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (target && target !== '_self') return;

    const toStr =
      typeof to === 'string'
        ? to
        : `${(to as { pathname?: string }).pathname ?? ''}${(to as { search?: string }).search ?? ''}${(to as { hash?: string }).hash ?? ''}`;

    if (!toStr || toStr.startsWith('http') || toStr.startsWith('mailto:') || toStr.startsWith('tel:')) return;
    if (toStr.includes('#')) {
      // anchor link: let browser handle
      return;
    }
    if (isTransitioning) {
      e.preventDefault();
      return;
    }

    const targetPath = toStr.split('?')[0];
    if (targetPath === location.pathname) return;

    e.preventDefault();
    transitionTo(toStr);
  };

  return <Link to={to} target={target} onClick={handleClick} {...rest} />;
};

export default TransitionLink;
