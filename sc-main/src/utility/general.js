export const createExecutionDefinition = (executor, ...rest) => ({
  executor,
  restArgs: rest,
});
