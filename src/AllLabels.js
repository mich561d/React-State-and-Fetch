import React from "react"

export default function AllLabels(props) {
  const { labels } = props;
  return labels.map(label => <th key={label}>{label}</th>);
}
