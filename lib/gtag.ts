// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (gTag: string, page_path?: string) => {
  // @ts-ignore
  window.gtag('config', gTag, { page_path })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
