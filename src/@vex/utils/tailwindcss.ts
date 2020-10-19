import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { TailwindCSS } from './tailwindcss.interface';

const theme = resolveConfig<TailwindCSS>(tailwindConfig).theme;

export default theme;
