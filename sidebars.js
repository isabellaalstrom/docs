module.exports = {
  someSidebar: {
    Documentation: [
      'index',
      {
        type: 'category',
        label: 'Getting started',
        items: ['started/installation', 'started/basic', 'started/example', 'started/hacs']
      },
    ],
    API: [
      'api/api',
      {
        type: 'category',
        label: 'Fluent',
        items: ['api/fluent/entities', 'api/fluent/state']
      },
      {
        type: 'category',
        label: 'Standard',
        items: ['api/standard/getstate']
      },
    ]

  },
};
