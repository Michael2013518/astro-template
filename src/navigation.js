import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: getPermalink('/'),
      // links: [
      //   {
      //     text: 'SaaS',
      //     href: getPermalink('/homes/saas'),
      //   },
      //   {
      //     text: 'Startup',
      //     href: getPermalink('/homes/startup'),
      //   },
      //   {
      //     text: 'Mobile App',
      //     href: getPermalink('/homes/mobile-app'),
      //   },
      //   {
      //     text: 'Personal',
      //     href: getPermalink('/homes/personal'),
      //   },
      // ],
    },
    {
      text: 'PRODUCTS',
      href: getPermalink('/products'),
      links: [
        {
          text: 'Bracket',
          href: getPermalink('/products#bracket'),
        },
        {
          text: 'Condenser Support',
          href: getPermalink('/products#condenser'),
        },
        {
          text: 'Diffuser & Grill',
          href: getPermalink('/products#grill'),
        },
        {
          text: 'Flexible Duct',
          href: getPermalink('/products#duct'),
        },
        {
          text: 'Tape',
          href: getPermalink('/products#tapes'),
        },
        {
          text: 'Wall vent',
          href: getPermalink('/products#tapes'),
        },
      ]
    },
    {
      text: 'WHY US',
      href: getPermalink('/whyus'),
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   },
      //   {
      //     text: 'About us',
      //     href: getPermalink('/about'),
      //   },
      //   {
      //     text: 'Contact',
      //     href: getPermalink('/contact'),
      //   },
      //   {
      //     text: 'Terms',
      //     href: getPermalink('/terms'),
      //   },
      //   {
      //     text: 'Privacy policy',
      //     href: getPermalink('/privacy'),
      //   },
      // ],
    },
    {
      text: 'ABOUT US',
      href: getPermalink('/about'),
    },
    {
      text: 'CONTACT',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    { text: 'Get in touch', href: getPermalink('/contact') }
  ],
};

export const footerData = {
  links: [
    {
      title: ' ',
      links: [
        { text: '', href: '' }
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Why us', href: '/whyus' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Bracket', href: '/products#bracket' },
        { text: 'Condenser Support', href: '/products#condenser' },
        { text: 'Diffuser & Grill', href: '/products#grill' },
        { text: 'Flexible Duct', href: '/products#duct' },
        { text: 'Tape', href: '/products#tapes' },
        { text: 'Wall vent', href: '#' }
      ],
    },
  ],
  secondaryLinks: [
    { text: 'UOMAZ, your trusted sourcing agent for all your ventilation spare parts (grill, duct, trunking, bracket) LED lightings (down light, strip light, work light, panel light) building materials (glass, marble, door, window, shower box) needs', href: getPermalink('/about') },
  ],
  socialLinks: [
    { ariaLabel: 'email', icon: 'tabler:mail', href: 'mailto:sales@uomaz.nz' },
    { ariaLabel: 'mobile', icon: 'tabler:phone', href: 'tel:+64 02108967978' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/6402108967978?text=UOMAZ%20Service' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    
  © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="/"> UOMAZ</a> · All rights reserved.
  `,
};
