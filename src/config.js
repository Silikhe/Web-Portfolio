module.exports = {
  email: 'silikhesilas@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/silikhe',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_silikhe',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/silikhesilas',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/silas-silikhe-a3b7a7198',
    },
    {
      name: 'Codepen',
      url: 'https://stackoverflow.com/users/15318393/silikhe',
    },
    // {
    //   name: 'Figma',
    //   url: 'https://stackoverflow.com/users/15318393/silikhe',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    // {
    //   name: 'UI Kits',
    //   url: '/#contact',
    // },
    {
      name: 'Blogs',
      url: 'https://medium.com/@silikhesilas',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
