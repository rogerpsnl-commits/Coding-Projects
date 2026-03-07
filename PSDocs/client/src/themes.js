export const themes = [
  {
    id: 'navy',
    label: 'Navy',
    vars: {
      '--brand-50':  '#f4f5fb',
      '--brand-100': '#e5e7f5',
      '--brand-200': '#c5cae8',
      '--brand-300': '#8892cc',
      '--brand-400': '#5d6ab5',
      '--brand-500': '#424fa0',
      '--brand-600': '#333e8a',
      '--brand-700': '#242e72',
      '--brand-800': '#1a2260',
      '--brand-900': '#111850',
    },
  },
  {
    id: 'charcoal',
    label: 'Charcoal',
    vars: {
      '--brand-50':  '#f7f7f8',
      '--brand-100': '#ebebef',
      '--brand-200': '#d5d5df',
      '--brand-300': '#b0b0c0',
      '--brand-400': '#8080a0',
      '--brand-500': '#6c6c89',
      '--brand-600': '#55556d',
      '--brand-700': '#3d3d52',
      '--brand-800': '#2a2a38',
      '--brand-900': '#1d1d28',
    },
  },
  {
    id: 'amber',
    label: 'Amber',
    vars: {
      '--brand-50':  '#fff8f2',
      '--brand-100': '#feecd9',
      '--brand-200': '#fcd5aa',
      '--brand-300': '#f9a96a',
      '--brand-400': '#f57c30',
      '--brand-500': '#e65f18',
      '--brand-600': '#c44c10',
      '--brand-700': '#9e3b0c',
      '--brand-800': '#7a2c09',
      '--brand-900': '#521d06',
    },
  },
  {
    id: 'forest',
    label: 'Forest',
    vars: {
      '--brand-50':  '#f2fbf4',
      '--brand-100': '#dff5e4',
      '--brand-200': '#b8e8c2',
      '--brand-300': '#7fd49a',
      '--brand-400': '#44bb6a',
      '--brand-500': '#2a9e50',
      '--brand-600': '#1f813f',
      '--brand-700': '#186632',
      '--brand-800': '#124e27',
      '--brand-900': '#0c3319',
    },
  },
  {
    id: 'crimson',
    label: 'Crimson',
    vars: {
      '--brand-50':  '#fff2f4',
      '--brand-100': '#ffe0e4',
      '--brand-200': '#ffc0c8',
      '--brand-300': '#ff8c9d',
      '--brand-400': '#f95070',
      '--brand-500': '#e02050',
      '--brand-600': '#be1040',
      '--brand-700': '#9a0c33',
      '--brand-800': '#780828',
      '--brand-900': '#500519',
    },
  },
  {
    id: 'teal',
    label: 'Teal',
    vars: {
      '--brand-50':  '#f0fbfb',
      '--brand-100': '#d6f4f4',
      '--brand-200': '#a8e8e9',
      '--brand-300': '#66d3d6',
      '--brand-400': '#2cb8bc',
      '--brand-500': '#199aa0',
      '--brand-600': '#117c82',
      '--brand-700': '#0c6268',
      '--brand-800': '#094c50',
      '--brand-900': '#063335',
    },
  },
];

export function applyTheme(themeId) {
  const theme = themes.find((t) => t.id === themeId) ?? themes[0];
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  localStorage.setItem('psdocs-theme', themeId);
  return theme;
}

export function loadSavedTheme() {
  const saved = localStorage.getItem('psdocs-theme') ?? 'navy';
  applyTheme(saved);
  return saved;
}
