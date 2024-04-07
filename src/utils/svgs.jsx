const DropdownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={5}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="m.152 0 5 5 5-5h-10Z" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M3.486 4.183h18v2h-18v-2Zm0 7h12v2h-12v-2Zm0 7h18v2h-18v-2Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.486.183h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.914 5H17.5a1 1 0 1 1 0 2H3.914l3.243 3.243a1 1 0 1 1-1.415 1.414L1.5 7.414a2 2 0 0 1 0-2.828L5.742.343a1 1 0 1 1 1.415 1.414L3.914 5Z"
    />
  </svg>
);
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.086 5H1.5a1 1 0 0 0 0 2h13.586l-3.243 3.243a1 1 0 0 0 1.415 1.414L17.5 7.414a2 2 0 0 0 0-2.828L13.258.343a1 1 0 1 0-1.415 1.414L15.086 5Z"
    />
  </svg>
);

const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.75}
      fillRule="evenodd"
      d="M20.587 0a6.742 6.742 0 0 1 6.748 6.733v10.534c0 3.72-3.027 6.733-6.748 6.733H7.415C3.693 24 .668 20.987.668 17.267V6.733A6.734 6.734 0 0 1 7.415 0h13.172Zm2.121 8.72.107-.107A1.031 1.031 0 0 0 22.8 7.28a1.121 1.121 0 0 0-.705-.347c-.28-.014-.547.08-.748.267L15.335 12a2.088 2.088 0 0 1-2.667 0l-6-4.8c-.415-.307-.988-.267-1.333.093-.36.36-.4.934-.095 1.334l.175.173 6.066 4.733a4.191 4.191 0 0 0 2.6.907c.946 0 1.867-.32 2.612-.907l6.015-4.813Z"
      clipRule="evenodd"
    />
  </svg>
);

export { MenuIcon, DropdownIcon, ArrowLeft, ArrowRight, MailIcon };
