export interface Color {
  label: string;
  backgroundColor: string;
  backgroundContrastColor: 'text-contrast-black' | 'text-contrast-white';
  textColor: string;
}

export const colors: Color[] = [
  {
    label: 'red',
    backgroundColor: 'bg-red-500',
    backgroundContrastColor: 'text-contrast-white',
    textColor: 'text-red-500'
  },
  {
    label: 'green',
    backgroundColor: 'bg-green-500',
    backgroundContrastColor: 'text-contrast-white',
    textColor: 'text-green-500'
  },
  {
    label: 'amber',
    backgroundColor: 'bg-amber-500',
    backgroundContrastColor: 'text-contrast-black',
    textColor: 'text-amber-500'
  },
  {
    label: 'orange',
    backgroundColor: 'bg-orange-500',
    backgroundContrastColor: 'text-contrast-black',
    textColor: 'text-orange-500'
  },
  {
    label: 'deep-orange',
    backgroundColor: 'bg-deep-orange-500',
    backgroundContrastColor: 'text-contrast-white',
    textColor: 'text-deep-orange-500'
  },
  {
    label: 'purple',
    backgroundColor: 'bg-purple-500',
    backgroundContrastColor: 'text-contrast-white',
    textColor: 'text-purple-500'
  },
  {
    label: 'deep-purple',
    backgroundColor: 'bg-deep-purple-500',
    backgroundContrastColor: 'text-contrast-white',
    textColor: 'text-deep-purple-500'
  },
  {
    label: 'cyan',
    backgroundColor: 'bg-cyan-500',
    backgroundContrastColor: 'text-contrast-black',
    textColor: 'text-cyan-500'
  },
  {
    label: 'teal',
    backgroundColor: 'bg-teal-500',
    backgroundContrastColor: 'text-contrast-white',
    textColor: 'text-teal-500'
  },
  {
    label: 'gray',
    backgroundColor: 'bg-gray-500',
    backgroundContrastColor: 'text-contrast-black',
    textColor: 'text-gray-500'
  }
];
