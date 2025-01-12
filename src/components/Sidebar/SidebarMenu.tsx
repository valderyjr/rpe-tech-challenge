import { ISidebarItem, SidebarItem } from "./SidebarItem";

export type FullSidebarItem = ISidebarItem & { id: string; name: string };

type SidebarMenuProps = {
  items: Array<FullSidebarItem>;
  selectedItemId: string;
  onClickItem: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => void;
};

export function SidebarMenu({
  items,
  selectedItemId,
  onClickItem,
}: SidebarMenuProps) {
  return (
    <ul className="w-full flex flex-col gap-2">
      {items.map((item) => (
        <li key={`sidebar-item-${item.id}`}>
          <SidebarItem
            href={item.href}
            isSelected={item.id === selectedItemId}
            onClick={(e) => onClickItem(e, item.id)}
          >
            {item.name}
          </SidebarItem>
        </li>
      ))}
    </ul>
  );
}
