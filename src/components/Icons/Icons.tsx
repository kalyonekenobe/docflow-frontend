import { FC, SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {}

export const LogoIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg viewBox='0 0 93 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_11_256)'>
        <line
          x1='1.89469'
          y1='28.1236'
          x2='1.89469'
          y2='7.91304'
          stroke='currentColor'
          strokeWidth='3.78947'
        />
        <line y1='6.01829' x2='24' y2='6.01829' stroke='currentColor' strokeWidth='3.78947' />
        <line y1='1.13043' x2='14.6957' y2='1.13043' stroke='currentColor' strokeWidth='2.26087' />
        <path
          d='M8.56331 27V10.2H16.8433C18.7153 10.2 20.3633 10.544 21.7873 11.232C23.2113 11.904 24.3233 12.864 25.1233 14.112C25.9233 15.36 26.3233 16.848 26.3233 18.576C26.3233 20.32 25.9233 21.824 25.1233 23.088C24.3233 24.336 23.2113 25.304 21.7873 25.992C20.3633 26.664 18.7153 27 16.8433 27H8.56331ZM14.2273 22.584H16.6033C17.4033 22.584 18.0993 22.432 18.6913 22.128C19.2993 21.824 19.7713 21.376 20.1073 20.784C20.4433 20.176 20.6113 19.44 20.6113 18.576C20.6113 17.728 20.4433 17.008 20.1073 16.416C19.7713 15.824 19.2993 15.376 18.6913 15.072C18.0993 14.768 17.4033 14.616 16.6033 14.616H14.2273V22.584ZM35.1594 27.24C33.6714 27.24 32.3514 26.952 31.1994 26.376C30.0634 25.784 29.1674 24.976 28.5114 23.952C27.8554 22.928 27.5274 21.752 27.5274 20.424C27.5274 19.096 27.8554 17.92 28.5114 16.896C29.1674 15.872 30.0634 15.072 31.1994 14.496C32.3514 13.92 33.6714 13.632 35.1594 13.632C36.6474 13.632 37.9674 13.92 39.1194 14.496C40.2714 15.072 41.1674 15.872 41.8074 16.896C42.4634 17.92 42.7914 19.096 42.7914 20.424C42.7914 21.752 42.4634 22.928 41.8074 23.952C41.1674 24.976 40.2714 25.784 39.1194 26.376C37.9674 26.952 36.6474 27.24 35.1594 27.24ZM35.1594 23.016C35.5594 23.016 35.9194 22.92 36.2394 22.728C36.5594 22.536 36.8154 22.248 37.0074 21.864C37.1994 21.464 37.2954 20.984 37.2954 20.424C37.2954 19.848 37.1994 19.376 37.0074 19.008C36.8154 18.624 36.5594 18.336 36.2394 18.144C35.9194 17.952 35.5594 17.856 35.1594 17.856C34.7594 17.856 34.3994 17.952 34.0794 18.144C33.7594 18.336 33.5034 18.624 33.3114 19.008C33.1194 19.376 33.0234 19.848 33.0234 20.424C33.0234 20.984 33.1194 21.464 33.3114 21.864C33.5034 22.248 33.7594 22.536 34.0794 22.728C34.3994 22.92 34.7594 23.016 35.1594 23.016ZM51.5451 27.24C50.0411 27.24 48.7051 26.952 47.5371 26.376C46.3691 25.8 45.4491 25 44.7771 23.976C44.1211 22.936 43.7931 21.752 43.7931 20.424C43.7931 19.096 44.1211 17.92 44.7771 16.896C45.4491 15.872 46.3691 15.072 47.5371 14.496C48.7051 13.92 50.0411 13.632 51.5451 13.632C53.1451 13.632 54.5131 13.976 55.6491 14.664C56.7851 15.352 57.5691 16.304 58.0011 17.52L53.8011 19.584C53.5291 18.976 53.1931 18.536 52.7931 18.264C52.4091 17.992 51.9851 17.856 51.5211 17.856C51.1211 17.856 50.7451 17.952 50.3931 18.144C50.0571 18.336 49.7851 18.624 49.5771 19.008C49.3851 19.376 49.2891 19.848 49.2891 20.424C49.2891 21 49.3851 21.48 49.5771 21.864C49.7851 22.248 50.0571 22.536 50.3931 22.728C50.7451 22.92 51.1211 23.016 51.5211 23.016C51.9851 23.016 52.4091 22.88 52.7931 22.608C53.1931 22.336 53.5291 21.896 53.8011 21.288L58.0011 23.352C57.5691 24.568 56.7851 25.52 55.6491 26.208C54.5131 26.896 53.1451 27.24 51.5451 27.24ZM67.9963 27.384C66.6363 27.384 65.3723 27.168 64.2043 26.736C63.0523 26.304 62.0523 25.696 61.2043 24.912C60.3563 24.112 59.6923 23.176 59.2123 22.104C58.7483 21.032 58.5163 19.864 58.5163 18.6C58.5163 17.32 58.7483 16.152 59.2123 15.096C59.6923 14.024 60.3563 13.096 61.2043 12.312C62.0523 11.512 63.0523 10.896 64.2043 10.464C65.3723 10.032 66.6363 9.816 67.9963 9.816C69.3723 9.816 70.6363 10.032 71.7883 10.464C72.9403 10.896 73.9403 11.512 74.7883 12.312C75.6363 13.096 76.2923 14.024 76.7563 15.096C77.2363 16.152 77.4763 17.32 77.4763 18.6C77.4763 19.864 77.2363 21.032 76.7563 22.104C76.2923 23.176 75.6363 24.112 74.7883 24.912C73.9403 25.696 72.9403 26.304 71.7883 26.736C70.6363 27.168 69.3723 27.384 67.9963 27.384ZM67.9963 22.8C68.5243 22.8 69.0123 22.704 69.4603 22.512C69.9243 22.32 70.3243 22.048 70.6603 21.696C71.0123 21.328 71.2843 20.888 71.4763 20.376C71.6683 19.848 71.7643 19.256 71.7643 18.6C71.7643 17.944 71.6683 17.36 71.4763 16.848C71.2843 16.32 71.0123 15.88 70.6603 15.528C70.3243 15.16 69.9243 14.88 69.4603 14.688C69.0123 14.496 68.5243 14.4 67.9963 14.4C67.4683 14.4 66.9723 14.496 66.5083 14.688C66.0603 14.88 65.6603 15.16 65.3083 15.528C64.9723 15.88 64.7083 16.32 64.5163 16.848C64.3243 17.36 64.2283 17.944 64.2283 18.6C64.2283 19.256 64.3243 19.848 64.5163 20.376C64.7083 20.888 64.9723 21.328 65.3083 21.696C65.6603 22.048 66.0603 22.32 66.5083 22.512C66.9723 22.704 67.4683 22.8 67.9963 22.8ZM85.1241 27.24C83.9881 27.24 82.9321 26.968 81.9561 26.424C80.9961 25.864 80.2281 25.08 79.6521 24.072C79.0761 23.048 78.7881 21.832 78.7881 20.424C78.7881 19.016 79.0761 17.808 79.6521 16.8C80.2281 15.776 80.9961 14.992 81.9561 14.448C82.9321 13.904 83.9881 13.632 85.1241 13.632C86.2761 13.632 87.2201 13.88 87.9561 14.376C88.6921 14.856 89.2361 15.6 89.5881 16.608C89.9401 17.6 90.1161 18.872 90.1161 20.424C90.1161 21.992 89.9481 23.28 89.6121 24.288C89.2921 25.296 88.7641 26.04 88.0281 26.52C87.3081 27 86.3401 27.24 85.1241 27.24ZM86.4201 23.016C86.8201 23.016 87.1801 22.92 87.5001 22.728C87.8201 22.536 88.0761 22.248 88.2681 21.864C88.4601 21.464 88.5561 20.984 88.5561 20.424C88.5561 19.848 88.4601 19.376 88.2681 19.008C88.0761 18.624 87.8201 18.336 87.5001 18.144C87.1801 17.952 86.8201 17.856 86.4201 17.856C86.0201 17.856 85.6601 17.952 85.3401 18.144C85.0201 18.336 84.7641 18.624 84.5721 19.008C84.3801 19.376 84.2841 19.848 84.2841 20.424C84.2841 20.984 84.3801 21.464 84.5721 21.864C84.7641 22.248 85.0201 22.536 85.3401 22.728C85.6601 22.92 86.0201 23.016 86.4201 23.016ZM88.7241 27V25.224L88.7001 20.424L88.4601 15.624V9.192H93.8841V27H88.7241Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_11_256'>
          <rect width='93' height='29' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SearchIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
      />
    </svg>
  );
};

export const ThreeVerticalDotsIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
      />
    </svg>
  );
};

export const UserIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
      />
    </svg>
  );
};

export const EnvelopeIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
      />
    </svg>
  );
};

export const ChevronDownIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
    </svg>
  );
};

export const ChevronUpIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
    </svg>
  );
};

export const ArrowRightIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
    </svg>
  );
};

export const VerifiedIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <rect width='26' height='26' fill='url(#pattern0_10_170)' />
      <defs>
        <pattern id='pattern0_10_170' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_10_170' transform='scale(0.0104167)' />
        </pattern>
        <image
          id='image0_10_170'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export const LocationIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 53 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <path d='M53 0H1V52H53V0Z' fill='url(#pattern0_5_104)' />
      <defs>
        <pattern id='pattern0_5_104' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_5_104' transform='scale(0.0104167)' />
        </pattern>
        <image
          id='image0_5_104'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export const UserPencilIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <g clip-path='url(#clip0_5_110)'>
        <mask
          id='mask0_5_110'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='52'
          height='52'
        >
          <path d='M52 0H0V52H52V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_5_110)'>
          <path d='M52 -2H-2V52H52V-2Z' fill='url(#pattern0_5_110)' />
        </g>
      </g>
      <defs>
        <pattern id='pattern0_5_110' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_5_110' transform='scale(0.0104167)' />
        </pattern>
        <clipPath id='clip0_5_110'>
          <rect width='52' height='52' fill='white' />
        </clipPath>
        <image
          id='image0_5_110'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0ElEQVR4nO2c22tcVRSHt/VSL7GTtSaTOGudNFiHNrPWpF6iqMUb+C8kpUV89sEnQRD0wVJv/Qustr6J4AV8EnzzgtRLEURFX6QPEQRtsdQmxTSglT2dtGmTmJMzZ84+l/XBhtAOyTnfb5+19z5nn3HOMAzDMAzDMAzDMAzDMHLGrnr9VmnCfiE8KgTHhfGkEC51G+NJJfhGCY8owT7/2dDHWxomt480hfGwMJxTxgtxmv9sN6io0Qp9/IXlgSi6SRkOCsNCXPGrgiBcUsJDrZbbGvp8CoVEjZYQ/pBU/OorAo91RkfHQp9XIRCq3SUMf6Qlf0UIv05G0Al9fvnv+Zy+/BVtzq6EdZiYmLhRGb8boPzlK+FLGxPWQBkODlr+pUb42kAv5WJONWEhwwDO6/i2O0Kfd24QxsOZyb8cwpHQ550LWojbNrPISm8sgAVpNIZc1ZEm7M+89/dam2CvqzpCeDRUAEr4pqs6QnA8XADwlas6yngqVAB+0eeqjvopYbgStOiqjloAgQNgK0FBERuEw6L+MWK4MeANV3WUYF+4WRDOuqojjcaQMswHmILarYigq2FbBV+m9wx4KUP5i7vHarevOARDCQ9lVn4IXjHjVzE97a5Xws8HX/vxmD2SXIfO6OiY370wwADsofxGTEbQGVAIc+1xUCs9MdjZHBoRws/SLDu2HWWTtFpuq9+90NfNOsLzfsAVcTdYz0/I1PbaDn+7YnO7JmDez/NtqpnyirlNsNffv1GCr7s76PzV4Xt592f/b34XNc7uHhu7xXq8YRiGYRiGYRiGYRiGYcRkansN2oz3K9efFIaXhfE9IfhUGL4VwhPdLY2Ei771vjfixMX/g0+6n2V4SaLhJzSq3ze9A2omfoNXVNvN4YeV8AUl/HgQ+0WF4Xch/EgYnlOCPZV+RjDr3LXtaPgRJXhVGb/o9uQBP4xfI5Bz/mpRhgMdggedc1tcydnSpvrjwvBW9+tlMhauGz49g9+E8XVpwkPOuWtcWbgzQu69hD0XXDLHDuMXZXy+37FDGJ8RwtNK+GNnvH6vy5I21e5Wwncy3fHGaTf4abrZvDnJ+fvSdkXJIzzjJxUumy/cwHeV8d/wArHv5mdS/crPJAS/i6E7XSx0j8fV0hieSkP+QEOYbI7cIww/h5alacsnPC0TjdviehDGmZi/N70Q/E6FEF81oANvMN+bEcXmUeeu65XfWCH0PTAL1Z8uS63XPuUnCcHPjpLL98t8xn+qLl8YZ7z0RCEQ/plI/iSN7FSCv6suX3sDrpedJAS/TkgUQBb7+LUg8lfI3GQIcCChfNgTXham2i7uO60/llT+pUbwwdUh+PteQvj2FX+P8MVE8oO/18v56/mrw9zoSkjY85cRwu/DS8Ncyo8Rwkxf8nsBnAkvDvNTdtZra5SjVAgtTosgf5AhhJanOS0764edQtkpSwCSVc9PY7ZTtgCkDPKLGoCURX4RA5Ayye8d4NnQUjWnA27fi6w4CMGH4cViNeV7pqi+y99GDS8Y/6/NTTVHpksnf5kpxkgZ31eGv3Ig+0JPwln/rrASPLuZ94QLJ79MaN4H3DKjJt/kVxK1nh86ALSaX8QAxAbcdDD5gVHr+cUJQKzspI/JD4xaz893AJJx2fkP4eWD9q+9dPkAAAAASUVORK5CYII='
        />
      </defs>
    </svg>
  );
};

export const NotesIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <g clip-path='url(#clip0_5_120)'>
        <mask
          id='mask0_5_120'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='52'
          height='52'
        >
          <path d='M52 0H0V52H52V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_5_120)'>
          <path d='M55 -1H-3V57H55V-1Z' fill='url(#pattern0_5_120)' />
        </g>
      </g>
      <defs>
        <pattern id='pattern0_5_120' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_5_120' transform='scale(0.0104167)' />
        </pattern>
        <clipPath id='clip0_5_120'>
          <rect width='52' height='52' fill='white' />
        </clipPath>
        <image
          id='image0_5_120'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADfUlEQVR4nO1d3WpTQRA+V/Wm1s6kf9lJK0ixdSdRwdewiBQfQfAB9DEsWqrinfgMojfqS6hQvGzvRFDbKiKWyCYtFEmsek529my/D+YmhHa+79uZ2ZzknC0KAAAAAKgBluYbTh3d8Y6feeEtL/S1H7wVXlNHt5cXpprWeWaH5YWppnf01Dv+ocLdP0X/PfTEn52es847C1xoNq55x5+PE36AEZ/UTa5Y519rtB3dUuH9fxX/SOx7oZvWPGoJdZMrXvhnCfH7lRD+hpu8as2nVjjfHJ/ywh/Kin8kPl6cnZ2x5lUbqOPHFYp/WAmPrHnVApfnxqe9o29VG6COv7dnZmaL3NBpUcc7uq+O33qhvcqFk4GreUuFV5cajdMh2i2+7oU24/xv2utxdXRvuUVtM+EXF4tTXvhhyV1K93/E960J/j2f8Jp3tB0zl/4uix94X4zFF9/R68hkuwexOiwvL3zDJCdHr6KaEAaakfjd0HKG5bXIPGGVlwptROv5sduO/qUBV87RGau8wueNC/OkIzcgDB+7VcbdMHCH5Rbak2Vu6mht5Aao0DtLkl5oc9gQVkfvbQ3gNzEM2DElKeFCG22HgRt6/kHfXzUXvxe0E8EAa5KcdMAAgQHmq1BRAfZCKFqQvRhqEJgBAgPMV6GiAuyFULSgwSKE3+9carEUiaEj3FLHz7OfAYFokSjU0Xz2BhSJQ1Pnl3yCufNLPsHc+SWfYO78yiaIIWxsQNjqpWiChh2Q4xfZV0DuUcAAhgHWq1BRAfZCKFqQvRhqEJgBAgPMV6GiAuyFULSgtL4P6FR0vb/2M8DyU7BWcL2/9gaMPMFjAAOMoagAGFAKaEFc7xmAIXxCvw/Qiq73m28yRk1Aax4wQGCA+SpUVIC9EIoWZC+GGgRmgMAA81WoqAB7IRQtaLAIuD+gJMqurBR/FXcI3B+QALLfBRWJQ1Pnl3yCufNLPsHc+WEIc70NwP0B1gZkHsWoYU1QEw8YIDDAfBUqKsBeCEULshdDDQIzQGCA+SrUvCuAdq1JarJBX7J/dLGmHDEeXWz98G5NO+6O3IBwbEcVx0vlFj7W4+sDwrEd1oQ1tXC0HkX8ngG+GAvHdpiTllSCXkY/R6ZngtDGSW5HvndKH61HF/8oQt8LJ0eEHcDJ2KLSbo+ro7VoPR8AAAAAAAAAAAAAAAAocsAviuK+BCN3TWYAAAAASUVORK5CYII='
        />
      </defs>
    </svg>
  );
};

export const HandshakeIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <g clip-path='url(#clip0_5_130)'>
        <mask
          id='mask0_5_130'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='52'
          height='52'
        >
          <path d='M52 0H0V52H52V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_5_130)'>
          <path
            d='M62.8846 23.9191L24 -10L-9.91915 28.8846L28.9654 62.8037L62.8846 23.9191Z'
            fill='url(#pattern0_5_130)'
          />
        </g>
      </g>
      <defs>
        <pattern id='pattern0_5_130' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_5_130' transform='scale(0.0104167)' />
        </pattern>
        <clipPath id='clip0_5_130'>
          <rect width='52' height='52' fill='white' />
        </clipPath>
        <image
          id='image0_5_130'
          width='96'
          height='96'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

export const TwitterXIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const InstagramIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_17_27)'>
        <path
          d='M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z'
          fill='currentColor'
        />
        <path
          d='M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z'
          fill='currentColor'
        />
        <path
          d='M39.6937 11.1844C39.6937 12.7782 38.4 14.0625 36.8156 14.0625C35.2219 14.0625 33.9375 12.7688 33.9375 11.1844C33.9375 9.59065 35.2313 8.30627 36.8156 8.30627C38.4 8.30627 39.6937 9.60003 39.6937 11.1844Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_17_27'>
          <rect width='48' height='48' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FacebookIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.66667 4C5.196 4 4 5.196 4 6.66667V25.3333C4 26.804 5.196 28 6.66667 28H15.4948H19.2188H25.3333C26.804 28 28 26.804 28 25.3333V6.66667C28 5.196 26.804 4 25.3333 4H6.66667ZM6.66667 7.26667C6.66667 6.9353 6.9353 6.66667 7.26667 6.66667H24.7334C25.0648 6.66667 25.3334 6.93525 25.3334 7.26658L25.3359 24.7333C25.3359 25.0647 25.0673 25.3333 24.7359 25.3333H19.8188C19.4874 25.3333 19.2188 25.0647 19.2188 24.7333V20.6469C19.2188 20.3155 19.4874 20.0469 19.8188 20.0469H21.8449C22.1465 20.0469 22.4013 19.8229 22.4399 19.5237L22.7538 17.0909C22.8001 16.732 22.5206 16.4141 22.1588 16.4141H19.8396C19.5082 16.4141 19.2396 16.1454 19.2396 15.8141V14.099C19.2396 13.0483 19.5324 12.3385 21.0391 12.3385H22.3427C22.6741 12.3385 22.9427 12.0699 22.9427 11.7385V9.63819C22.9427 9.33043 22.7099 9.07183 22.4032 9.04677C21.6551 8.98567 20.9049 8.95619 20.1536 8.95833C17.3883 8.95833 15.4948 10.6461 15.4948 13.7448V15.8193C15.4948 16.1506 15.2262 16.4193 14.8948 16.4193H12.9698C12.6384 16.4193 12.3698 16.6879 12.3698 17.0193V19.4521C12.3698 19.7835 12.6384 20.0521 12.9698 20.0521H14.8948C15.2262 20.0521 15.4948 20.3207 15.4948 20.6521V24.7333C15.4948 25.0647 15.2262 25.3333 14.8948 25.3333H7.26667C6.9353 25.3333 6.66667 25.0647 6.66667 24.7333V7.26667Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const UserCircleIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  );
};

export const PdfIcon: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.75 4C7.75 2.20508 9.20508 0.75 11 0.75H27C27.1212 0.75 27.2375 0.798159 27.3232 0.883885L38.1161 11.6768C38.2018 11.7625 38.25 11.8788 38.25 12V36C38.25 37.7949 36.7949 39.25 35 39.25H11C9.20507 39.25 7.75 37.7949 7.75 36V4Z'
        fill='white'
        stroke='#D0D5DD'
        strokeWidth='1.5'
      />
      <path d='M27 0.5V8C27 10.2091 28.7909 12 31 12H38.5' stroke='#D0D5DD' strokeWidth='1.5' />
      <rect x='1' y='18' width='26' height='16' rx='2' fill='#D92D20' />
      <path
        d='M4.8323 30V22.7273H7.70162C8.25323 22.7273 8.72316 22.8326 9.11142 23.0433C9.49967 23.2517 9.7956 23.5417 9.9992 23.9134C10.2052 24.2827 10.3082 24.7088 10.3082 25.1918C10.3082 25.6747 10.204 26.1009 9.99565 26.4702C9.78732 26.8395 9.48547 27.1271 9.09011 27.3331C8.69712 27.5391 8.22127 27.642 7.66255 27.642H5.83372V26.4098H7.41397C7.7099 26.4098 7.95375 26.3589 8.14551 26.2571C8.33964 26.1529 8.48405 26.0097 8.57875 25.8274C8.67581 25.6428 8.72434 25.4309 8.72434 25.1918C8.72434 24.9503 8.67581 24.7396 8.57875 24.5597C8.48405 24.3774 8.33964 24.2365 8.14551 24.1371C7.95138 24.0353 7.70517 23.9844 7.40687 23.9844H6.36994V30H4.8323ZM13.885 30H11.3069V22.7273H13.9063C14.6379 22.7273 15.2676 22.8729 15.7955 23.1641C16.3235 23.4529 16.7295 23.8684 17.0136 24.4105C17.3 24.9527 17.4433 25.6013 17.4433 26.3565C17.4433 27.1141 17.3 27.7652 17.0136 28.3097C16.7295 28.8542 16.3211 29.272 15.7884 29.5632C15.2581 29.8544 14.6237 30 13.885 30ZM12.8445 28.6825H13.8211C14.2757 28.6825 14.658 28.602 14.9681 28.4411C15.2806 28.2777 15.515 28.0256 15.6713 27.6847C15.8299 27.3414 15.9092 26.8987 15.9092 26.3565C15.9092 25.8191 15.8299 25.38 15.6713 25.0391C15.515 24.6982 15.2818 24.4472 14.9717 24.2862C14.6615 24.1252 14.2792 24.0447 13.8247 24.0447H12.8445V28.6825ZM18.5823 30V22.7273H23.3976V23.995H20.1199V25.728H23.078V26.9957H20.1199V30H18.5823Z'
        fill='white'
      />
    </svg>
  );
};
