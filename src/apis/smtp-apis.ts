import { ISmtpResponse, IUpdateSmtp } from '@/interfaces/smtp-interface';
import { api } from './_base';

export async function getSmtpApi() {
  return api<ISmtpResponse>('/admin/smtp-config', {
    method: 'GET',
  });
}

export async function updateSmtpApi(data: IUpdateSmtp) {
  return api<ISmtpResponse>('/admin/smtp-config', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function testSmtpEmailApi(email: string) {
  return api<{ success: boolean }>('/admin/smtp-config/test', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}
