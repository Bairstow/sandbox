const tickMultipleOf = tickCount => (Game.time % tickCount == 0 ? true : false);

export const executeByTickCount = tickCount => executors => {
  if (tickMultipleOf(tickCount)) {
    executors.forEach(data => {
      const { executor, restArgs } = data;
      for (const name in restArgs) {
        console.log('Argument: ', name);
      }
      executor(...restArgs);
    });
  }
};
