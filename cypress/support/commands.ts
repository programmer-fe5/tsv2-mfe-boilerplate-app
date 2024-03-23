import { App, DefineComponent } from 'vue';
import { mount } from '@cypress/vue';
import { registerComponents } from '@/utils';
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command';

addCompareSnapshotCommand({
  errorThreshold: 0.1,
});

Cypress.Commands.add('mount', (component: DefineComponent, options = {}) => {
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {};
  options.global.stubs['transition'] = false;
  options.global.components = options.global.components || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push({
    install(app: App) {
      registerComponents(app);
    },
  });

  return mount(component, options);
});

Cypress.Commands.add('getSection', (section) => {
  cy.get(`[data-ts-section="${section}"]`);
});

Cypress.Commands.add('getByName', (name) => {
  cy.get(`[data-ts-name="${name}"]`);
});

Cypress.Commands.add('login', () => {
  const user = {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTRjNDI1M2RkMTAxN2YyODY4OTU3MiIsImNvbXBhbnkiOiI2NWVhNzhhYmY0NTgyNTc4NWI2OGEyZDciLCJjb21wYW55Q29kZSI6IjAwMHYyIiwic2Vzc2lvbiI6IjY1ZWE4M2JjZGRhNWY4OTI4MDA5MTJmNyIsImlhdCI6MTcwOTg2Nzk2NX0.55us-qRS19o--2GYcST2LSUN1MzZsZMBQNGyZuI1d5M',
  };

  localStorage.setItem('user', JSON.stringify(user));
});
