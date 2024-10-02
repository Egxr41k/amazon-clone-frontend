'use client';

import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';

import styles from './AdminList.module.scss';
import AdminListItem from './AdminListItem';
import { IListItem } from './admin-list.interface';

interface IAdminList {
  listItems?: IListItem[];
  isLoading: boolean;

  removeHandler?: (id: number) => void;
}

const AdminList: FC<IAdminList> = ({
  isLoading,
  removeHandler,
  listItems = [],
}) => {
  return (
    <div>
      {isLoading ? (
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : listItems.length ? (
        listItems.map((listItem) => (
          <AdminListItem
            key={listItem.id}
            removeHandler={
              removeHandler ? () => removeHandler(listItem.id) : undefined
            }
            listItem={listItem}
          />
        ))
      ) : (
        <div className={styles.notFound}>Elements not found</div>
      )}
    </div>
  );
};

export default AdminList;
