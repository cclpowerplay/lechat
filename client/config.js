const isDev = process.env.NODE_ENV === 'development';

export default {
  isDev,
  brandName: 'LeChat',
  avatarUploadLimit: 3 * 1024 * 1024, // 3 MB
};
