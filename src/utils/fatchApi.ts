const globalAbortController = new AbortController();

export async function fetchDataFromServer(url: string, timeout: number = 10000) {
  const startTimestamp = Date.now();

  const controller = timeout > 0 ? new AbortController() : globalAbortController;
  const timeoutId = timeout > 0 ? setTimeout(() => controller.abort(), timeout) : null;

  try {
    const response = await fetch(url, { signal: controller.signal, cache: 'no-cache' });

    if (!response.ok) {
      const errorText = await response.text();
      const error: Error = new Error(`Failed to fetch data. Server error: ${response.status} - ${errorText}`);
      throw error;
    }

    const responseBody = await response.text();
    if (responseBody.trim().length === 0) {
      throw new Error("Response body is empty");
    }

    try {
      return JSON.parse(responseBody);
    } catch (jsonError: any) {
      throw jsonError;
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log(error)
      console.error('Request timed out. Please check your network and server.');
    } else {
      console.error(`Failed to fetch data from ${url}. Error: ${error.message}`);
    }
    throw error;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
    const endTimestamp = Date.now();
    console.log(`Request to ${url} completed in ${endTimestamp - startTimestamp}ms`);
  }
}
