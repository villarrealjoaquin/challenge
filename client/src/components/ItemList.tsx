interface Props<T> {
  list: T[];
  renderList: (list: T) => React.ReactNode;
  extractId: (list: T) => string;
  className?: string;
  classNameItem?: string;
}

export default function ItemList<T>({
  renderList,
  extractId,
  list,
  className,
  classNameItem
}: Props<T>) {
  return (
    <ul className={className}>
      {list.map((item, i) => (
        <li key={`${i} - ${extractId(item)}`} className={classNameItem}>
          {renderList(item)}
        </li>
      ))}
    </ul>
  )
}