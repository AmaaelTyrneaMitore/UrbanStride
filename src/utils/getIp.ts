import os from 'os';

import axios from 'axios';

export async function getPublicIpAddress(): Promise<string> {
  try {
    const response = await axios.get('https://api.ipify.org');
    return response.data;
  } catch (error) {
    throw new Error('Unable to retrieve public IP address');
  }
}

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
