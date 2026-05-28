/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Capability {
  id: string;
  title: string;
  description: string;
  image: string;
  span?: string; // Tailwind grid span
}

export interface Ecosystem {
  id: string;
  title: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  longDescription: string;
  client: string;
  date: string;
  location: string;
  equipment: string[];
  services: string[];
  extraImages?: string[];
}
