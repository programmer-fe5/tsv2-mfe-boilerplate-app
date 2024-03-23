import { reactive } from 'vue';
import { BreadcrumbMenu } from 'tsv2-library/dist/src/components/v2/Breadcrumb/Breadcrumb.vue';

export interface BreadcrumbStore {
  breadcrumbs: BreadcrumbMenu[];
  setBreadcrumbs: (breadrumb: BreadcrumbMenu[]) => void;
}

const breadcrumbs = reactive<BreadcrumbMenu[]>([]);

const useBreadcrumbStore = (): BreadcrumbStore => {
  const setBreadcrumbs = (newbreadrumb: BreadcrumbMenu[]): void => {
    Object.assign(breadcrumbs, newbreadrumb);
  };

  return {
    breadcrumbs,
    setBreadcrumbs,
  };
};

export default useBreadcrumbStore;
