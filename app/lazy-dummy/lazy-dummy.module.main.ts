export * from './lazy-dummy.module.ngfactory';

export function create(parent: any) {
  return this.LazyDummyModuleNgFactory.create(parent);
}
