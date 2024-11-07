import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitve from "@radix-ui/react-select";
import classNames from "classnames";
import styles from "./select.module.css";

export const Select = ({
  items,
  placeholder,
  value,
  onValueChange,
}: {
  items: { id: string; label: string }[];
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
}) => (
  <SelectPrimitve.Root value={value} onValueChange={onValueChange}>
    <SelectPrimitve.Trigger className={classNames("bodySmall", styles.trigger)}>
      <SelectPrimitve.Value placeholder={placeholder} />
      <SelectPrimitve.Icon className={styles.icon}>
        <ChevronDownIcon />
      </SelectPrimitve.Icon>
    </SelectPrimitve.Trigger>
    <SelectPrimitve.Portal>
      <SelectPrimitve.Content className={styles.content}>
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
                  <CheckIcon />
                </SelectPrimitve.ItemIndicator>
              </SelectPrimitve.Item>
            ))}
          </SelectPrimitve.Group>
        </SelectPrimitve.Viewport>
      </SelectPrimitve.Content>
    </SelectPrimitve.Portal>
  </SelectPrimitve.Root>
);
