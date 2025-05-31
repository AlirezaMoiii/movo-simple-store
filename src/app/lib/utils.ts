export const checkReferrer = () => {
  if (
    document.referrer &&
    new URL(document.referrer).origin === window.location.origin
  ) {
    return true;
  }
  else {
    return false;
  }
};
