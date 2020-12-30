export interface Color {
  label: string;
  backgroundColor: string;
  backgroundContrastColor: 'text-contrast-black' | 'text-contrast-white';
  textColor: string;
}

export const colors: Color[] = [
  
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
