interface Props<T> {
  list: T[];
  renderList: (list: T) => React.ReactNode;
  extractId: (list: T) => string;
  className?: string;
  classNameItem?: string;
  numProductsToShow?: number;
}

export default function ItemList<T>({
  renderList,
  extractId,
  list,
  className,
  classNameItem,
  numProductsToShow = 6
}: Props<T>) {
  return (
    <ul className={className}>
      {list.slice(0, numProductsToShow).map((item, i) => (
        <li key={`${i} - ${extractId(item)}`} className={classNameItem}>
          {renderList(item)}
        </li>
      ))}
    </ul>
  )
}