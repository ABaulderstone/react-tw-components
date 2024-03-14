type TailwindColorShades =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
type TailwindColors =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "stone"
  | "neutral"
  | "zinc"
  | "gray"
  | "slate";

export type TWColorNumber = `${TailwindColors}-${TailwindColorShades}`;
export type TWBGColor = `bg-${TWColorNumber}`;
