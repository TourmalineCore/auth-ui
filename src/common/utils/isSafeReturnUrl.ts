export function isSafeReturnUrl({
  returnUrl,
  baseUrl = window.location.origin,
}: {
  returnUrl: string,
  // baseUrl used only to tests
  // in addition to tests, this value should not be rewrite
  baseUrl?: string,
}) {
  try {
    const url = new URL(returnUrl, baseUrl)

    if (url.origin !== baseUrl) {
      return false
    }

    if (url.searchParams.has(`returnUrl`)) {
      return false
    }

    return true
  }
  catch {
    return false
  }
}