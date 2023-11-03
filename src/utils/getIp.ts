/*
 * Utility file for getting & printing IP addresses
 */

import os from 'os';

import axios from 'axios';

/**
 * Retrieves the public IP address of the server.
 * @returns {Promise<string>} A Promise that resolves with the public IP address.
 * @throws {Error} If unable to retrieve the public IP address.
 */
export async function getPublicIpAddress(): Promise<string> {
  try {
    const response = await axios.get('https://api.ipify.org');
    return response.data;
  } catch (error) {
    throw new Error('Unable to retrieve public IP address');
  }
}

/**
 * Retrieves the private (local) IP address of the server.
 * @returns {string} The private IP address.
 */
export function getPrivateIpAddress() {
  const interfaces = os.networkInterfaces();

  for (const key in interfaces) {
    const iface = interfaces[key];

    if (iface) {
      for (let i = 0; i < iface.length; i++) {
        const { address, family, internal } = iface[i];

        if (family === 'IPv4' && !internal) {
          return address;
        }
      }
    }
  }

  return 'Unable to determine IP address';
}
