import { recoilPersist } from 'recoil-persist';

const persistKey = 'recoil-persist';

/**
 *  Configure persistance of recoil, to use you need to add an effect to any atom you want to be persisted e.g.:
 const counterState = atom({
      key: 'count',
      default: 0,
      effects: [persistAtom],
  })
 */
export const { persistAtom } = recoilPersist({
    key: persistKey
});

/**
 * Purge the recoil persistance.
 */
export function purgeRecoilPersist() {
    window?.localStorage?.removeItem(persistKey);
}
