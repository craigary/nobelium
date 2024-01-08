// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (gTag, url) => {
  window.gtag('config', gTag, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
