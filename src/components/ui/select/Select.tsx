import cn from 'clsx';
import { useState } from 'react';

import styles from './Select.module.scss';
import { ISelect } from './select.interface';

function Select<K>({ data, onChange, value, title }: ISelect<K>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.select}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title && <b>{title}:</b>}
        {value?.label || 'Default'}
      </button>
      {isOpen && (
        <ul>
          {data.map((item) => (
            <li
              key={item.key?.toString()}
              className={cn({
                [styles.active]: item.key === value?.key,
              })}
            >
              <button
                onClick={() => {
                  onChange(item);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
