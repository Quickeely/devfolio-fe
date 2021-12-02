const PATHS = {
  project: {
    home: "/",
    detail: "/project/:id",
  },
  magazine: {
    home: "/magazine",
    detail: "/magazine/:id",
  },
};

const Logo = () => <img alt="logo" src="/assets/logo.png" />;
const VelogLogo = () => (
  <svg width="24" height="24" viewBox="0 0 192 192" fill="none">
    <rect width="192" height="192" fill="currentColor" rx="24"></rect>
    <path
      d="M49 65.48V57.92C53.8 56.36 59.44 54.68 65.92 52.88C72.4 50.96 76.78 50 79.06 50C84.1 50 87.1 52.4 88.06 57.2L99.76 123.62C103.48 118.7 106.54 114.56 108.94 111.2C112.66 105.92 116.08 99.86 119.2 93.02C122.44 86.18 124.06 80.06 124.06 74.66C124.06 71.42 123.16 68.84 121.36 66.92C119.68 64.88 116.5 62.3 111.82 59.18C116.62 53.06 122.62 50 129.82 50C133.66 50 136.84 51.14 139.36 53.42C142 55.7 143.32 59.06 143.32 63.5C143.32 70.94 140.2 80.24 133.96 91.4C127.84 102.44 116.02 119.06 98.5 141.26L80.68 142.52L67 65.48H49Z"
      fill="white"
    ></path>
  </svg>
);
const VELOG_URL = "https://velog.io/@devfolio";

export { PATHS, Logo, VelogLogo, VELOG_URL };
