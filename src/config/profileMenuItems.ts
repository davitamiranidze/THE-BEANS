export type ProfileMenuItem =
  | {
      label: string;
      type: "link";
      to: string;
    }
  | {
      label: string;
      type: "action";
      onClick: () => void;
      danger?: boolean;
    };

export const PROFILE_MENU_ITEMS: ProfileMenuItem[] = [
  {
    label: "Profile",
    type: "link",
    to: "/profile",
  },
  {
    label: "Settings",
    type: "link",
    to: "/settings",
  },
  {
    label: "Logout",
    type: "action",
    onClick: () => {}, // inject real logout later
    danger: true,
  },
];
