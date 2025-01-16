import * as SelectPrimitve from "@radix-ui/react-select";
import classNames from "classnames";
import { CheckIcon, ChevronDownIcon, LanguagesIcon } from "lucide-react";
import styles from "./select.module.css";

export const Select = ({
  items,
  placeholder,
  value,
  onValueChange,
}: {
  items: { id: string; label: string }[];
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
}) => (
  <SelectPrimitve.Root value={value} onValueChange={onValueChange}>
    <SelectPrimitve.Trigger className={classNames("bodySmall", styles.trigger)}>
      <SelectPrimitve.Value placeholder={placeholder} />
      <SelectPrimitve.Icon className={styles.icon}>
        <ChevronDownIcon size={15} />
      </SelectPrimitve.Icon>
    </SelectPrimitve.Trigger>
    <SelectPrimitve.Portal>
      <SelectContent items={items} />
    </SelectPrimitve.Portal>
  </SelectPrimitve.Root>
);

export const LanguageSelect = ({
  items,
  value,
  onValueChange,
}: {
  items: { id: string; label: string }[];
  value: string;
  onValueChange: (value: string) => void;
}) => (
  <SelectPrimitve.Root value={value} onValueChange={onValueChange}>
    <SelectPrimitve.Trigger
      className={classNames(styles.trigger, styles.language)}
    >
      <LanguagesIcon size={15} />
    </SelectPrimitve.Trigger>
    <SelectPrimitve.Portal>
      <SelectContent items={items} position="popper" />
    </SelectPrimitve.Portal>
  </SelectPrimitve.Root>
);

const SelectContent = ({
  items,
  position,
}: {
  items: { id: string; label: string }[];
  position?: "popper" | "item-aligned";
}) => (
  <SelectPrimitve.Content
    className={styles.content}
    position={position}
    sideOffset={8}
  >
    <SelectPrimitve.Viewport className={styles.viewport}>
      <SelectPrimitve.Group>
        {items.map((item) => (
          <SelectPrimitve.Item
            key={item.id}
            className={classNames("bodySmall", styles.item)}
            value={item.id}
          >
            <SelectPrimitve.ItemText>{item.label}</SelectPrimitve.ItemText>
            <SelectPrimitve.ItemIndicator className={styles.icon}>
              <CheckIcon size={15} />
            </SelectPrimitve.ItemIndicator>
          </SelectPrimitve.Item>
        ))}
      </SelectPrimitve.Group>
    </SelectPrimitve.Viewport>
  </SelectPrimitve.Content>
);
