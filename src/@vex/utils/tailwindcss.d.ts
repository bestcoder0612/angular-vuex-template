declare module 'tailwindcss/resolveConfig' {

  function resolveConfig<T>(config: T): T;

  export default resolveConfig;

}
