'use server';

export default async function getToken() {
  return process.env.TOKEN;
}
