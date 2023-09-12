export function updateProfileRequest(oldPassword, newPassword) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { oldPassword, newPassword },
  };
}
