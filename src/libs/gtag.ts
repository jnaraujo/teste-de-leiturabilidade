export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageview = (url: string) => {
  if (typeof window === "undefined") return;

  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type EventProps = {
  action: string;
  category: string;
  label: string;
  value: string;
};
export const event = ({ action, category, label, value }: EventProps) => {
  if (typeof window === "undefined") return;

  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
