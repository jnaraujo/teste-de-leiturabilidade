interface IColors {
  primary: string;
  onPrimary: string;

  secondary: string;
  onSecondary: string;

  surface: string;
  onSurface: string;
  onSurfaceSecondary: string;

  background: string;
  onBackground: string;

  semantic: {
    link: string;
    error: string;
  };
}

export type { IColors };
