export const registryConfig = {
  /**
   * Registry namespace identifier for shadcn CLI
   */
  namespace: process.env.REGISTRY_NAMESPACE || "@shadcn",
  /**
   * URL pattern for resolving namespaced components
   */
  namespaceUrl:
    process.env.REGISTRY_NAMESPACE_URL || "https://ui.shadcn.com/r/{name}.json",
};
