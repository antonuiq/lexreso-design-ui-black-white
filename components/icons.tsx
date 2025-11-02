import React from 'react';

export const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CheckCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const TelegramIcon = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.58c-.28 1.13-1.04 1.4-1.74.88l-4.98-3.9z" />
    </svg>
);

export const WhatsappIcon = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.75 13.96c.25.13.41.2.46.3.05.1.04.6-.02 1.14-.07.54-.53 1.05-1.02 1.22s-1.09.1-1.68-.22a10.88 10.88 0 0 1-3.48-2.04 10.88 10.88 0 0 1-2.27-2.9c-.31-.62-.1-1.12.22-1.48.25-.28.52-.38.7-.38.15 0 .3.01.44.03.2.02.36.04.5.28.18.28.62 1.4.68 1.52.06.11.1.25.04.4s-.18.35-.35.51a.63.63 0 0 1-.44.2c-.13 0-.27-.04-.4-.14s-.34-.3-.48-.51a6.6 6.6 0 0 1-1.16-1.63c-.18-.33-.36-.7-.5-1.12s-.22-.81-.08-1.26c.14-.41.43-.8.78-1.05.25-.18.53-.28.85-.28.09 0 .18 0 .27.02.3.04.58.15.82.38.2.18.32.42.38.56.06.14.24.82.28.98.05.16.08.33.02.51s-.18.33-.36.5a.63.63 0 0 1-.42.19c-.13 0-.27-.04-.39-.14s-.34-.3-.48-.51c-.13-.2-.27-.42-.4-.64-.14-.23-.28-.48-.42-.72s-.27-.52-.4-.78c-.08-.14-.15-.28-.23-.42l-.1-.17c-.03-.05-.05-.1-.08-.14s-.05-.08-.07-.12a.89.89 0 0 0-.18-.28c-.08-.08-.15-.15-.23-.21-.08-.06-.15-.1-.23-.15-.08-.04-.15-.08-.23-.11s-.15-.05-.23-.07a.9.9 0 0 0-.26-.04c-.1 0-.19.02-.28.04s-.18.06-.26.1a1.4 1.4 0 0 0-.44.3c-.14.12-.27.25-.38.4a1.8 1.8 0 0 0-.3.48c-.08.18-.15.37-.2.57-.05.2-.08.4-.1.6s-.02.4-.02.6c0 .22.02.44.05.66.03.22.08.44.14.65.06.22.13.43.2.64.08.2.17.4.28.58.1.2.22.38.35.57.13.18.27.35.42.52.15.17.3.33.47.48.17.15.34.3.52.44.18.14.37.27.56.39.2.12.4.23.6.33.2.1.4.18.6.26.2.08.4.15.6.21.2.06.4.1.6.15.2.04.4.07.6.1.2.02.4.03.6.03h.46c.16 0 .32-.02.48-.05.16-.03.32-.08.48-.14.16-.06.32-.13.47-.2.15-.08.3-.16.44-.25.14-.09.28-.2.4-.3l.12-.11c.04-.03.07-.06.1-.1s.07-.07.1-.11.05-.08.08-.12.05-.08.07-.13.04-.1.06-.15.03-.1.05-.15.03-.1.04-.16.02-.12.03-.17.02-.12.02-.18.01-.13.02-.19c0-.06 0-.12.01-.18.01-.06.01-.12.01-.18 0-.06 0-.12-.01-.18s-.01-.12-.01-.18a.9.9 0 0 1-.01-.18c0-.06-.01-.12-.02-.18s-.02-.12-.03-.18-.02-.12-.04-.18-.03-.11-.05-.17-.03-.11-.06-.16-.04-.1-.07-.15-.05-.1-.08-.14-.06-.08-.1-.12-.07-.08-.11-.12-.08-.07-.13-.1a.7.7 0 0 0-.15-.1c-.05-.03-.1-.05-.16-.08s-.12-.05-.18-.07a1.2 1.2 0 0 0-.44-.12c-.15-.02-.3-.02-.45-.02s-.3.01-.44.02a1.2 1.2 0 0 0-.44.12c-.16.04-.3.1-.44.18-.14.07-.27.16-.4.25-.12.09-.24.18-.35.29-.1.1-.2.2-.3.3l-.1.12c-.04.04-.07.08-.1.13s-.06.09-.08.14a.7.7 0 0 1-.06.15c-.02.05-.03.1-.05.15s-.02.1-.03.16a.9.9 0 0 1-.02.17c0 .06-.01.12-.01.18 0 .06 0 .12.01.18s.01.12.02.18.02.12.04.18.03.11.05.17.04.1.06.16.05.1.08.15.06.08.1.13.07.08.11.12.08.07.13.1a.7.7 0 0 0 .15.1c.05.03.1.05.16.08s.12.05.18.07.15.04.22.05c.07.01.15.02.22.02h.23c.08 0 .15 0 .23-.01.07-.01.15-.02.22-.04.07-.02.15-.04.22-.06.07-.02.15-.05.22-.08s.14-.06.2-.1a.7.7 0 0 0 .15-.12c.05-.04.1-.08.14-.13s.08-.09.12-.14c.04-.05.07-.1.1-.15s.06-.1.08-.16a.9.9 0 0 0 .04-.17c.01-.06.02-.12.02-.18 0-.06 0-.12-.01-.18s-.01-.12-.02-.18-.03-.12-.04-.18-.04-.11-.06-.17-.05-.1-.08-.16-.06-.1-.1-.15-.07-.08-.11-.13-.08-.07-.13-.11-.1-.08-.14-.12a.7.7 0 0 1-.15-.1c-.05-.03-.1-.05-.16-.08s-.12-.05-.18-.07-.15-.04-.22-.05-.15-.02-.22-.02h-.23c-.08 0-.15 0-.23.01s-.15.02-.22.04-.15.04-.22.06-.15.05-.22.08-.14.06-.2.1a.7.7 0 0 0-.15.12c-.05.04-.1.08-.14.13s-.08.09-.12.14a.7.7 0 0 0-.1.15c-.03.05-.06.1-.08.16a.9.9 0 0 0-.04.17c-.01.06-.02.12-.02.18 0 .06 0 .12.01.18s.01.12.02.18.03.12.04.18.04.11.06.17.05.1.08.16.06.1.1.15.07.08.11.13.08.07.13.11.1.08.14.12a.7.7 0 0 1 .15.1c.05.03.1.05.16.08s.12.05.18.07.15.04.22.05.15.02.22.02z"/>
    </svg>
);

export const TwitterIcon = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.1,9.75 4.18,10.53C3.47,10.51 2.82,10.31 2.26,10V10.03C2.26,12.08 3.68,13.81 5.6,14.22C5.25,14.31 4.88,14.35 4.5,14.35C4.22,14.35 3.96,14.33 3.71,14.29C4.26,15.93 5.86,17.11 7.78,17.15C6.36,18.22 4.63,18.88 2.76,18.88C2.41,18.88 2.06,18.86 1.72,18.82C3.65,20.08 5.94,20.8 8.38,20.8C16,20.8 20.4,14.34 20.4,8.78C20.4,8.58 20.4,8.39 20.39,8.19C21.2,7.6 21.9,6.86 22.46,6Z"></path>
    </svg>
);

export const GithubIcon = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
    </svg>
);

export const VercelLogo = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22H22L12 2Z" />
    </svg>
);

export const Bell = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
);

export const CreditCard = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
);

export const LifeBuoy = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
        <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
    </svg>
);

export const Settings = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);

export const User = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);