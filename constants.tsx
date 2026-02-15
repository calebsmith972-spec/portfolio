
import { Project, Capability } from './types';

// List of portfolio projects
export const PROJECTS: Project[] = [
  { id: '1', name: "LOLA'S FINE HOT SAUCE", logo: 'images/lola-placeholder.png', url: 'https://lolasfinehotsauce.com/' },
  { id: '2', name: 'ALIGN YOGA', logo: 'images/align-dsm.png', url: 'https://aligndsm.com/' },
  { id: '3', name: 'ACAP HEALTHWORKS', logo: 'images/acap-healthworks.png', url: 'https://www.acaphealthworks.com/' },
  { id: '4', name: 'PINION PATHWAYS', logo: 'images/pinion-pathways.png', url: 'https://pinionpathways.com/' },
  { id: '5', name: 'KRM CUSTOM HOMES', logo: 'images/krm-custom-homes.png', url: 'https://krmcustomhomes.com/' },
  { id: '6', name: 'IVE MOTORS', logo: 'images/ime.png', url: 'https://innovative-me.com/' },
  { id: '7', name: 'WG LOGISTICS', logo: 'images/wg-provisions.png', url: 'https://wgprovisions.com/' },
  { id: '8', name: 'ROGERS OUTDOOR', logo: 'images/rogers-outdoors.png', url: 'https://rogers-outdoor.com/' },
];

// List of professional capabilities
export const CAPABILITIES: Capability[] = [
  {
    title: 'WEB STUFF',
    description: 'Building websites that work. Sometimes even on the first try. Scalable, fast, and remarkably bug-free.'
  },
  {
    title: 'DESIGN STUFF',
    description: 'Displays, pamphlets, products, from digital to real life'
  },
  {
    title: 'MUSIC STUFF',
    description: 'When my eyes hurt, I close them and make noises. Here are a few projects where those noises actually ended up sounding like music.'
  }
];
